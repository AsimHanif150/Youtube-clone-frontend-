# Implementation Roadmap

Work in small, testable milestones. Do not start by changing the existing UI.

## Phase 0 — Baseline and project setup
- [ ] Confirm the existing frontend still installs, lints, and builds.
- [ ] Record the current routes and component behavior before integration.
- [ ] Create a separate `backend/` Python project.
- [ ] Add FastAPI app, configuration loading, health endpoint, and CORS.
- [ ] Add PostgreSQL connection and SQLAlchemy session management.
- [ ] Add Alembic and initial migration.
- [ ] Add `.env.example` and ignore real `.env` files and local media.

## Phase 1 — Data model and seed data
- [ ] Implement users, videos, categories, video_categories, comments, reactions, and video_views models.
- [ ] Add constraints and indexes from `schema.md`.
- [ ] Create migration and verify upgrade/downgrade.
- [ ] Add seed categories and sample videos.
- [ ] Add sample video and thumbnail files to local storage manually; do not commit large or copyrighted media.

## Phase 2 — Public video APIs
- [ ] Implement paginated `GET /videos`.
- [ ] Implement category filtering and search.
- [ ] Implement `GET /categories`.
- [ ] Implement `GET /videos/{id}`.
- [ ] Implement thumbnail delivery.
- [ ] Implement secure local video streaming with byte-range support.
- [ ] Test missing files, invalid IDs, range requests, and traversal attempts.

## Phase 3 — Authentication
- [ ] Implement registration with normalized unique email.
- [ ] Implement password hashing and verification.
- [ ] Implement login and JWT access-token creation.
- [ ] Implement bearer-token dependency and `GET /auth/me`.
- [ ] Test duplicate email, invalid password, missing token, invalid token, and expired token.

## Phase 4 — User interactions
- [ ] Implement paginated comment reads and authenticated comment creation.
- [ ] Implement upsert/delete reaction behavior.
- [ ] Implement deduplicated view recording.
- [ ] Test ownership, unique constraints, and aggregate counts.

## Phase 5 — Frontend integration
- [ ] Add centralized API base URL and API client.
- [ ] Replace homepage mock video array with API data.
- [ ] Wire category chips and search input.
- [ ] Fetch video details by `/video/:id`.
- [ ] Connect player to stream URL.
- [ ] Replace static comments with API comments.
- [ ] Connect like/dislike state and counts.
- [ ] Wire minimal login/register flow to existing header/profile entry point.
- [ ] Add loading, empty, and error states without redesigning the page.
- [ ] Ensure non-supported features are clearly non-functional or deferred.

## Phase 6 — Verification and handoff
- [ ] Run backend tests and frontend lint/build.
- [ ] Test visitor and authenticated flows end-to-end.
- [ ] Verify video seeking works in the browser.
- [ ] Verify no secrets or local media files are committed.
- [ ] Update README with setup, environment variables, seed steps, and run commands.
- [ ] Record known limitations and next steps.

## Definition of done

A milestone is done only when its acceptance criteria are met, tests pass, and its behavior is documented. Keep commits focused and avoid mixing backend implementation with unrelated UI cleanup.
