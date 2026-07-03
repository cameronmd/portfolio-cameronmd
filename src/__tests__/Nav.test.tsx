import { render, screen, act } from "@testing-library/react";
import Home from "@/app/page";

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
