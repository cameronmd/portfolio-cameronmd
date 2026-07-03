import { profile } from "@/data/cv";

export default function Contact() {
  return (
    <section id="contact" className="container-page py-16 sm:py-24">
      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-700 px-6 py-12 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-50">
          I&apos;m happily settled at NCR Atleos and not on the market — but
          always up for talking software, payments, ATMs or football. Say hello.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-transform hover:scale-[1.02]"
          >
            Email me
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
