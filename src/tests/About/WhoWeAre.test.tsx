import WhoWeAre from "@/components/About/WhoWeAre";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("WhoWeAre Component", () => {
  test("renders the main headings", () => {
    render(<WhoWeAre />);
    expect(screen.getByText("Who We Are")).toBeInTheDocument();
    expect(screen.getByText("Our Purpose")).toBeInTheDocument();
  });

  test("renders the subheadings correctly", () => {
    render(<WhoWeAre />);
    expect(
      screen.getByText(/Nurturing Hope and Building Futures/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Empowering Every Child to Thrive/i),
    ).toBeInTheDocument();
  });

  test("renders the paragraphs correctly", () => {
    render(<WhoWeAre />);
    expect(
      screen.getByText(
        /Founded in 1994, Diani Children’s Village was established with a profound mission/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /At our home, we ensure that each child's basic needs, such as healthcare, education, and recreation, are met/i,
      ),
    ).toBeInTheDocument();
  });

  test("renders the images with correct attributes", () => {
    render(<WhoWeAre />);
    const img1 = screen.getByAltText("About Hero 1");
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute(
      "src",
      expect.stringContaining("about-hero-1.png"),
    );
    const img2 = screen.getByAltText("About Hero 2");
    expect(img2).toBeInTheDocument();
    expect(img2).toHaveAttribute(
      "src",
      expect.stringContaining("about-hero-2.png"),
    );
  });
});
