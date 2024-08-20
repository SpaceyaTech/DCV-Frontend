import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactMap from "@/components/Contact/ContactMap";

describe("ContactMap Component", () => {
  it("renders the iframe with correct attributes", () => {
    render(<ContactMap />);

    //Test for accessibility in iframe element
    expect(screen.getByTitle("Google map embed")).toBeInTheDocument();
  });
});
