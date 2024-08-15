import WhatWeDo from "@/components/About/WhatWeDo";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const sections = [
  {
    title: "Safe Haven",
    description:
      "We offer a nurturing and secure environment where children can thrive without fear. Our dedicated staff ensures that every child feels safe and cared for around the clock.",
  },
  {
    title: "Education",
    description:
      "We prioritize education, providing access to quality schooling, tutoring, and extracurricular activities. Our goal is to empower children with the knowledge and skills they need for a brighter future.",
  },
  {
    title: "Health and wellness",
    description:
      "We focus on the holistic health of our children by providing regular medical check-ups, nutritious meals, and psychological support.",
  },
  {
    title: "Life skills development",
    description:
      "We equip children with essential life skills through vocational training, workshops, and mentorship programs.",
  },
];

describe("WhatWeDo Component", () => {
  test("renders the main headings", () => {
    render(<WhatWeDo />);

    expect(screen.getByText("What We Do")).toBeInTheDocument();
    expect(
      screen.getByText("Making a Difference, One Life at a Time."),
    ).toBeInTheDocument();
  });

  test("renders all sections with correct titles and descriptions", () => {
    render(<WhatWeDo />);

    sections.forEach((section) => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
      expect(screen.getByText(section.description)).toBeInTheDocument();
    });
  });
});
