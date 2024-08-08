import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

// Make sure the header component renders without crashing
describe("Header rendering", () => {
  test("renders Header component", () => {
    render(<Header />);
  });
  // Image tests
  test("renders vetted image with the correct alt text", () => {
    render(<Header />);
    const vettedImage = screen.getAllByAltText("vetted");
    expect(vettedImage).toBeDefined();
  });
  test("renders confetti image with correct alt text", () => {
    render(<Header />);
    const confettiImage = screen.getAllByAltText("confetti");
    expect(confettiImage).toBeDefined();
  });
  // Icon tests
  test("renders CallRinging04Icon", () => {
    render(<Header />);
    expect(screen.getByTestId("call-icon")).toBeInTheDocument();
  });

  test("renders MailOpen01Icon", () => {
    render(<Header />);
    expect(screen.getByTestId("mail-open-icon")).toBeInTheDocument();
  });
});

describe("Header Content", () => {
  test("displays correct vetted organization text", () => {
    render(<Header />);
    expect(
      screen.getByText(/Vetted Organization - GlobalGiving 2017/i),
    ).toBeInTheDocument();
  });

  test("displays correct phone number", () => {
    render(<Header />);
    expect(screen.getByText(/\+254791630666/i)).toBeInTheDocument();
  });

  test("displays correct email address", () => {
    render(<Header />);
    expect(
      screen.getByText(/info@dianichildrensvillage.org/i),
    ).toBeInTheDocument();
  });

  test("phone number link is correct", () => {
    render(<Header />);
    const phoneLink = screen.getByRole("link", { name: /\+254791630666/i });
    expect(phoneLink).toHaveAttribute("href", "tel:254791630666");
  });

  test("email link is correct", () => {
    render(<Header />);
    const emailLink = screen.getByRole("link", {
      name: /info@dianichildrensvillage.org/i,
    });
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:info@dianichildrensvillage.org",
    );
  });
});

describe("Header Responsiveness", () => {
  test("confetti image is hidden on small screens", () => {
    render(<Header />);
    const confettiImage = screen.getByAltText("confetti");
    expect(confettiImage).toHaveClass("hidden");
  });
});
