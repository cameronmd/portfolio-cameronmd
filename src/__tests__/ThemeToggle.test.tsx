import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "@/components/ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    localStorage.clear();
  });

  it("toggles the dark class on the document and persists the choice", () => {
    render(<ThemeToggle />);

    // Starts light: the button offers to switch to dark.
    const toDark = screen.getByRole("button", { name: /switch to dark/i });
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    fireEvent.click(toDark);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");

    // Now offers to switch back to light.
    fireEvent.click(screen.getByRole("button", { name: /switch to light/i }));
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("reflects an existing dark preference on mount", () => {
    document.documentElement.classList.add("dark");
    render(<ThemeToggle />);
    expect(
      screen.getByRole("button", { name: /switch to light/i })
    ).toHaveAttribute("aria-pressed", "true");
  });
});
