import { readFileSync } from "fs";
import { join } from "path";

describe("favicon", () => {
  it("ships a CMD monogram SVG icon for the browser tab", () => {
    const svg = readFileSync(join(process.cwd(), "src/app/icon.svg"), "utf8");
    expect(svg).toContain("<svg");
    expect(svg).toContain(">CMD<");
  });
});

describe("global styles", () => {
  it("offsets anchored sections below the sticky header", () => {
    const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8");
    expect(css).toMatch(/scroll-padding-top:\s*4rem/);
  });
});

describe("social share image", () => {
  it("generates a 1200x630 OG card from the profile via next/og", () => {
    const src = readFileSync(
      join(process.cwd(), "src/app/opengraph-image.tsx"),
      "utf8"
    );
    expect(src).toContain("next/og");
    expect(src).toContain("ImageResponse");
    expect(src).toMatch(/width:\s*1200/);
    expect(src).toMatch(/height:\s*630/);
    expect(src).toContain("profile");
  });

  it("reuses the same card for X/Twitter", () => {
    const src = readFileSync(
      join(process.cwd(), "src/app/twitter-image.tsx"),
      "utf8"
    );
    expect(src).toContain("./opengraph-image");
  });
});
