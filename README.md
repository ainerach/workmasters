# WorkMasters Launchpad

WorkMasters Launchpad is a premium full-stack Next.js platform for a six-month productivity program. It includes participant dashboards, application forms, session tracking, mentorship management, investment progress, and admin oversight.

## What’s included

- Next.js App Router with TypeScript
- Tailwind CSS for responsive layouts
- Prisma ORM schema for users, applications, participants, sessions, assignments, investments, pods, and more
- PostgreSQL-ready schema and seed script
- NextAuth credentials auth route
- Reusable dashboard components for cards, progress bars, tables, and layout
- Pages for Landing, Apply, Dashboard, Sessions, Learning Hub, Tools, Assignments, Resources, Mentorship, Investments, Creations, Pods, and Admin

## Setup

1. Install Node.js 20+ and npm.
2. Copy `.env.example` to `.env`.
3. Set `MONGODB_URL` to your MongoDB connection string (Atlas recommended).
4. Run `npm install`.
5. Run `npx prisma generate`.
6. Run `npx prisma db push`.
7. Run `npm run prisma:seed`.
8. Run `npm run dev`.

## Deploying to Netlify

1. Create a new site on Netlify and connect your GitHub repository.
2. In Netlify site settings, add the following environment variables:
	- `MONGODB_URL` — your MongoDB connection string (Atlas recommended)
	- `NEXTAUTH_SECRET` — random secret for NextAuth
	- `NEXTAUTH_URL` — production URL (e.g. `https://your-site.netlify.app`)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Netlify will use the `@netlify/plugin-nextjs` plugin (configured in `netlify.toml`) to deploy Next.js features.

Note: Run `npx prisma db push` and `npm run prisma:seed` locally (or from a secure environment) to populate your database before or after deployment — seeding during the Netlify build is not recommended.

## Notes


## Cloudinary

This project supports storing images in Cloudinary. Set these environment variables before using the image upload API or the `ImageUploader` component:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Client image uploads use the `ImageUploader` component (`components/image-uploader.tsx`) which sends a base64 data URI to the server route at `/api/upload`. The server uploads to Cloudinary using the `cloudinary` SDK and returns the uploaded asset information.
# workmasters
# workmasters
