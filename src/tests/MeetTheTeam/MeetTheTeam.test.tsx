import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";

import yvonne from "@/assets/images/meet-the-team/yvonne.jpeg";
import ishmael from "@/assets/images/meet-the-team/ishmael.jpeg";
import MeetTheTeam from "@/pages/MeetTheTeam";

vi.mock("@/components/Header", () => ({
  default: () => <header>Header</header>,
}));
vi.mock("@/components/Footer/Footer", () => ({
  default: () => <footer>Footer</footer>,
}));
vi.mock("@/components/Donate/DonateComponent", () => ({
  default: ({ isIndexPage }: { isIndexPage: boolean }) => (
    <div>Donate Component - isIndexPage: {isIndexPage.toString()}</div>
  ),
}));
vi.mock("@/components/MeetTheTeam/TeamCard", () => ({
  default: ({
    name,
    role,
    bg,
    image,
  }: {
    name: string;
    role: string;
    bg: string;
    image: string;
  }) => (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
      <div style={{ backgroundColor: bg }}></div>
    </div>
  ),
}));

describe("MeetTheTeam Component", () => {
  test("renders without crashing", () => {
    render(<MeetTheTeam />);
    expect(screen.getByText("Meet our Staff")).toBeInTheDocument();
  });

  test("renders the correct number of TeamCard components", () => {
    render(<MeetTheTeam />);
    const teamCards = screen.getAllByRole("img");
    expect(teamCards).toHaveLength(10);
  });

  test("renders TeamCard with correct props for the first staff member", () => {
    render(<MeetTheTeam />);
    expect(screen.getByAltText("Yvonne ter Avest")).toHaveAttribute(
      "src",
      yvonne,
    );
    expect(screen.getByText("Yvonne ter Avest")).toBeInTheDocument();
    expect(screen.getByText("Co-Founder")).toBeInTheDocument();
  });

  test("renders TeamCard with correct props for the last staff member", () => {
    render(<MeetTheTeam />);
    expect(screen.getByAltText("Sir Ishmael")).toHaveAttribute("src", ishmael);
    expect(screen.getByText("Sir Ishmael")).toBeInTheDocument();
    expect(screen.getByText("Carpenter & Wood instructor")).toBeInTheDocument();
  });

  test("renders DonateComponent with correct props", () => {
    render(<MeetTheTeam />);
    expect(
      screen.getByText("Donate Component - isIndexPage: false"),
    ).toBeInTheDocument();
  });
});
