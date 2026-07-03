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

        <div className="mt-6 flex flex-wrap gap-4 pt-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
          >
            Source →
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 hover:underline dark:text-slate-300"
            >
              Live site →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
