import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TeamCard, { StaffMember } from "@/components/MeetTheTeam/TeamCard";
import yvonne from "@/assets/images/meet-the-team/yvonne.jpeg";

const mockStaffMember: StaffMember = {
  id: 1,
  name: "Yvonne ter Avest",
  role: "Co-Founder",
  bg: "rgb(255, 161,12)",
  image: yvonne,
};

describe("TeamCard Component", () => {
  test("renders without crashing", () => {
    render(<TeamCard {...mockStaffMember} />);
    expect(screen.getByAltText(mockStaffMember.name)).toBeInTheDocument();
  });

  test("displays the image with correct src and alt attributes", () => {
    render(<TeamCard {...mockStaffMember} />);
    const image = screen.getByAltText(mockStaffMember.name) as HTMLImageElement;
    expect(image).toHaveAttribute("src", mockStaffMember.image);
    expect(image).toHaveAttribute("alt", mockStaffMember.name);
  });

  test("renders the name and role correctly", () => {
    render(<TeamCard {...mockStaffMember} />);
    expect(screen.getByText(mockStaffMember.name)).toBeInTheDocument();
    expect(screen.getByText(mockStaffMember.role)).toBeInTheDocument();
  });

  test("applies the correct background color and border color", () => {
    render(<TeamCard {...mockStaffMember} />);
    const card = screen.getByRole("img").closest("div")?.parentElement;
    expect(card).toHaveStyle(`background-color: ${mockStaffMember.bg}`);
    expect(card?.querySelector("div:last-child")).toHaveStyle(
      `border-color: ${mockStaffMember.bg}`,
    );
  });
});
