# CLAUDE.md — Portfolio

Instructions and reference for anyone (including Claude) working on this repo.
These override default behaviour — read them before making changes.

## Project overview

A personal portfolio and CV website for **Cameron Matheson-Dear**. It showcases
three side projects — **TheGroupBet**, **TheGroupOrganiser** and
**TheGroupGameweek** — alongside an "about me / CV" section. Built with a modern
stack, fully unit-tested, and continuously deployed: every commit to `main`
updates the live site automatically via Vercel.

- **Repo:** `cameronmd/portfolio-cameronmd`
- **Hosting:** Vercel (auto-deploys from `main`; PRs get preview URLs)

## About Cameron (for content/positioning)

- **Current role:** Senior Software Engineer — Team Lead at **NCR Atleos**
  (Oct 2024 – present, Dundee, Scotland, hybrid), within the Software
  Integration, Automation & OEM team.
- **Previous:** Software Engineer at **FIS Global** (Oct 2019 – Oct 2024,
  Edinburgh); Software Engineer at **SCION Instruments** (2017–2019); Summer
  Intern at **GE Energy Management** (2015).
- **Experience:** ~7 years professional, since graduating.
- **Education:** BSc (Hons) Computing, 2:1, University of Abertay Dundee
  (2013–2017).
- **Specialism:** the **financial / payments industry**, and **ATMs /
  self-service banking** specifically (CEN-XFS, EMV).
- **Professional stack:** C#, .NET, Angular, C++, Azure, Microsoft SQL Server,
  WPF/DevExpress. **Side-project stack:** React, Next.js, Node.js, Supabase.

### Positioning / tone

- Gear the site towards a **senior** engineer. Lead with the seniority and the
  payments/ATM specialism.
- Cameron is **not currently looking for a new job** — this site is a personal
  showcase, not a job hunt. Keep the tone about showcasing work and networking,
  **not** "hire me". The contact section should invite conversation, not
  applications.
- **Privacy:** do **not** put his home address or phone number on the public
  site. Contact points are email, GitHub and LinkedIn only.

## Content model

All copy lives in `src/data/` — never edit components to change wording:

- `src/data/cv.ts` — `profile` (name, headline, specialism, summary, location,
  interests, links), `experience`, `education`, `skills`.
- `src/data/projects.ts` — the three showcase projects. Add a `liveUrl` to a
  project to surface a "Live site" link.

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Jest + React Testing
Library (`next/jest`) · ESLint · GitHub Actions CI · Vercel hosting. The site is
fully static (prerendered).

## Coding rules

### Every change ships with a test

New components, behaviour, or content wiring must be covered by a Jest + RTL
test in `src/__tests__/`. Run `npm test` before every commit; keep it green.
CI (`.github/workflows/ci.yml`) runs lint → tests → build on every push and PR.

### Mobile-friendly is a hard requirement

The site must look great and work on phones **and** desktop.
- Base styles target mobile; use Tailwind responsive prefixes (`sm:`, `md:`,
  `lg:`) for larger screens.
- Display headings need a smaller mobile size (e.g. `text-4xl sm:text-6xl`).
- Check the layout at ~375px wide before pushing.

### Attractive and consistent

Keep the visual language consistent: the `brand` colour scale in
`tailwind.config.ts`, the `.container-page` / `.section-heading` helpers in
`globals.css`, rounded cards, and generous spacing. Support both light and dark
themes (`dark:` variants are already in use).

### British English

Use British spelling in all copy (organise, colour, specialise, licence). Code
identifiers follow existing conventions.

### Docs stay in sync

Update `README.md` when scripts, structure, or deployment change.

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — production build
- `npm test` / `npm run test:ci` — tests (with coverage)
- `npm run lint` — ESLint

## Deployment

Vercel's native Git integration ships every commit to `main` to production and
gives each PR a preview URL. One-time setup is in `README.md`. The GitHub Actions
workflow is the quality gate; Vercel does the build-and-ship.
