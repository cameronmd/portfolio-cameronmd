import { profile } from "@/data/cv";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-slate-800">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <p>
          © {year} {profile.name}
        </p>
        <p>Built with Next.js &amp; Tailwind · deployed on Vercel</p>
      </div>
    </footer>
  );
}
