# Lucians Portfolio

A personal portfolio for Lucians, a data analyst and software engineer.

## Features

- Project pages with screenshots and details
- Credentials and activity timeline
- Dark and light themes
- Interactive koi pond on the home page
- Responsive layout

## Built With

- Next.js, React, and TypeScript
- Tailwind CSS
- Framer Motion

## Run Locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build, run:

```bash
npm run build
npm run start
```

## Update Portfolio Content

- Projects: `src/data/projects.ts`
- Credentials: `src/data/credentials.ts`
- Activities: `src/data/activities.ts`
- Home page links: `src/app/data/sources.ts`

Place project images in `public/projects/` and credential images in `public/credentials/`.

## Deploy

Push the repository to GitHub and import it into Vercel. Vercel detects Next.js and uses `next build` by default.

PostHog analytics is optional. To enable it, set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` in your Vercel project settings.
