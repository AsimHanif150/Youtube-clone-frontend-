# YouTube Clone — Frontend + Backend

A YouTube-inspired video browsing application. The existing React frontend is being connected to a FastAPI backend and PostgreSQL database. The current phase focuses on browsing, searching, category filtering, local video playback, authentication, comments, and reactions.

> The existing frontend UI is the design source of truth. Backend integration should preserve its layout and styling.

## Stack

- Frontend: React 19, Vite 7, JavaScript, React Router 7
- Backend: Python, FastAPI, Pydantic
- Database: PostgreSQL
- ORM/migrations: SQLAlchemy 2.x and Alembic (planned)
- Authentication: JWT bearer access tokens
- Video storage: local filesystem

## Repository structure

```text
.
├── src/                 # Existing React application
├── public/              # Frontend public assets
├── backend/             # FastAPI application (to be added)
├── PRD.md
├── architecture.md
├── schema.md
├── API.md
├── user_flows.md
├── task.md
└── AGENTS.md
```

The backend structure is specified in `architecture.md` and will be created during implementation.

## Documentation

- [Product requirements](PRD.md)
- [Architecture](architecture.md)
- [Database schema](schema.md)
- [REST API contract](API.md)
- [User flows](user_flows.md)
- [Implementation roadmap](task.md)
- [Agent/developer instructions](AGENTS.md)

## Current frontend setup

```bash
npm install
npm run dev
```

Available scripts:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Backend setup

Backend implementation has not yet been added. The planned local setup will require Python, PostgreSQL, and a backend `.env` file based on `.env.example`. Exact commands and dependencies will be added with the first backend implementation milestone.

Expected environment variables include `DATABASE_URL`, `JWT_SECRET_KEY`, `ACCESS_TOKEN_EXPIRE_MINUTES`, `CORS_ORIGINS`, `VIDEO_STORAGE_DIR`, and `THUMBNAIL_STORAGE_DIR`.

Do not commit real secrets or local video files.

## Local video storage

Video files are stored outside the frontend public folder, under a configurable backend storage directory. PostgreSQL stores metadata and relative storage keys only. The backend must validate each key and stream files with HTTP Range support. The first phase does not include a video-upload endpoint; sample files are placed in local storage by the developer/seed process.

## Scope of this phase

Included: video listing/details/playback, search, category filtering, registration/login, comments, likes/dislikes, and basic view counting.

Not included unless later approved: video uploads, creator dashboards, subscriptions, recommendations, playlists, notifications, live streaming, monetization, and CDN-scale delivery.

## Project status

The React frontend exists. Backend setup and API integration are planned work; consult `task.md` for the implementation checklist. Do not interpret the documented API contract as already implemented.
