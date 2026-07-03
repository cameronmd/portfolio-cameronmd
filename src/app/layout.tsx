import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/cv";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: `${profile.name} — ${profile.headline}`,
  description: profile.summary,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} — ${profile.headline}`,
    description: profile.summary,
    url: profile.url,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
