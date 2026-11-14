# User Flows

These flows describe the first backend-integrated release. Existing React screens and styling should be preserved.

## 1. Browse homepage

1. Visitor opens `/`.
2. React requests `GET /api/v1/videos?page=1&page_size=12`.
3. API returns published video metadata.
4. Homepage renders cards using returned thumbnails, titles, channel names, views, and dates.
5. While loading, show a lightweight loading state; if empty, show an empty state; if the request fails, show a retry/error state.

## 2. Filter by category

1. Visitor selects a category chip already shown in the homepage.
2. React sends the selected category slug as the `category` query parameter.
3. API returns only videos mapped to that category.
4. Selecting “All” clears the category filter.
5. Pagination resets to page 1 when the category changes.

## 3. Search

1. Visitor enters a search phrase in the existing header search field.
2. React submits the phrase to `GET /api/v1/videos?q=...`.
3. API searches published video titles and descriptions.
4. Results render in the existing homepage card layout.
5. Empty results display a clear “no videos found” state.
6. Search and category filters may be combined.

## 4. Watch a video

1. Visitor selects a video card.
2. React navigates to `/video/{id}`.
3. Video page requests `GET /api/v1/videos/{id}`.
4. API returns metadata and a stream URL.
5. Browser video player requests the stream endpoint; FastAPI streams the local file and supports range requests.
6. Page displays the matching title, channel, counts, description, and comments.
7. React records a view with a persistent random visitor key using the views endpoint.

## 5. Register and log in

1. Visitor opens the login/register entry point in the existing profile UI.
2. Register form submits username, email, and password to `POST /auth/register`.
3. Login form submits email and password to `POST /auth/login`.
4. On success, frontend stores the access token using the agreed client-side strategy and updates authenticated UI state.
5. Frontend sends the token in the Authorization header for protected requests.
6. On page refresh, frontend checks the current user with `GET /auth/me` when a token exists.
7. Logout clears the local token and authenticated state.

For this student project, keep token handling centralized. Prefer an HttpOnly secure cookie if the deployment setup supports it; otherwise document the XSS trade-offs of browser storage and keep the token out of logs. Never put tokens in URLs.

## 6. Comment on a video

1. Visitor can read comments without logging in.
2. If the visitor submits a comment while logged out, prompt them to log in.
3. Authenticated user submits comment text.
4. Frontend sends `POST /videos/{id}/comments` with bearer token.
5. API validates text and creates the comment using the user ID from the token.
6. Frontend inserts the returned comment or refreshes the comment list.

## 7. Like or dislike a video

1. Visitor selects like or dislike.
2. If logged out, prompt them to log in.
3. Authenticated frontend sends `PUT /videos/{id}/reaction` with `like` or `dislike`.
4. API creates or updates the single reaction row for that user/video pair.
5. Selecting the opposite reaction changes the existing reaction; selecting the current reaction may leave it selected or remove it, according to the final UI interaction decision.
6. The API returns updated counts and the current user's reaction.

## 8. Out-of-scope interactions

Subscription buttons, upload flows, creator/channel dashboards, recommendation controls, playlists, and notifications must not be represented as working backend features in this phase. Keep or disable their visual affordances only as agreed during frontend integration; do not build hidden backend behavior for them.
