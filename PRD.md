# Product Requirements Document

## 1. Product overview

This project is a YouTube-inspired video browsing frontend with a lightweight backend added to make its core screens data-driven. The existing React implementation is the UI source of truth. This phase connects that interface to a FastAPI backend and PostgreSQL database while preserving its current visual design.

## 2. Goals

- Load video cards from the backend instead of hardcoded arrays.
- Open a video by its route ID and load its metadata dynamically.
- Play video files stored on the backend server's local filesystem.
- Search videos by title and description.
- Filter the homepage by the categories already represented in the UI.
- Support user registration, login, and JWT-protected actions.
- Persist comments and one like/dislike reaction per authenticated user per video.
- Keep the implementation small enough for a student project and local development.

## 3. Non-goals for this phase

The following are explicitly out of scope unless approved later:
- Creator dashboards, channel management, and channel subscriptions.
- Video upload UI/API and transcoding pipelines.
- Recommendation or personalization engines.
- Playlists, watch history pages, notifications, live streaming, monetization, ads, and analytics dashboards.
- Production-scale CDN delivery, adaptive bitrate streaming, and distributed storage.
- Rebuilding or redesigning the existing React interface.

Video files for the initial phase are placed in the backend's local storage directory by the developer or seed process. The database stores metadata and a storage key/path, not the binary video itself.

## 4. Users and primary use cases

### Visitor
- Browse the homepage and available categories.
- Search for videos.
- Open a video page and watch a video.
- Read comments.

### Registered user
- Register and log in.
- Like or dislike a video; changing the reaction replaces the previous reaction.
- Add a comment.
- See their authenticated state in the existing header/profile area.

## 5. Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Homepage requests a paginated video list from the API. | Must |
| FR-02 | Video cards display backend-provided thumbnail, title, channel name, views, and published time. | Must |
| FR-03 | Selecting a card navigates to `/video/:id`; the page fetches that video's details. | Must |
| FR-04 | Video playback uses a backend-provided local streaming endpoint. | Must |
| FR-05 | Search returns matching videos by title and description. | Must |
| FR-06 | Category controls filter videos using category IDs/slugs. | Must |
| FR-07 | Visitors can read comments. | Must |
| FR-08 | Users can register, log in, and retrieve their current profile. | Must |
| FR-09 | Authenticated users can create comments. | Must |
| FR-10 | Authenticated users can create, change, or remove their like/dislike reaction. | Must |
| FR-11 | The API returns useful validation and authorization errors. | Must |
| FR-12 | Video view counts can be recorded with a deduplicated visitor key. | Should |

## 6. Existing frontend baseline

The repository currently contains a React 19 + Vite 7 JavaScript application using React Router 7 and CSS. The main routes are:
- `/` — homepage with header, sidebar, category controls, and video cards.
- `/video/:id` — video page.

The inspected components include `Header.jsx`, `Homepage.jsx`, `Sidebar.jsx`, `Videocard.jsx`, and `Videopage.jsx`. The current screen data and several interactions are static/sample content. Backend integration should adapt these components rather than replace their layout.

## 7. Non-functional requirements

- Use JSON REST endpoints under `/api/v1`.
- Validate request and response data with Pydantic.
- Store passwords using a modern password-hashing algorithm; never store plaintext passwords.
- Keep secrets and database credentials in environment variables.
- Restrict CORS to configured frontend origins.
- Validate video storage keys and prevent path traversal.
- Stream local video files with HTTP byte-range support so browser seeking works.
- Use database migrations for schema changes.
- Provide clear local setup instructions and a sample environment file.

## 8. Acceptance criteria

- Homepage renders videos from PostgreSQL through the API.
- Search and category filtering work together with pagination.
- A card opens the matching video record at `/video/:id`.
- Video playback works from the local storage directory and supports seeking.
- A visitor can register and log in; protected requests reject missing/invalid tokens.
- A logged-in user can comment and can have only one current reaction per video.
- Comments and reactions remain after refreshing the page.
- Existing visual layout and styling remain substantially unchanged.
- README setup instructions are sufficient to run frontend, backend, and PostgreSQL locally.

## 9. Assumptions and decisions

- Backend: Python + FastAPI.
- Database: PostgreSQL.
- ORM: SQLAlchemy 2.x (recommended implementation choice).
- Migrations: Alembic (recommended implementation choice).
- API schemas: Pydantic.
- Authentication: short-lived JWT access token; refresh-token flow is not required in the first iteration.
- Password hashing: Argon2id where supported by the chosen password library.
- Video storage: local filesystem for development and this project phase.
- Frontend: keep current React/Vite JavaScript application.
- Uploading videos is not part of the first release; files are added locally and registered as video records.
