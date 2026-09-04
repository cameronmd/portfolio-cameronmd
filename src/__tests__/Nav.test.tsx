import { render, screen, act, fireEvent, within } from "@testing-library/react";
import Home from "@/app/page";
import Nav from "@/components/Nav";

type PartialEntry = Pick<
  IntersectionObserverEntry,
  "target" | "isIntersecting" | "intersectionRatio"
>;

let capturedCallback: ((entries: PartialEntry[]) => void) | null = null;

class MockIntersectionObserver {
  constructor(callback: (entries: PartialEntry[]) => void) {
    capturedCallback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  globalThis.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
});

beforeEach(() => {
  capturedCallback = null;
});

function fire(entries: PartialEntry[]) {
  act(() => {
    capturedCallback?.(entries);
  });
}

describe("Nav scroll-spy", () => {
  it("marks the section currently in view as the active nav item", () => {
    render(<Home />);
    const projects = document.getElementById("projects") as Element;

    fire([{ target: projects, isIntersecting: true, intersectionRatio: 1 }]);

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "true"
    );
    expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute(
      "aria-current"
    );
  });

  it("keeps the last active item when nothing is in view", () => {
    render(<Home />);
    const projects = document.getElementById("projects") as Element;
    const about = document.getElementById("about") as Element;

    fire([{ target: projects, isIntersecting: true, intersectionRatio: 1 }]);
    fire([{ target: about, isIntersecting: false, intersectionRatio: 0 }]);

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "true"
    );
  });
});

describe("Nav mobile menu", () => {
  it("is collapsed by default with no dropdown panel", () => {
    render(<Nav />);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(document.getElementById("mobile-nav")).toBeNull();
  });

  it("opens the dropdown with the section links when the toggle is pressed", () => {
    render(<Nav />);
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    expect(
      screen.getByRole("button", { name: "Close menu" })
    ).toHaveAttribute("aria-expanded", "true");

    const panel = document.getElementById("mobile-nav") as HTMLElement;
    expect(panel).not.toBeNull();
    expect(
      within(panel).getByRole("link", { name: "Contact" })
    ).toHaveAttribute("href", "#contact");
  });

  it("closes again after a link in the dropdown is chosen", () => {
    render(<Nav />);
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    const panel = document.getElementById("mobile-nav") as HTMLElement;
    fireEvent.click(within(panel).getByRole("link", { name: "Projects" }));

    expect(document.getElementById("mobile-nav")).toBeNull();
    expect(
      screen.getByRole("button", { name: "Open menu" })
    ).toHaveAttribute("aria-expanded", "false");
  });
});
