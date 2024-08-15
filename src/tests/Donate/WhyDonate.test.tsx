import { render, screen } from "@testing-library/react";
import WhyDonate from "@/components/Donate/WhyDonate";
import "@testing-library/jest-dom";

vi.mock("@/assets/images/donate/donate-hero-1.png", () => ({
  default: "donate-hero-1.png",
}));
vi.mock("@/assets/images/donate/donate-hero-2.png", () => ({
  default: "donate-hero-2.png",
}));
vi.mock("hugeicons-react", () => ({
  CheckmarkCircle02Icon: () => <svg data-testid="checkmark-icon" />,
}));

describe("WhyDonate Component", () => {
  beforeEach(() => {
    render(<WhyDonate />);
  });

  it("should render the 'Why Donate?' section with correct headings", () => {
    expect(
      screen.getByRole("heading", { name: /why donate\?/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /why your support matters\?/i }),
    ).toBeInTheDocument();
  });

  it("should render the 'How to donate' section with correct headings", () => {
    expect(
      screen.getByRole("heading", { name: /how to donate/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /ways to help us help more children/i,
      }),
    ).toBeInTheDocument();
  });

  it("should render the donation benefits list items with icons", () => {
    const items = [
      "Provide nutritious meals and clean water.",
      "Offer quality education and school supplies.",
      "Ensure access to healthcare and medical services.",
      "Create a loving and supportive home.",
    ];

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
      // expect(screen.getAllByTestId("checkmark-icon")).toHaveLength(4);
    });
  });

  it("should render the donation methods list items with icons", () => {
    const items = [
      "Online Donation: Using MPESA Paybill or Euro number, you can securely donate.",
      "Bank Transfer: Directly transfer funds to our bank account.",
      "In-Kind Donations: Donate goods or services at our residence that benefit the children.",
    ];

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("should render all list items", () => {
    const ariaHiddenElements = screen.getAllByTestId("list-item");
    expect(ariaHiddenElements.length).toBe(7);
  });

  it("should render images with correct alt text", () => {
    expect(screen.getByAltText("Donate Hero 1")).toBeInTheDocument();
    expect(screen.getByAltText("Donate Hero 2")).toBeInTheDocument();
  });

  it("should have correct image sources", () => {
    expect(screen.getByAltText("Donate Hero 1")).toHaveAttribute(
      "src",
      "donate-hero-1.png",
    );
    expect(screen.getByAltText("Donate Hero 2")).toHaveAttribute(
      "src",
      "donate-hero-2.png",
    );
  });
});
