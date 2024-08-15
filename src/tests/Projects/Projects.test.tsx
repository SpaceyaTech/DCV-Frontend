import { render, screen } from "@testing-library/react";
import Projects from "@/pages/Projects";
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock the components that are imported in the Projects component
vi.mock("@/components/Header", () => ({
  default: () => <div>Mock Header</div>,
}));
vi.mock("@/components/Footer/Footer", () => ({
  default: () => <div>Mock Footer</div>,
}));
vi.mock("@/components/Donate/DonateComponent", () => ({
  default: ({ isIndexPage }: { isIndexPage: boolean }) => (
    <div>Mock DonateComponent: {isIndexPage ? "Index Page" : "Other Page"}</div>
  ),
}));

describe("Projects Page", () => {
  it("renders Header and Footer", () => {
    render(<Projects />);

    // Check if Header and Footer components are rendered
    expect(screen.getByText("Mock Header")).toBeInTheDocument();
    expect(screen.getByText("Mock Footer")).toBeInTheDocument();
  });

  it("renders the page content correctly", () => {
    render(<Projects />);

    // Check for the main content of the page
    expect(screen.getByText("OUR PROJECTS")).toBeInTheDocument();
    expect(
      screen.getByText(
        /In order to help the home to become financially stable/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("THE FURNITURE WORKSHOP")).toBeInTheDocument();
    expect(
      screen.getByText(
        /The main aim of this project is to teach the children/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the furniture images correctly", () => {
    render(<Projects />);

    // Check for the furniture image and Ishmael's image
    const furnitureImages = screen.getAllByAltText("furniture image");
    expect(furnitureImages).toHaveLength(2); // One for mobile, one for desktop

    const ishmaelImage = screen.getByAltText("Ishmael image");
    expect(ishmaelImage).toBeInTheDocument();
  });

  it("renders the DonateComponent with the correct props", () => {
    render(<Projects />);

    // Check if the DonateComponent is rendered with isIndexPage set to false
    expect(
      screen.getByText("Mock DonateComponent: Other Page"),
    ).toBeInTheDocument();
  });
});
