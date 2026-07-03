import { readFileSync } from "fs";
import { join } from "path";

describe("favicon", () => {
  it("ships a CMD monogram SVG icon for the browser tab", () => {
    const svg = readFileSync(join(process.cwd(), "src/app/icon.svg"), "utf8");
    expect(svg).toContain("<svg");
    expect(svg).toContain(">CMD<");
  });
});
