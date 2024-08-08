import { render, screen } from "@testing-library/react";
import NewsAlert from "@/components/NewsAlert/NewsAlert";

describe("NewsAlert Component", () => {
  test("renders NewsAlert with NewsCard", () => {
    render(<NewsAlert />);

    expect(screen.getByText("News alert")).toBeInTheDocument();
    expect(screen.getByText("Read more good news")).toBeInTheDocument();
    expect(screen.getByText("Baby Saumu's reunion")).toBeInTheDocument(); // Ensure NewsCard content is rendered
  });

  test("renders Read more good news button with correct link", () => {
    render(<NewsAlert />);

    const button = screen.getByRole("link", { name: /read more good news/i });
    expect(button).toHaveAttribute(
      "href",
      "https://www.globalgiving.org/projects/globalgiving2023",
    );
    expect(button).toHaveAttribute("target", "_blank");
    expect(button).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("renders trumpet images correctly", () => {
    render(<NewsAlert />);

    const trumpet01 = screen.getByAltText("Trumpet");
    expect(trumpet01).toBeInTheDocument();

    const trumpet02 = screen.getByAltText("Emoji"); // Second trumpet image
    expect(trumpet02).toBeInTheDocument();
  });
});
