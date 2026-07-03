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
      expect(project.description).toBeTruthy();
      expect(project.highlights.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.repoUrl).toMatch(/^https:\/\/github\.com\//);
    }
  });

  it("uses unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("cv data", () => {
  it("exposes core profile fields", () => {
    expect(profile.name).toBe("Cameron Matheson-Dear");
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
});
