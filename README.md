# Portfolio — Cameron Matheson-Dear

A personal portfolio and CV site that showcases three projects — **TheGroupBet**,
**TheGroupOrganiser** and **TheGroupGameweek** — alongside a short "about me"
section. Built with a modern stack, fully unit-tested, and continuously
deployed: every commit to `main` updates the live site automatically.

[![CI](https://github.com/cameronmd/portfolio-cameronmd/actions/workflows/ci.yml/badge.svg)](https://github.com/cameronmd/portfolio-cameronmd/actions/workflows/ci.yml)

---

## Tech stack

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Framework      | [Next.js 15](https://nextjs.org) (App Router) |
| Language       | TypeScript                               |
| Styling        | [Tailwind CSS](https://tailwindcss.com)  |
| Testing        | Jest + React Testing Library (`next/jest`) |
| Linting        | ESLint (`next/core-web-vitals`)          |
| CI             | GitHub Actions                           |
| Hosting        | [Vercel](https://vercel.com)             |

The site is fully static (`○ (Static) prerendered as static content`), so it is
fast, cheap to host and trivially cacheable on Vercel's edge network.

---

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the dev server on http://localhost:3000
```

### Scripts

| Script             | What it does                                            |
| ------------------ | ------------------------------------------------------- |
| `npm run dev`      | Start the Next.js dev server                            |
| `npm run build`    | Production build                                        |
| `npm start`        | Serve the production build                              |
| `npm run lint`     | Run ESLint                                              |
| `npm test`         | Run the Jest test suite                                 |
| `npm run test:watch` | Run tests in watch mode                               |
| `npm run test:ci`  | Run tests once with coverage (used by CI)               |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, <head> metadata
│   ├── page.tsx        # Home page — composes every section
│   └── globals.css     # Tailwind directives + base styles
├── components/         # One component per page section
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx    # Renders a ProjectCard per project
│   ├── ProjectCard.tsx
│   ├── Experience.tsx  # Work history + education
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/               # Single source of truth for all content
    ├── cv.ts           # Bio, experience, education, skills
    └── projects.ts     # The three showcase projects
```

### Editing content

All copy lives in `src/data/` — you never need to touch a component to change
what the site says:

- **`src/data/cv.ts`** — your name, headline, bio, work history, education and
  skills. Fields tagged `PLACEHOLDER` are generic defaults; replace them with
  your real details.
- **`src/data/projects.ts`** — the three projects. Add a `liveUrl` to any
  project to surface a "Live site" link on its card.

---

## Testing

Every component and both data modules are unit-tested with Jest and React
Testing Library. The suite covers:

- **Data integrity** — every project has the fields the UI relies on; slugs are
  unique; the CV exposes its core fields.
- **Rendering** — each section renders its headings, links and content.
- **Behaviour** — `ProjectCard` only shows a "Live site" link when a `liveUrl`
  is set; nav links point at the right anchors; contact links use the correct
  `mailto:`/profile URLs.

```bash
npm test          # run once
npm run test:ci   # run with coverage (100% lines/branches/functions)
```

---

## Continuous integration & deployment

### CI (GitHub Actions)

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on every push and
pull request to `main`:

1. `npm ci` — clean install
2. `npm run lint` — ESLint
3. `npm run test:ci` — tests with coverage
4. `npm run build` — production build

The build must be green before a deploy is considered healthy.

### Deployment (Vercel)

Deployment uses Vercel's native Git integration, so **every commit to `main`
ships to production automatically** and every pull request gets its own preview
URL. One-time setup:

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. **Add New… → Project** and import `cameronmd/portfolio-cameronmd`.
3. Vercel auto-detects Next.js — accept the defaults and **Deploy**.

That's it. From then on:

- Push to `main` → production deploy.
- Open a PR → preview deploy, with the URL posted on the PR.

No secrets or workflow changes are needed; the GitHub Actions workflow above is
the quality gate, and Vercel handles the build-and-ship.

---

## Featured projects

| Project | What it is | Stack |
| ------- | ---------- | ----- |
| [**TheGroupBet**](https://github.com/cameronmd/thegroupbet) | Track weekly football accumulators with your mates — live feed, auto-settlement, season reports, push notifications | React · Express · Supabase |
| [**TheGroupOrganiser**](https://github.com/cameronmd/thegrouporganiser) | A WhatsApp bot that runs a five-a-side — sign-ups, guests, payments and reserves from the group chat | Node.js · whatsapp-web.js · SQLite |
| [**TheGroupGameweek**](https://github.com/cameronmd/thegroupgameweek) | Fantasy football mini-league stats dashboard, mobile-first | React · Express · Supabase |

---

## Licence

© Cameron Matheson-Dear. All rights reserved.
