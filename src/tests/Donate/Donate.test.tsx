import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DonateComponent from "@/components/Donate/DonateComponent";

// Test component has correct text & image
// Test images contains alt text
// Check for mobile responsiveness *on hold*
describe("DonateComponent", () => {
  it("renders the component correctly", () => {
    render(<DonateComponent />);

    expect(
      screen.getByText(/Are you ready to be part of their success story?/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Any amount, whether big or small, means the world to us./,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /By donating, you're investing in their hopes and dreams./,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Donate to DCV today/i }),
    ).toBeInTheDocument();
  });

  it("has an image with alt text", () => {
    render(<DonateComponent />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);

    images.forEach((image) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("alt");
      expect(image.getAttribute("alt")).not.toBe("");
    });
  });
});
