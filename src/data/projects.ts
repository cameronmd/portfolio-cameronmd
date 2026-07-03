export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  accent: string; // tailwind gradient classes
};

export const projects: Project[] = [
  {
    slug: "thegroupbet",
    name: "TheGroupBet",
    tagline: "Track weekly football accumulators with your mates",
    description:
      "A web app for groups of friends to track weekly football accumulator bets. Live match feed, automatic settlement, season reports, push notifications and an installable iOS PWA.",
    highlights: [
      "Live feed polls football-data.org and pushes web notifications when a pick flips winning/losing",
      "Automatic bet settlement with void handling and Early-Payout rules",
      "AI-generated season reports and awards",
      "517+ backend unit tests; mocked Supabase in the test suite",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "Supabase", "Vercel", "Railway"],
    repoUrl: "https://github.com/cameronmd/thegroupbet",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    slug: "thegrouporganiser",
    name: "TheGroupOrganiser",
    tagline: "A WhatsApp bot that runs your five-a-side",
    description:
      "A WhatsApp bot for organising group events. Runs as a linked device via whatsapp-web.js (headless Chromium), handling sign-ups, guests, payments and reserve lists straight from the group chat.",
    highlights: [
      "Chat commands (!In, !Out, !Paid, !+1) drive a live squad list",
      "Cron-based reminders for recurring events and event-day nudges",
      "SQLite persistence with zero-downtime column migrations",
      "Deployed on Railway with a QR-code linking flow",
    ],
    stack: ["Node.js", "whatsapp-web.js", "SQLite", "node-cron", "Docker", "Railway"],
    repoUrl: "https://github.com/cameronmd/thegrouporganiser",
    accent: "from-brand-500 to-indigo-600",
  },
  {
    slug: "thegroupgameweek",
    name: "TheGroupGameweek",
    tagline: "Fantasy football mini-league stats, done properly",
    description:
      "A stats dashboard for a fantasy football mini-league. Syncs gameweek data, computes league stats and renders a mobile-first dashboard with a healthy dose of banter.",
    highlights: [
      "Pure-function stat computers with dedicated unit tests",
      "Mobile-first React UI (≤375px first, desktop as enhancement)",
      "Bootstrap sync on first boot, then scheduled Railway cron syncs",
      "Backend + frontend test suites run together via test:all",
    ],
    stack: ["React", "Vite", "Tailwind", "Node.js", "Express", "Supabase", "Vercel"],
    repoUrl: "https://github.com/cameronmd/thegroupgameweek",
    accent: "from-amber-500 to-orange-600",
  },
];
