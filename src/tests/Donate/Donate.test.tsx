import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DonateComponent from "@/components/Donate/DonateComponent";

// Test component is rendering correctly
// Test images contains alt text
// Check for mobile responsiveness
// Ensure donate button works as expected
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

  //   it('has a functioning donate button', async () => {
  //     const mockDonateFunction = vi.fn();
  //     render(<DonateComponent onDonate={mockDonateFunction} />);

  //     const donateButton = screen.getByRole('button', { name: /donate to dcv today/i });
  //     await userEvent.click(donateButton);

  //     expect(mockDonateFunction).toHaveBeenCalledTimes(1);
  //   });

  // it('is responsive on mobile devices', () => {
  //   const { container } = render(<DonateComponent />);
  //   // Adjust based on your actual CSS implementation
  //   expect(container.firstChild).toHaveStyle('w-full');

  // });
});
