import { skills } from "@/data/cv";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-slate-200/70 bg-slate-50 py-16 sm:py-20 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="container-page">
        <h2 className="section-heading">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
