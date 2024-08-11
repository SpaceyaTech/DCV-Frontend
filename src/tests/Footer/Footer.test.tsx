import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "@/components/Footer/Footer";

describe("Footer Component", () => {
  it("renders the logo and organization name", () => {
    render(<Footer />);
    const logo = screen.getByAltText("dcv logo");
    const orgName = screen.queryAllByText(/Diani Children's Village/i);
    expect(logo).toBeInTheDocument();
    expect(orgName).not.toBeNull();
  });

  it("displays the mission statement", () => {
    render(<Footer />);
    const missionText = screen.getByText(/DCV\) was established in 1994/i);
    expect(missionText).toBeInTheDocument();
  });

  it("shows the Facebook follow section", () => {
    render(<Footer />);
    const followText = screen.getByText("Follow us on:");
    const facebookLogo = screen.getByAltText("facebook logo");
    expect(followText).toBeInTheDocument();
    expect(facebookLogo).toBeInTheDocument();
  });

  it("renders the donations image for desktop", () => {
    render(<Footer />);
    const donationsImage = screen.getByAltText("dotations call to action");
    expect(donationsImage).toBeInTheDocument();
    expect(donationsImage).toHaveClass("hidden lg:block");
  });

  it("displays the navigation links", () => {
    render(<Footer />);
    const links = [
      "About us",
      "Our projects",
      "News",
      "Meet our staff",
      "Meet the children",
    ];
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("shows terms and privacy links", () => {
    render(<Footer />);
    expect(screen.getByText("Terms and Conditions")).toBeInTheDocument();
    expect(screen.getByText("Privacy")).toBeInTheDocument();
  });

  //   it('displays the copyright notice', () => {
  //     render(<Footer />);
  //     const copyright = screen.getByText(/Copyright © Diani Children's Home, 2024/);
  //     expect(copyright).toBeInTheDocument();
  //   });
});
