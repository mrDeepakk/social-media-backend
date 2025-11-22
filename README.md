# Social Media Backend

## Overview

It supports authentication, a user follow graph, posting with media, and a personalized feed.

## Features

- User signup & login (JWT)
- Follow / Unfollow users
- Followers & Following lists
- Create posts (text + media via Cloudinary)
- User posts & own posts
- Feed from followed users + self (paginated)
- Input validation using Zod
- Secure middleware (Helmet, CORS, Rate Limiting)
- Dockerized (Node + Postgres + Adminer)

## Tech Stack

- Node.js 18+
- Express.js
- TypeScript
- PostgreSQL 15
- Prisma ORM
- JWT / bcrypt
- Multer + Cloudinary
- Zod
- Helmet, CORS, express-rate-limit
- Docker / docker-compose

## ER Diagram (Textual)

- **User**

  - id (PK)
  - name
  - email (unique)
  - password
  - avatar
  - createdAt
  - updatedAt

- **Post**

  - id (PK)
  - userId (FK → User.id, onDelete: CASCADE)
  - text (optional)
  - mediaUrl (optional)
  - createdAt

- **Follow**
  - id (PK)
  - followerId (FK → User.id)
  - followingId (FK → User.id)
  - createdAt
  - unique(followerId, followingId)

## Routes (API Spec)

- `POST /auth/signup`
- `POST /auth/login`
- `POST /users/:id/follow`
- `POST /users/:id/unfollow`
- `GET /users/:id/followers`
- `GET /users/:id/following`
- `POST /posts` (form-data: text?, media?)
- `GET /posts/me`
- `GET /posts/user/:id`
- `GET /feed?page=&limit=`

## Setup

```bash
git clone https://github.com/mrDeepakk/social-media-backend.git
cd social-media-backend
npm install
npm run dev
```
