// ChildrenCard.test.jsx
import { render, screen } from "@testing-library/react";
import ChildrenCard from "@/components/_meet-the-children/ChildrenCard";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import heartIcon from "@/assets/hearticon.png";
import React from "react";

vi.mock("../ui/button", () => ({
  Button: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <button className={className}>{children}</button>,
}));

describe("ChildrenCard Component", () => {
  const sampleList = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
    },
  ];

  test("renders without crashing", () => {
    render(<ChildrenCard image="/sample-image.png" list={sampleList} />);
    expect(screen.getByAltText("age 1-5")).toBeInTheDocument();
  });

  test("displays the image with correct src attribute", () => {
    render(<ChildrenCard image="/sample-image.png" list={sampleList} />);
    expect(screen.getByAltText("age 1-5")).toHaveAttribute(
      "src",
      "/sample-image.png",
    );
  });

  test("renders the list items correctly", () => {
    render(<ChildrenCard image="/sample-image.png" list={sampleList} />);
    expect(screen.getByText("Title 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Title 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  test("renders the button with correct text and icon", () => {
    render(<ChildrenCard image="/sample-image.png" list={sampleList} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Support us today");
    expect(screen.getByAltText("heart")).toHaveAttribute("src", heartIcon);
  });
});
