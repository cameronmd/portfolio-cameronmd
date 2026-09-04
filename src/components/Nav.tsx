"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", id: "about", label: "About" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // A band across the middle of the viewport decides the "current" section.
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav
        aria-label="Primary"
        className="container-page flex h-14 items-center justify-between"
      >
        <a href="#top" className="font-semibold tracking-tight">
          CMD
        </a>
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Desktop links — collapse into a menu on small screens. */}
          <ul className="hidden items-center gap-4 sm:flex">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded px-2 py-2 text-sm transition-colors ${
                      isActive
                        ? "text-brand-600 dark:text-brand-400"
                        : "text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-2 -bottom-px h-0.5 origin-left rounded-full bg-brand-500 transition-transform duration-200 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          {/* Mobile menu toggle. */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-slate-600 transition-colors hover:text-brand-600 sm:hidden dark:text-slate-300 dark:hover:text-brand-400"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel. */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-slate-200/70 sm:hidden dark:border-slate-800"
        >
          <ul className="container-page flex flex-col py-2">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded px-2 py-3 text-sm transition-colors ${
                      isActive
                        ? "text-brand-600 dark:text-brand-400"
                        : "text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
