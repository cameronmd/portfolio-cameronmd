import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-slate-200/70 bg-slate-50 py-16 sm:py-20 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="container-page">
        <h2 className="section-heading">Projects</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Three products I&apos;ve designed, built, shipped and now run in
          production — each one full-stack, automated, continuously deployed,
          and used every week by real groups of friends.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
