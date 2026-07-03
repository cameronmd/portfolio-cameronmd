// Single source of truth for the "About / CV" content.
// Sourced from Cameron's CV and LinkedIn. Edit here — every component reads
// from this file.

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
};

export type EducationItem = {
  qualification: string;
  institution: string;
  period: string;
  points?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const profile = {
  name: "Cameron Matheson-Dear",
  headline: "Senior Software Engineer & Team Lead",
  specialism: "Financial & payments software · ATM specialist",
  // Short hook for the hero — the fuller career story lives in `summary`.
  intro:
    "Seven years building software for the financial and payments industry — " +
    "these days leading a team at NCR Atleos on the ATMs and self-service " +
    "banking that millions of people rely on without a second thought. Away " +
    "from the day job I design, build and ship full-stack products end to end; " +
    "a few are below.",
  summary:
    "Senior Software Engineer and team lead with seven years in the financial " +
    "and payments industry, specialising in ATMs and self-service banking " +
    "(CEN-XFS, EMV). I currently lead a team at NCR Atleos across integration " +
    "and automation, after five years at FIS Global taking a web-based ATM " +
    "simulation and testing platform from beta to a worldwide customer base — " +
    "first as a developer, then as the subject-matter expert rolling it out to " +
    "customers across every region. BSc (Hons) Computing (2:1), University of " +
    "Abertay Dundee.",
  location: "Falkirk, Scotland",
  email: "cameron.matheson.dear@gmail.com",
  url: "https://portfolio-cameronmd.vercel.app",
  interests:
    "Away from the keyboard: tinkering with a Raspberry Pi smart-home setup, " +
    "football, tennis and snooker, Munro bagging (and Kilimanjaro in 2020), and " +
    "travelling to explore new countries and cultures.",
  links: {
    github: "https://github.com/cameronmd",
    linkedin: "https://www.linkedin.com/in/cameron-matheson-dear",
  },
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer — Team Lead",
    company: "NCR Atleos",
    period: "Oct 2024 – Present",
    location: "Dundee, Scotland · Hybrid",
    points: [
      "Team lead within the Software Integration, Automation & OEM team, building software for the ATM and self-service banking industry.",
      "Lead delivery across integration and automation work, continuing a focus on the financial and payments domain.",
    ],
  },
  {
    role: "Software Engineer",
    company: "FIS Global",
    period: "Oct 2019 – Oct 2024",
    location: "Edinburgh, Scotland · Hybrid",
    points: [
      "Worked on FIS OTS ATM TestLab — a web-based ATM XFS simulation and testing platform that let financial institutions efficiently test their ATM suite.",
      "Joined the development team while the product was in beta and helped bring it to market, building new features in C++ and C#/Angular under DevOps processes.",
      "Moved to the Support & Delivery team as subject-matter expert, delivering the new version to new and migrating customers across every region of the world.",
    ],
  },
  {
    role: "Software Engineer",
    company: "SCION Instruments",
    period: "Sep 2017 – Oct 2019",
    location: "Livingston, Scotland",
    points: [
      "Part of a new software team within the Techcomp group building products for SCION Instruments, working directly with customers across the full product lifecycle from first commit to release.",
      "Worked in an Agile, .NET/C# environment, mainly responsible for the front end using DevExpress in WPF.",
      "Brought a modern product to market to automate processes in a gas chromatography lab, while remaining backwards compatible with older systems.",
    ],
  },
  {
    role: "Summer Intern",
    company: "GE Energy Management",
    period: "Jun – Aug 2015",
    location: "Livingston, Scotland",
    points: [
      "Independently coded and developed a section of the product, picking up unfamiliar languages quickly.",
      "Built practical computing skills and confidence working in a professional office environment.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    qualification: "BSc (Hons) Computing — 2:1",
    institution: "University of Abertay Dundee",
    period: "2013 – 2017",
    points: [
      "Modules included Object-Oriented Programming, Data Design & Organisation, Cybersecurity, Operating Systems, Mobile App Development and Software Project Management.",
      "Honours project in smart-home technology: a fully controllable model smart home with a Laravel web front-end, driven by an Electric Imp.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Domain expertise",
    items: [
      "Financial & payments",
      "ATM / self-service",
      "CEN-XFS",
      "EMV",
    ],
  },
  {
    category: "Languages",
    items: ["C#", "C++", "TypeScript", "JavaScript", "SQL", "Java", "HTML", "CSS"],
  },
  {
    category: "Frameworks & UI",
    items: [".NET", "Angular", "WPF / DevExpress", "React", "Next.js", "Tailwind"],
  },
  {
    category: "Platforms & data",
    items: ["Azure", "Microsoft SQL Server", "Supabase / Postgres", "Vercel", "Railway"],
  },
  {
    category: "Ways of working",
    items: ["Agile", "Git / BitBucket", "Jenkins", "Jira", "CI/CD", "Automated testing"],
  },
];
