import { profile } from "@/data/cv";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
      />
      <div className="container-page relative py-20 sm:py-28">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {profile.headline}
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-slate-700 sm:text-xl dark:text-slate-200">
          {profile.specialism}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            View my projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:text-brand-400"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
