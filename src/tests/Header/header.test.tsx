import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import { BrowserRouter } from "react-router-dom";

// Make sure the header component renders without crashing
describe("Header rendering", () => {
  test("renders Header component", () => {
    render(<Header />, { wrapper: BrowserRouter });
  });
  // // Image tests
  test("renders vetted image with the correct alt text", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const vettedImage = screen.getAllByAltText("vetted");
    expect(vettedImage).toBeDefined();
  });
  test("renders confetti image with correct alt text", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const confettiImage = screen.getAllByAltText("confetti");
    expect(confettiImage).toBeDefined();
  });
  // Icon tests
  test("renders CallRinging04Icon", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("call-icon")).toBeInTheDocument();
  });

  test("renders MailOpen01Icon", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("mail-open-icon")).toBeInTheDocument();
  });
});

describe("Header Content", () => {
  test("displays correct vetted organization text", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(
      screen.getByText(/Vetted Organization - GlobalGiving 2017/i),
    ).toBeInTheDocument();
  });

  test("displays correct phone number", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/\+254791630666/i)).toBeInTheDocument();
  });

  test("displays correct email address", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(
      screen.getByText(/info@dianichildrensvillage.org/i),
    ).toBeInTheDocument();
  });

  test("phone number link is correct", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const phoneLink = screen.getByRole("link", { name: /\+254791630666/i });
    expect(phoneLink).toHaveAttribute("href", "tel:254791630666");
  });

  test("email link is correct", () => {
    render(<Header />, { wrapper: BrowserRouter });
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
    render(<Header />, { wrapper: BrowserRouter });
    const confettiImage = screen.getByAltText("confetti");
    expect(confettiImage).toHaveClass("hidden");
  });
});
