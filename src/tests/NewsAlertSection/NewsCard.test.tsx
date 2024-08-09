import { render, screen } from "@testing-library/react";
import NewsCard from "@/components/NewsAlert/NewsCard";

describe("NewsCard Component", () => {
  test("renders all news items", () => {
    render(<NewsCard />);

    expect(screen.getByText("Baby Saumu's reunion")).toBeInTheDocument();
    expect(screen.getByText("Our babies' wellbeing")).toBeInTheDocument();
    expect(screen.getByText("Global Giving Report:")).toBeInTheDocument();

    expect(screen.getByAltText("Baby Saumu's reunion")).toBeInTheDocument();
    expect(screen.getByAltText("Our babies' wellbeing")).toBeInTheDocument();
    expect(screen.getByAltText("Global Giving Report:")).toBeInTheDocument();
  });

  test("renders Globalgiving2023 link correctly", () => {
    render(<NewsCard />);

    const link = screen.getByText("Globalgiving2023");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://www.globalgiving.org/projects/globalgiving2023",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
