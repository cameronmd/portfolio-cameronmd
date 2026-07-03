import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { profile } from "@/data/cv";

describe("Home page", () => {
  it("renders the full page with all major sections", () => {
    const { container } = render(<Home />);

    // Hero name
    expect(
      screen.getByRole("heading", { level: 1, name: profile.name })
    ).toBeInTheDocument();

    // Every section anchor is present for the nav links to target
    for (const id of ["about", "projects", "experience", "skills", "contact"]) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    }
  });
});
