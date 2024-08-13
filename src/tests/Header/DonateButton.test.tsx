import DonateButton from "@/components/Header/DonateButton";
import { render, screen } from "@testing-library/react";

// Test 1: Render Test
test("renders DonateButton component", () => {
  render(<DonateButton />);
  const button = screen.getByRole("button", { name: /donate/i });
  expect(button).toBeInTheDocument();
});

// Test 2: Button Text
test("displays correct button text", () => {
  render(<DonateButton />);
  const buttonText = screen.getByText(/donate/i);
  expect(buttonText).toBeInTheDocument();
});

// Test 3: Image Rendering
test("renders heart icon with correct alt text", () => {
  render(<DonateButton />);
  const heartIcon = screen.getByAltText("heart");
  expect(heartIcon).toBeInTheDocument();
});

// Test 4: Button Styling
test("has correct styling classes", () => {
  render(<DonateButton />);
  const button = screen.getByRole("button", { name: /donate/i });
  expect(button).toHaveClass(
    "bg-primary-main",
    "font-medium",
    "rounded-xl",
    "text-xl",
    "text-white",
    "lg:flex",
  );
  expect(button).toHaveClass("hidden"); // Hidden on screens smaller than 'lg'
});

// Test 5: Responsive Behavior
test("button is hidden on small screens", () => {
  render(<DonateButton />);
  const button = screen.getByRole("button", { name: /donate/i });
  expect(button).toHaveClass("hidden");
});
