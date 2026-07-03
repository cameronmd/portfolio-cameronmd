import { render, screen } from "@testing-library/react";
import Projects from "@/components/Projects";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

describe("Projects section", () => {
  it("renders a heading and every project name", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
    for (const project of projects) {
      expect(
        screen.getByRole("heading", { name: project.name })
      ).toBeInTheDocument();
    }
  });
});

describe("ProjectCard", () => {
  const project = projects[0];

  it("shows the tagline, stack and a source link", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByText(project.tagline)).toBeInTheDocument();
    expect(screen.getByText(project.stack[0])).toBeInTheDocument();

    const source = screen.getByRole("link", { name: /source/i });
    expect(source).toHaveAttribute("href", project.repoUrl);
    expect(source).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("only renders a live-site link when a liveUrl is present", () => {
    const { rerender } = render(<ProjectCard project={project} />);
    expect(
      screen.queryByRole("link", { name: /live site/i })
    ).not.toBeInTheDocument();

    rerender(
      <ProjectCard project={{ ...project, liveUrl: "https://example.com" }} />
    );
    expect(
      screen.getByRole("link", { name: /live site/i })
    ).toHaveAttribute("href", "https://example.com");
  });
});
