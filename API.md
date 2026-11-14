# REST API Contract

Base path: `/api/v1`

All normal API responses use JSON. Video streaming is a binary response and supports HTTP byte ranges. IDs are UUIDs. Exact response schemas should be implemented as Pydantic models and kept consistent with this contract.

## 1. Authentication

### POST `/auth/register`
Public. Create an account.

Request:
```json
{
  "username": "asim",
  "email": "asim@example.com",
  "password": "strong-password"
}
```

Response: `201 Created` with `{ "id": "...", "username": "...", "email": "..." }`. Never return password hashes.

### POST `/auth/login`
Public. Verify credentials.

Request:
```json
{ "email": "asim@example.com", "password": "strong-password" }
```

Response:
```json
{
  "access_token": "<jwt>",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": { "id": "...", "username": "...", "email": "..." }
}
```

### GET `/auth/me`
Requires bearer token. Returns the current user's safe profile.

## 2. Videos

### GET `/videos`
Public. List published videos, newest first by default.

Query parameters:
- `page` (default 1, minimum 1)
- `page_size` (default 12, bounded maximum such as 50)
- `category` (optional category slug)
- `q` (optional search phrase; search title and description)

Response:
```json
{
  "items": [
    {
      "id": "uuid",
      "title": "Example video",
      "description": "Description",
      "channel_name": "Example channel",
      "channel_avatar_url": null,
      "thumbnail_url": "/api/v1/videos/uuid/thumbnail",
      "views": 1200,
      "duration_seconds": 180,
      "published_at": "2026-01-01T12:00:00Z"
    }
  ],
  "page": 1,
  "page_size": 12,
  "total": 1
}
```

### GET `/videos/{video_id}`
Public. Return video details, playback URL, category labels, like/dislike counts, and comments count. If the requester is authenticated, include their current reaction.

### GET `/videos/{video_id}/stream`
Public. Stream the local video file. Support `Range` requests and return `206 Partial Content` when a valid range is requested. Return `404` if the record or file is missing and `416` for an unsatisfiable range.

### GET `/videos/{video_id}/thumbnail`
Public. Return the thumbnail file if one is configured and exists.

### POST `/videos/{video_id}/views`
Public. Record a view using a client-generated `visitor_key` UUID in the JSON body. Enforce the unique pair of video and visitor key. Return the current view count. Do not increment repeatedly for the same key.

Request:
```json
{ "visitor_key": "uuid" }
```

## 3. Categories

### GET `/categories`
Public. Return categories ordered by `display_order`. Each item contains `id`, `name`, and `slug`.

## 4. Comments

### GET `/videos/{video_id}/comments`
Public. Return paginated comments, newest first, including safe author information (username/avatar) and timestamps.

### POST `/videos/{video_id}/comments`
Requires bearer token.

Request:
```json
{ "body": "This is a comment." }
```

Response: `201 Created` with the created comment. Validate non-empty content and a reasonable maximum length (for example 2,000 characters).

## 5. Reactions

### PUT `/videos/{video_id}/reaction`
Requires bearer token. Create or replace the current user's reaction.

Request:
```json
{ "type": "like" }
```

Allowed values: `like`, `dislike`.

Response: current reaction type and updated aggregate counts.

### DELETE `/videos/{video_id}/reaction`
Requires bearer token. Remove the current user's reaction. Return `204 No Content`.

## 6. Standard errors

Use a consistent error body, for example:
```json
{
  "detail": {
    "code": "VIDEO_NOT_FOUND",
    "message": "The requested video was not found."
  }
}
```

Expected status codes:
- `400` invalid business operation or malformed input.
- `401` missing/invalid/expired authentication token.
- `403` authenticated but not permitted.
- `404` video/category/comment resource not found.
- `409` duplicate email or conflicting unique resource.
- `422` request validation failure.
- `416` invalid or unsatisfiable byte range for streaming.
- `500` unexpected server error; never expose stack traces or secrets.

## 7. API behavior rules

- Use `Authorization: Bearer <access_token>` for protected routes.
- Derive the acting user from the verified JWT, never from a user ID in the request body.
- Do not return password hashes, internal absolute paths, or storage filesystem details.
- Apply pagination bounds and validate UUIDs.
- Filter unpublished videos from public endpoints.
- Configure CORS with explicit allowed frontend origins.
- The API contract does not include video upload, subscriptions, playlists, or recommendations in this phase.
