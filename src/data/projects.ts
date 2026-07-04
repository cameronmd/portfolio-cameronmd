export type ChatMessage = {
  author: string;
  text: string;
  system?: boolean; // true for the bot's replies
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  useCase: string; // who it's for / the problem it solves
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  liveLabel?: string; // pretty label for the live link
  chatExample?: ChatMessage[]; // for products with no public web UI
  accent: string; // tailwind gradient classes
};

export const projects: Project[] = [
  {
    slug: "thegroupbet",
    name: "TheGroupBet",
    tagline: "Weekly football accumulators, settled automatically",
    useCase:
      "For a group of mates who put on a weekly acca — no more chasing screenshots or arguing over who actually won.",
    description:
      "A full-stack progressive web app that turns your group's weekly football accumulator into a live, self-settling scoreboard. Add your picks, watch them tick over in real time on match day, and get a clean, undisputable settlement the moment the results land.",
    highlights: [
      "Real-time match feed polls football-data.org and fires web-push notifications the instant a selection flips winning or losing",
      "Automatic settlement engine handles voids, each-way and early-payout rules — zero manual scoring",
      "AI-generated end-of-season reports, awards and head-to-head records",
      "Installable iOS/Android PWA; React + Vite front end, Node/Express API, Supabase Postgres",
      "500+ automated backend tests against a fully mocked Supabase layer",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "Supabase", "Vercel", "Railway"],
    liveUrl: "https://www.thegroupbet.com",
    liveLabel: "thegroupbet.com",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    slug: "thegrouporganiser",
    name: "TheGroupOrganiser",
    tagline: "A WhatsApp bot that organises any group event",
    useCase:
      "For the person who always ends up doing the admin — chasing who's in, who's out and who still owes money. It handles the jobs nobody enjoys, right inside the chat. (I built it for my weekly game of football.)",
    description:
      "A WhatsApp bot that lives in your group chat as a linked device and takes over the event admin nobody likes doing. It tracks who's in, who's out and who's paid, handles guests and reserve lists, and runs one-off or weekly recurring events — so the same person doesn't have to herd everyone every single time.",
    highlights: [
      "Tracks who's in, who's out and who's paid from simple chat commands (!in, !out, !paid, !+1)",
      "Handles one-off events and weekly recurring ones, with reminders and event-day nudges",
      "Automatic reserve lists — promotes the next person the moment a space opens",
      "Runs as a linked device via whatsapp-web.js on headless Chromium — no WhatsApp Business API fees",
      "SQLite persistence with zero-downtime schema migrations; Dockerised on Railway with a QR-code linking flow",
    ],
    stack: ["Node.js", "whatsapp-web.js", "SQLite", "node-cron", "Docker", "Railway"],
    chatExample: [
      { author: "Cameron", text: "!in" },
      { author: "Organiser", system: true, text: "✅ Cameron's in for Thursday. 9/10 spots filled." },
      { author: "Jordan", text: "!+1" },
      {
        author: "Organiser",
        system: true,
        text: "✅ Guest added for Jordan — full at 10/10. New names now go to reserves.",
      },
      { author: "Sam", text: "!paid" },
      {
        author: "Organiser",
        system: true,
        text: "💷 Marked Sam as paid. 6 of 10 have settled up.",
      },
    ],
    accent: "from-brand-500 to-indigo-600",
  },
  {
    slug: "thegroupgameweek",
    name: "TheGroupGameweek",
    tagline: "Fantasy football mini-league stats, done properly",
    useCase:
      "For any FPL mini-league that wants more than the official table — anyone can add their own league for deep stats, trends and weekly banter in one place.",
    description:
      "A mobile-first dashboard for Fantasy Premier League mini-leagues. Anyone can add their own league via a secure one-off payment; it then syncs every gameweek from the official FPL API, computes the stats the official site won't show you, and serves them up with league-wide awards and a healthy dose of banter.",
    highlights: [
      "Self-serve: add any FPL mini-league for analysis via a secure Stripe checkout",
      "Pure-function stat engine (captaincy returns, bench points, transfer hits, form) with dedicated unit tests",
      "Auto-generated gameweek awards and banter derived straight from the underlying data",
      "Mobile-first React UI — built for ≤375px first, desktop as progressive enhancement",
      "Scheduled Railway cron syncs, Supabase Postgres, and a combined backend + frontend test suite",
    ],
    stack: ["React", "Vite", "Tailwind", "Node.js", "Express", "Supabase", "Stripe", "Vercel"],
    liveUrl: "https://thegroupgameweek.com",
    liveLabel: "thegroupgameweek.com",
    accent: "from-amber-500 to-orange-600",
  },
];
