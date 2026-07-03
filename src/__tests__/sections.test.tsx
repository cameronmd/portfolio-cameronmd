import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { profile, skills } from "@/data/cv";

describe("Nav", () => {
  it("links to every page section", () => {
    render(<Nav />);
    for (const section of ["About", "Projects", "Experience", "Skills", "Contact"]) {
      expect(screen.getByRole("link", { name: section })).toHaveAttribute(
        "href",
        `#${section.toLowerCase()}`
      );
    }
  });
});

describe("Hero", () => {
  it("shows the name, headline and intro", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: profile.name })
    ).toBeInTheDocument();
    expect(screen.getByText(profile.headline)).toBeInTheDocument();
    expect(screen.getByText(profile.specialism)).toBeInTheDocument();
    expect(screen.getByText(profile.intro)).toBeInTheDocument();
  });

  it("leads with the short intro, not the full about-section summary", () => {
    render(<Hero />);
    expect(profile.intro).not.toBe(profile.summary);
    expect(screen.queryByText(profile.summary)).not.toBeInTheDocument();
  });
});

describe("About", () => {
  it("renders the email as a mailto link", () => {
    render(<About />);
    expect(
      screen.getByRole("link", { name: profile.email })
    ).toHaveAttribute("href", `mailto:${profile.email}`);
  });

  it("shows the summary and interests", () => {
    render(<About />);
    expect(screen.getByText(profile.summary)).toBeInTheDocument();
    expect(screen.getByText(profile.interests)).toBeInTheDocument();
  });
});

describe("Skills", () => {
  it("renders every skill group and item", () => {
    render(<Skills />);
    for (const group of skills) {
      expect(
        screen.getByRole("heading", { name: group.category })
      ).toBeInTheDocument();
      for (const item of group.items) {
        expect(screen.getByText(item)).toBeInTheDocument();
      }
    }
  });
});

describe("Contact", () => {
  it("links to email, GitHub and LinkedIn", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /email me/i })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      profile.links.github
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      profile.links.linkedin
    );
  });
});
