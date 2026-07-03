import { profile } from "@/data/cv";

export default function About() {
  return (
    <section id="about" className="container-page py-16 sm:py-20">
      <h2 className="section-heading">About</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        <div className="space-y-4 sm:col-span-2">
          <p className="text-slate-600 dark:text-slate-300">{profile.summary}</p>
          <p className="text-slate-600 dark:text-slate-300">
            {profile.interests}
          </p>
        </div>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">
              Location
            </dt>
            <dd className="text-slate-600 dark:text-slate-400">
              {profile.location}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">
              Email
            </dt>
            <dd>
              <a
                href={`mailto:${profile.email}`}
                className="text-brand-600 hover:underline dark:text-brand-400"
              >
                {profile.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
