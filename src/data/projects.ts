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
    tagline: "A WhatsApp bot that runs your five-a-side",
    useCase:
      "For whoever herds 14 players into a 10-a-side every week — sign-ups, guests, payments and reserves handled inside the group chat, no app to install.",
    description:
      "A WhatsApp bot that lives in your group chat as a linked device. Members reply with simple commands and it keeps a live squad list, promotes reserves and chases payments automatically — replacing the weekly spreadsheet and the endless 'who's in?' thread.",
    highlights: [
      "Runs as a linked device via whatsapp-web.js on headless Chromium — no WhatsApp Business API fees",
      "Chat commands (!in, !out, !paid, !+1) drive a live squad list with automatic reserve promotion",
      "Cron-scheduled reminders for recurring fixtures and event-day nudges",
      "SQLite persistence with zero-downtime schema migrations; Dockerised on Railway with a QR-code linking flow",
    ],
    stack: ["Node.js", "whatsapp-web.js", "SQLite", "node-cron", "Docker", "Railway"],
    chatExample: [
      { author: "Cameron", text: "!in" },
      { author: "Organiser", system: true, text: "✅ Cameron's in for Thursday. Squad 9/10." },
      { author: "Jordan", text: "!+1" },
      {
        author: "Organiser",
        system: true,
        text: "✅ Guest added for Jordan — squad full at 10/10. New names now go to reserves.",
      },
      { author: "Sam", text: "!in" },
      {
        author: "Organiser",
        system: true,
        text: "🪑 Sam → reserves (#1). First to play if a space opens.",
      },
    ],
    accent: "from-brand-500 to-indigo-600",
  },
  {
    slug: "thegroupgameweek",
    name: "TheGroupGameweek",
    tagline: "Fantasy football mini-league stats, done properly",
    useCase:
      "For an FPL mini-league that wants more than the official table — deep stats, trends and weekly banter in one place.",
    description:
      "A mobile-first dashboard for Fantasy Premier League mini-leagues. It syncs every gameweek from the official FPL API, computes the stats the official site won't show you, and serves them up with league-wide awards and a healthy dose of banter.",
    highlights: [
      "Pure-function stat engine (captaincy returns, bench points, transfer hits, form) with dedicated unit tests",
      "Auto-generated gameweek awards and banter derived straight from the underlying data",
      "Mobile-first React UI — built for ≤375px first, desktop as progressive enhancement",
      "Scheduled Railway cron syncs, Supabase Postgres, and a combined backend + frontend test suite",
    ],
    stack: ["React", "Vite", "Tailwind", "Node.js", "Express", "Supabase", "Vercel"],
    liveUrl: "https://thegroupgameweek.com",
    liveLabel: "thegroupgameweek.com",
    accent: "from-amber-500 to-orange-600",
  },
];
