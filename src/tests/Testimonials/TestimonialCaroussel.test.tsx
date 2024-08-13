import TestimonialCaroussel from "@/components/Testimonials/TestimonialCaroussel";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("TestimonialCaroussel", () => {
  test("should render the TestimonialCaroussel component", () => {
    render(<TestimonialCaroussel />);
    expect(screen.getByText("A word from:")).toBeInTheDocument();
    expect(screen.getByText("Our Visitors")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Here’s what our visitors have to say about their experience at Diani Children’s Village.",
      ),
    ).toBeInTheDocument();
  });

  test("should display the first testimonial on initial render", () => {
    render(<TestimonialCaroussel />);
    expect(
      screen.getByText(
        "This home give a future to kids who lost there parents. Let us hope without parents they can have a happy and good future.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("should navigate to the next testimonial when clicking the next button", () => {
    render(<TestimonialCaroussel />);
    const nextButton = screen.getByText(/next/i);
    fireEvent.click(nextButton);
    expect(
      screen.getByText("I love using this every day."),
    ).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  test("should navigate to the previous testimonial when clicking the previous button", () => {
    render(<TestimonialCaroussel />);
    const nextButton = screen.getByText(/next/i);
    const prevButton = screen.getByText(/previous/i);
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("should display correct author details and images", () => {
    render(<TestimonialCaroussel />);
    expect(screen.getByAltText("Jan Poot")).toBeInTheDocument();
    expect(screen.getByText("From Belgium")).toBeInTheDocument();
  });
});
