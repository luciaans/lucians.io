# Lucians Portfolio

Personal portfolio for **Lucians** — Data Analyst & Software Engineer.

Features a monospace aesthetic, dark/light theme toggle, interactive ASCII koi pond background canvas, animated hover citations, project horizontal showcase, credentials viewer with lightbox, and a chronological activities log.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/), [@phosphor-icons/react](https://phosphoricons.com/)

## Getting Started

1. **Install dependencies**:

    ```bash
    npm install
    ```

2. **Run local development server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
    ```bash
    npm run build
    npm run start
    ```

## Editing Content & Data

All personal portfolio content is organized in typed data files for easy updates:

- **Projects**: Edit [`src/data/projects.ts`](src/data/projects.ts) to add or modify projects, descriptions, tags, and repo links.
- **Credentials & Certifications**: Edit [`src/data/credentials.ts`](src/data/credentials.ts) to update certificates, HKI records, and internship certificates. Images are stored in `public/credentials/`.
- **Activities & Timeline**: Edit [`src/data/activities.ts`](src/data/activities.ts) to add milestone entries and optional photos stored in `public/activities/`.
- **Home Citations**: Edit [`src/app/data/sources.ts`](src/app/data/sources.ts) to adjust hover card details for mentioned organizations.

## Deployment to Vercel

1. Push this repository to GitHub under your account (`https://github.com/luciaans/lucians.io.git`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `portfolio` repository.
4. Leave build settings as default (`next build`).
5. (Optional) Set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` in Environment Variables if using PostHog analytics.
6. Click **Deploy**.

## Credits

Visual layout and interaction design adapted from the open-source portfolio by [Dao-Ho](https://github.com/Dao-Ho/portfolio).
