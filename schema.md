# Database Schema

## 1. Conventions

- PostgreSQL is the source of truth for application metadata.
- Use UUID primary keys for externally visible entities.
- Store timestamps as timezone-aware UTC values.
- Use SQLAlchemy models and Alembic migrations.
- Never store password plaintext or large video binaries in PostgreSQL.
- Names below are proposed table/column names; adjust only when implementation reveals a concrete need.

## 2. Tables

### users

| Column | Type | Rules |
|---|---|---|
| id | UUID | Primary key |
| username | VARCHAR(40) | Required |
| email | VARCHAR(255) | Required, unique, normalized lowercase |
| password_hash | TEXT | Required |
| avatar_url | TEXT | Nullable |
| created_at | TIMESTAMPTZ | Required, default now |
| updated_at | TIMESTAMPTZ | Required, default now |

### videos

| Column | Type | Rules |
|---|---|---|
| id | UUID | Primary key |
| title | VARCHAR(200) | Required |
| description | TEXT | Nullable |
| channel_name | VARCHAR(120) | Required for current UI |
| channel_avatar_url | TEXT | Nullable |
| thumbnail_key | TEXT | Nullable; relative key in thumbnail storage |
| storage_key | TEXT | Required; relative key in video storage |
| original_filename | VARCHAR(255) | Nullable; display/audit metadata only |
| mime_type | VARCHAR(100) | Required |
| duration_seconds | INTEGER | Nullable, must be >= 0 |
| view_count | BIGINT | Required, default 0 |
| published_at | TIMESTAMPTZ | Nullable |
| created_at | TIMESTAMPTZ | Required, default now |
| is_published | BOOLEAN | Required, default true |

### categories

| Column | Type | Rules |
|---|---|---|
| id | UUID | Primary key |
| name | VARCHAR(80) | Required |
| slug | VARCHAR(100) | Required, unique |
| display_order | INTEGER | Required, default 0 |

### video_categories

| Column | Type | Rules |
|---|---|---|
| video_id | UUID | FK videos.id, part of primary key |
| category_id | UUID | FK categories.id, part of primary key |

This many-to-many mapping lets one video appear under more than one category.

### comments

| Column | Type | Rules |
|---|---|---|
| id | UUID | Primary key |
| video_id | UUID | FK videos.id, required, indexed |
| user_id | UUID | FK users.id, required |
| body | TEXT | Required, trimmed, non-empty, bounded length |
| created_at | TIMESTAMPTZ | Required, default now |
| updated_at | TIMESTAMPTZ | Required, default now |

### reactions

| Column | Type | Rules |
|---|---|---|
| id | UUID | Primary key |
| video_id | UUID | FK videos.id, required |
| user_id | UUID | FK users.id, required |
| reaction_type | VARCHAR(10) | Required; `like` or `dislike` |
| created_at | TIMESTAMPTZ | Required, default now |
| updated_at | TIMESTAMPTZ | Required, default now |

Add a unique constraint on `(video_id, user_id)`. This enforces one current reaction per user per video. Updating the row changes like to dislike or vice versa; deleting it removes the reaction.

### video_views

| Column | Type | Rules |
|---|---|---|
| id | UUID | Primary key |
| video_id | UUID | FK videos.id, required |
| visitor_key | UUID | Required |
| viewed_at | TIMESTAMPTZ | Required, default now |

Add a unique constraint on `(video_id, visitor_key)` for the initial simple deduplication policy. The frontend generates and retains a random visitor key locally. This is a basic demo-level policy, not fraud-proof analytics.

## 3. Relationships

- A video has many comments.
- A user has many comments.
- A user can have at most one current reaction for each video.
- A video belongs to many categories; a category contains many videos.
- A video has many view records, with one record per visitor key under the initial deduplication rule.

## 4. Indexes and constraints

- Unique: `users.email`, `categories.slug`, `(reactions.video_id, reactions.user_id)`, `(video_views.video_id, video_views.visitor_key)`.
- Index: `videos.is_published`, `videos.published_at`, `videos.title`, `comments.video_id`, `comments.created_at`, `video_categories.category_id`.
- Add PostgreSQL full-text search or an appropriate trigram index only if basic title/description search becomes too slow; begin with a simple indexed/search query.
- Use foreign-key constraints and deliberate delete behavior. Deleting a video should cascade its comments, reactions, view records, and category mappings.

## 5. Important implementation notes

- Return reaction totals (like count and dislike count) as aggregates; do not store duplicate counters initially.
- A user's own reaction can be returned separately when an authenticated user requests video details.
- A view should be recorded through a POST endpoint, not as a side effect of a GET request.
- Keep storage paths relative and validate them against the configured storage root before opening files.
- Seed categories and a few video records for local development. Seeded video records must reference files that actually exist in local storage.
