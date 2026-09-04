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

  it("introduces the projects without hard-coding how many there are", () => {
    render(<Projects />);
    const intro = screen.getByText(/designed, built, shipped/i);
    // A count before "products" would go stale whenever a project is added or removed.
    expect(intro.textContent).not.toMatch(
      /\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+products?\b/i
    );
  });
});

describe("ProjectCard", () => {
  const withLive = projects.find((p) => p.liveUrl)!;
  const withChat = projects.find((p) => p.chatExample)!;

  it("shows the tagline, use case and stack", () => {
    render(<ProjectCard project={withLive} />);
    expect(screen.getByText(withLive.tagline)).toBeInTheDocument();
    expect(screen.getByText(withLive.useCase)).toBeInTheDocument();
    expect(screen.getByText(withLive.stack[0])).toBeInTheDocument();
  });

  it("links to the live site (and never to source) when a liveUrl is present", () => {
    render(<ProjectCard project={withLive} />);
    const live = screen.getByRole("link", { name: /visit/i });
    expect(live).toHaveAttribute("href", withLive.liveUrl);
    expect(live).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(
      screen.queryByRole("link", { name: /source/i })
    ).not.toBeInTheDocument();
  });

  it("falls back to a generic live-site label when liveLabel is absent", () => {
    render(<ProjectCard project={{ ...withLive, liveLabel: undefined }} />);
    expect(
      screen.getByRole("link", { name: /visit live site/i })
    ).toBeInTheDocument();
  });

  it("renders the worked chat example instead of a link when there is no live site", () => {
    render(<ProjectCard project={withChat} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    // The bot's replies from the example are shown verbatim.
    const botReply = withChat.chatExample!.find((m) => m.system)!;
    expect(screen.getByText(botReply.text)).toBeInTheDocument();
    expect(screen.getByText(/runs inside whatsapp/i)).toBeInTheDocument();
  });
});
