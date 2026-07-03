import { metadata } from "@/app/layout";
import { profile } from "@/data/cv";

describe("site metadata", () => {
  it("uses the live site URL as the canonical base for SEO and OG tags", () => {
    expect(metadata.metadataBase?.href).toBe(new URL(profile.url).href);
    expect(metadata.alternates?.canonical).toBe("/");
    expect(metadata.openGraph?.url).toBe(profile.url);
  });
});
