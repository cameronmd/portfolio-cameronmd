import { projects } from "@/data/projects";
import { profile, experience, education, skills } from "@/data/cv";

describe("projects data", () => {
  it("includes all three showcase projects", () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toEqual(
      expect.arrayContaining([
        "thegroupbet",
        "thegrouporganiser",
        "thegroupgameweek",
      ])
    );
  });

  it("gives every project the fields the UI relies on", () => {
    for (const project of projects) {
      expect(project.name).toBeTruthy();
      expect(project.tagline).toBeTruthy();
      expect(project.useCase).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.highlights.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
      // Source is private, so every project links to a live site or shows a
      // worked example instead — never a repo link.
      const hasLive = typeof project.liveUrl === "string";
      const hasExample = (project.chatExample?.length ?? 0) > 0;
      expect(hasLive || hasExample).toBe(true);
      if (project.liveUrl) {
        expect(project.liveUrl).toMatch(/^https:\/\//);
      }
    }
  });

  it("never links to a private source repository", () => {
    for (const project of projects) {
      expect(project).not.toHaveProperty("repoUrl");
    }
  });

  it("uses unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("advertises TheGroupGameweek's self-serve paid league analysis", () => {
    const gameweek = projects.find((p) => p.slug === "thegroupgameweek")!;
    const copy = [gameweek.description, ...gameweek.highlights].join(" ");
    expect(copy).toMatch(/payment|checkout|stripe/i);
    expect(gameweek.stack).toContain("Stripe");
  });
});

describe("cv data", () => {
  it("exposes core profile fields", () => {
    expect(profile.name).toBe("Cameron Matheson-Dear");
    expect(profile.intro).toBeTruthy();
    expect(profile.summary).toBeTruthy();
    expect(profile.intro).not.toBe(profile.summary);
    expect(profile.email).toContain("@");
    expect(profile.links.github).toMatch(/github\.com/);
    expect(profile.links.linkedin).toMatch(/linkedin\.com/);
    expect(profile.url).toMatch(/^https:\/\//);
  });

  it("has at least one experience, education and skill entry", () => {
    expect(experience.length).toBeGreaterThan(0);
    expect(education.length).toBeGreaterThan(0);
    expect(skills.length).toBeGreaterThan(0);
    for (const group of skills) {
      expect(group.items.length).toBeGreaterThan(0);
    }
  });

  it("lists AI-assisted development with Claude and Copilot", () => {
    const aiSkills = skills.flatMap((group) => group.items);
    expect(aiSkills).toEqual(
      expect.arrayContaining(["Claude", "GitHub Copilot"])
    );
  });
});
