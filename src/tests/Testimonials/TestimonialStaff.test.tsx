import TestimonialStaff from "@/components/Testimonials/TestimonialStaff";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("TestimonialStaff", () => {
  test("renders the testimonial text", () => {
    render(
      <Router>
        <TestimonialStaff />
      </Router>,
    );
    expect(
      screen.getByText(
        /Working with DCV over two decades has been an overwhelming and deeply rewarding experience./i,
      ),
    ).toBeInTheDocument();
  });

  test("renders the staff member's name and title", () => {
    render(
      <Router>
        <TestimonialStaff />
      </Router>,
    );
    expect(screen.getByText("Rose")).toBeInTheDocument();
    expect(screen.getByText("House Mother")).toBeInTheDocument();
  });

  test("renders the staff member's image", () => {
    render(
      <Router>
        <TestimonialStaff />
      </Router>,
    );
    const img = screen.getByAltText("Rose, House Mother");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/src/assets/images/rose.png");
  });

  test("renders the 'Meet the Staff' button", () => {
    render(
      <Router>
        <TestimonialStaff />
      </Router>,
    );
    expect(screen.getByText("Meet the Staff")).toBeInTheDocument();
  });

  test("renders the 'Discover projects we help with' button", () => {
    render(
      <Router>
        <TestimonialStaff />
      </Router>,
    );
    expect(
      screen.getByText("Discover projects we help with"),
    ).toBeInTheDocument();
  });

  test("renders the image of Rose serving food", () => {
    render(
      <Router>
        <TestimonialStaff />
      </Router>,
    );
    const img = screen.getByAltText("Rose serving food");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      "/src/assets/images/rose-serving-food.png",
    );
  });
});
