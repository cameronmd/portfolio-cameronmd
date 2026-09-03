# Portfolio — Cameron Matheson-Dear

A personal portfolio and CV site that showcases five projects — **TheGroupBet**,
**TheGroupOrganiser**, **TheGroupGameweek** and the **Falkirk Curling** and
**Falkirk Fury Basketball** club fixture apps — alongside a short "about me"
section. Built with a modern stack, fully unit-tested, and continuously
deployed: every commit to `main` updates the live site automatically.

**Live site: [cameronmd.github.io/portfolio-cameronmd](https://cameronmd.github.io/portfolio-cameronmd/)**

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
| Hosting        | [GitHub Pages](https://pages.github.com) |

The site is fully static — `next build` runs a static export
(`output: "export"`) to `out/`, so it is fast, cheap to host and served
straight from GitHub Pages' CDN. Because it lives at a project subpath
(`/portfolio-cameronmd`), `next.config.mjs` sets a matching `basePath` for
production builds.

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
│   ├── icon.svg        # CMD monogram favicon (Next.js icon convention)
│   └── globals.css     # Tailwind directives + base styles
├── components/         # One component per page section
│   ├── Nav.tsx         # Sticky nav; scroll-spy highlights the section in view
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
    └── projects.ts     # The showcase projects
```

### Editing content

All copy lives in `src/data/` — you never need to touch a component to change
what the site says:

- **`src/data/cv.ts`** — your name, headline, bio, work history, education and
  skills. Fields tagged `PLACEHOLDER` are generic defaults; replace them with
  your real details.
- **`src/data/projects.ts`** — the three projects. Each has a `useCase` and
  technical `highlights`. Source repos are private, so a project surfaces a
  live-site link via `liveUrl` (with an optional pretty `liveLabel`), or — for
  products with no public web UI, like the WhatsApp bot — a worked
  `chatExample` rendered as a mini chat mockup instead.

---

## Testing

Every component and both data modules are unit-tested with Jest and React
Testing Library. The suite covers:

- **Data integrity** — every project has the fields the UI relies on; slugs are
  unique; the CV exposes its core fields.
- **Rendering** — each section renders its headings, links and content.
- **Behaviour** — `ProjectCard` links to the live site when a `liveUrl` is set
  and renders the worked chat example otherwise; the nav scroll-spy marks the
  section in view as `aria-current`; contact links use the correct
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
4. `npm run build` — production build (static export)

The build must be green before a deploy is considered healthy.

### Deployment (GitHub Pages)

Deployment is handled by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): on every push to
`main` it builds the static export and publishes `out/` to GitHub Pages using
the official `upload-pages-artifact` / `deploy-pages` actions. CI above stays
the quality gate; this workflow does the build-and-ship.

One-time setup:

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually from
   the **Actions** tab). The site goes live at
   `https://cameronmd.github.io/portfolio-cameronmd/`.

Notes:

- The site is a **project page**, so it is served from the `/portfolio-cameronmd`
  subpath; `next.config.mjs` sets a matching `basePath` for production builds.
  Moving to a user page or a custom domain at the root means clearing `basePath`
  and updating `profile.url` in `src/data/cv.ts`.
- `public/.nojekyll` keeps GitHub Pages from stripping Next's `_next/` assets.
- Unlike a Vercel setup, GitHub Pages gives **no per-PR preview URLs** — pull
  requests are validated by CI only.

---

## Featured projects

| Project | What it is | Stack |
| ------- | ---------- | ----- |
| [**TheGroupBet**](https://github.com/cameronmd/thegroupbet) | Track weekly football accumulators with your mates — live feed, auto-settlement, season reports, push notifications | React · Express · Supabase |
| [**TheGroupOrganiser**](https://github.com/cameronmd/thegrouporganiser) | A WhatsApp bot that runs a five-a-side — sign-ups, guests, payments and reserves from the group chat | Node.js · whatsapp-web.js · SQLite |
| [**TheGroupGameweek**](https://github.com/cameronmd/thegroupgameweek) | Fantasy football mini-league stats dashboard, mobile-first | React · Express · Supabase |
| [**Falkirk Curling Club**](https://cameronmd.github.io/FalkirkCurlingClub/) | Turns the club's season rota spreadsheet into just your games, with one-tap calendar export — offline-first PWA | Vanilla JS · SheetJS · PWA |
| [**Falkirk Fury Basketball**](https://cameronmd.github.io/FalkirkFuryBasketballClub/) | Every team's season fixtures, pre-loaded, with venues and calendar export — offline-first PWA | Vanilla JS · SheetJS · PWA |

---

## Licence

© Cameron Matheson-Dear. All rights reserved.
