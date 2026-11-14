# Agent Instructions

## Project intent
This repository contains an existing React/Vite YouTube-style frontend. The task is to integrate a small FastAPI + PostgreSQL backend into the current UI. Do not rebuild the frontend.

## Non-negotiable UI rules
- Treat the existing React components and CSS as the design source of truth.
- Do not redesign pages, change the visual theme, replace the layout, or perform broad CSS refactors.
- Do not remove existing components or alter navigation structure without a clear functional need.
- Prefer wiring existing controls to API data and adding small loading, empty, and error states that match current styles.
- If a new login/register view is required, make the smallest consistent addition and reuse existing styling patterns.

## Scope
In scope: video listing, video details, local-file playback, search, category filtering, JWT registration/login/current-user, comments, like/dislike reactions, and basic deduplicated view recording.

Out of scope unless explicitly approved: video upload/transcoding, subscriptions, creator dashboards, recommendations, playlists, notifications, live streaming, monetization, ads, and production CDN infrastructure.

## Architecture
- Frontend: current React 19 + Vite 7 JavaScript application.
- Backend: Python + FastAPI.
- Database: PostgreSQL.
- Recommended backend libraries: SQLAlchemy 2.x, Alembic, Pydantic, and an Argon2id-capable password hashing library.
- API base path: `/api/v1`.
- Authentication: JWT bearer access token.
- Video files: local filesystem under a configured backend storage root. Store relative storage keys in PostgreSQL, never absolute server paths.
- Keep binary video files out of PostgreSQL and out of Git.

## Engineering rules
- Keep API routes thin; put business logic in service modules.
- Use Pydantic request/response schemas and SQLAlchemy models.
- Use Alembic migrations for schema changes; do not rely on create-all in production.
- Use environment variables for secrets and environment-specific configuration.
- Never commit real credentials, tokens, or private media.
- Derive authenticated user identity from the verified JWT, not request body fields.
- Protect comment creation and reaction mutations.
- Validate storage keys against the configured root; prevent path traversal.
- Implement HTTP Range support for video streaming and avoid loading entire files into memory.
- Add tests for important business rules and security boundaries.
- Do not claim a feature is complete unless it is implemented and tested.

## Workflow
1. Inspect relevant existing code before editing.
2. Make the smallest change that satisfies the task.
3. Preserve naming/style conventions where reasonable.
4. Run backend tests and frontend lint/build when relevant.
5. Summarize files changed, behavior added, commands run, and known limitations.
6. If requirements conflict with these instructions, ask before making a broad architectural or visual change.

## Documentation
Use `PRD.md`, `architecture.md`, `schema.md`, `API.md`, `user_flows.md`, and `task.md` as the project contract. If implementation differs, update the relevant document in the same change.
