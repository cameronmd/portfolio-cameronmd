import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className={`h-2 bg-gradient-to-r ${project.accent}`} aria-hidden />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
          {project.tagline}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
          <span className="font-semibold text-slate-900 dark:text-white">
            Who it&apos;s for:{" "}
          </span>
          {project.useCase}
        </p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
            >
              <span aria-hidden className="mt-1 text-brand-500">
                ▸
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {project.chatExample && (
          <div
            className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/50"
            aria-label="Example WhatsApp exchange"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              In the group chat
            </p>
            <ul className="space-y-1.5">
              {project.chatExample.map((message, i) => (
                <li
                  key={`${message.author}-${i}`}
                  className={`rounded-lg px-2.5 py-1.5 text-xs leading-snug ${
                    message.system
                      ? "bg-emerald-500/10 text-slate-700 dark:text-slate-200"
                      : "bg-white text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-100"
                  }`}
                >
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {message.author}:{" "}
                  </span>
                  <span className={message.system ? "" : "font-mono"}>
                    {message.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
            >
              Visit {project.liveLabel ?? "live site"} →
            </a>
          ) : (
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Runs inside WhatsApp — no app to install
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
