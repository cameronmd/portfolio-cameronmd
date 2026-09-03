import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/cv";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// metadataBase is the bare origin, not the full site URL: Next prepends the
// configured `basePath` to file-based metadata (e.g. the opengraph image), so
// a metadataBase that also carried the /portfolio-cameronmd subpath would
// double it. Canonical and og:url are given as absolute URLs instead.
export const metadata: Metadata = {
  metadataBase: new URL(new URL(profile.url).origin),
  title: `${profile.name} — ${profile.headline}`,
  description: profile.summary,
  alternates: {
    canonical: profile.url,
  },
  openGraph: {
    title: `${profile.name} — ${profile.headline}`,
    description: profile.summary,
    url: profile.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.summary,
  },
};

// Runs before paint so the saved (or system) theme is applied with no flash.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
