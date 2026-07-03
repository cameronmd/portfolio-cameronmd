import { render, screen } from "@testing-library/react";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { experience, education, profile } from "@/data/cv";

describe("Experience section", () => {
  it("renders an Experience and Education heading", () => {
    render(<Experience />);
    expect(
      screen.getByRole("heading", { name: /^experience$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^education$/i })
    ).toBeInTheDocument();
  });

  it("lists each role, company and bullet points", () => {
    render(<Experience />);
    for (const item of experience) {
      // Role + company share a heading; match on company which is unique.
      expect(
        screen.getByRole("heading", { name: new RegExp(item.company, "i") })
      ).toBeInTheDocument();
      for (const point of item.points) {
        expect(screen.getByText(point)).toBeInTheDocument();
      }
    }
  });

  it("lists each qualification and its detail points", () => {
    render(<Experience />);
    for (const item of education) {
      expect(screen.getByText(item.qualification)).toBeInTheDocument();
      for (const point of item.points ?? []) {
        expect(screen.getByText(point)).toBeInTheDocument();
      }
    }
  });
});

describe("Footer", () => {
  it("shows the current year and the owner's name", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(
      screen.getByText(new RegExp(`${year}.*${profile.name}`))
    ).toBeInTheDocument();
  });
});
