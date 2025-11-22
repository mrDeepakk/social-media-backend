# Social Media Backend (Node + TypeScript + PostgreSQL + Prisma)

## Overview

A production-grade backend API for a social media application, built with Node.js, Express, TypeScript, Prisma, PostgreSQL, Cloudinary, and JWT Authentication.
Implements a complete user graph, media posting, and personalized feed system.

## 🔥 Features

- ⚙️ Tech Stack: Node.js, TypeScript, Express.js, PostgreSQL, Prisma ORM

- 🔐 JWT Authentication (Signup & Login)

- 👥 Follow / Unfollow System

- 📊 Followers & Following Lists

- 📝 Create Posts (text + media)

- 🖼️ Image Uploads using Cloudinary

- 📄 Get User Posts & Own Posts

- 📰 Personalized Feed (posts from following + self)

- ⏳ Feed Pagination

- 🛡️ Zod Validation for Request Bodies

- 🔒 Security with Helmet, CORS, Rate Limiting

- 🐳 Dockerized for easy deployment

- 🧪 Postman Collection Included

- ⚡ Fast, clean, production-ready REST API

## 🧩 API Endpoints
🔐 Auth

- POST /auth/signup

- POST /auth/login

👥 User Graph

- POST /users/:id/follow

- POST /users/:id/unfollow

- GET /users/:id/followers

- GET /users/:id/following

📝 Posts

- POST /posts – Create post (text + media)

- GET /posts/me

- GET /posts/user/:id

📰 Feed

- GET /feed?page=&limit= (paginated)

### 🛠 Setup .env File
```js
PORT=4000
JWT_SECRET=your_jwt_secret_here
DATABASE_URL=postgresql://postgres:password@host:5432/dbname

CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### 🔌Setup
```bash
git clone https://github.com/mrDeepakk/social-media-backend.git
cd social-media-backend
npm install
```

### 🗄️ Prisma Setup
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 🧪 Start Development Server
```bash
npm run dev
```
