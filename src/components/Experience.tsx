import { experience, education } from "@/data/cv";

export default function Experience() {
  return (
    <section id="experience" className="container-page py-16 sm:py-20">
      <h2 className="section-heading">Experience</h2>

      <ol className="mt-8 space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.90rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand-500 dark:border-slate-950"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.role}{" "}
                <span className="text-brand-600 dark:text-brand-400">
                  · {item.company}
                </span>
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {item.period}
              </p>
            </div>
            {item.location && (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {item.location}
              </p>
            )}
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h2 className="section-heading mt-16">Education</h2>
      <ul className="mt-6 space-y-4">
        {education.map((item) => (
          <li key={`${item.institution}-${item.qualification}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {item.qualification}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.institution}
                </p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {item.period}
              </p>
            </div>
            {item.points && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
