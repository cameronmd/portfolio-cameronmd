const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav
        aria-label="Primary"
        className="container-page flex h-14 items-center justify-between"
      >
        <a href="#top" className="font-semibold tracking-tight">
          CMD
        </a>
        <ul className="flex items-center gap-1 sm:gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded px-2 py-2 text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
