import { metadata } from "@/app/layout";
import { profile } from "@/data/cv";

describe("site metadata", () => {
  it("uses the site origin as metadataBase, with absolute canonical and OG URLs", () => {
    // metadataBase is the bare origin so the basePath isn't doubled onto
    // file-based metadata (e.g. the opengraph image); canonical/og:url are
    // the full site URL.
    expect(metadata.metadataBase?.href).toBe(new URL(profile.url).origin + "/");
    expect(metadata.alternates?.canonical).toBe(profile.url);
    expect(metadata.openGraph?.url).toBe(profile.url);
  });
});
