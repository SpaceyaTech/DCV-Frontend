import HeroCardSectionDesktop from "@/components/HeroCardSectionDesktop";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

//check that the component renders without crashing
describe("HeroMobile component renders", () => {
  test("Hero Card Section renders correctly", () => {
    render(<HeroCardSectionDesktop />);
  });
  //check if the top decorative image loads
  test("renders top decorative image", () => {
    render(<HeroCardSectionDesktop />);
    const topImage = screen.getByAltText("Top decorative pattern desktop");
    expect(topImage).toBeInTheDocument();
  });

  //check text of "Because every child..."
  test("renders short intro text", () => {
    render(<HeroCardSectionDesktop />);
    expect(
      screen.getByText(/Because every child deserves an amazing childhood/i),
    ).toBeInTheDocument();
  });

  //check if the main title renders
  test("renders title text", () => {
    render(<HeroCardSectionDesktop />);
    expect(
      screen.getByText(/Support Diani Children’s Village/i),
    ).toBeInTheDocument();
  });

  //check if description text renders
  test("renders description text", () => {
    render(<HeroCardSectionDesktop />);
    expect(
      screen.getByText(
        /Over the years, DCV has served as a sanctuary for over 100 children, transforming lives through dedicated care and support./i,
      ),
    ).toBeInTheDocument();
  });

  //check if the button renders
  test("check if button is present", () => {
    render(<HeroCardSectionDesktop />);
    const button = screen.getByRole("button", { name: /Support us today 💛/i });
    expect(button).toBeInTheDocument();
  });

  //check bottom decorative image
  test("renders decorative image at bottom", () => {
    render(<HeroCardSectionDesktop />);
    const bottomImage = screen.getByAltText(
      "Bottom decorative pattern desktop",
    );
    expect(bottomImage).toBeInTheDocument();
  });
});
