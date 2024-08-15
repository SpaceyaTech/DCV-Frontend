import { fireEvent, render, screen } from "@testing-library/react";
import MeetTheChildren from "@/pages/MeetTheChildren";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { ChidrenCardProps } from "@/components/_meet-the-children/ChildrenCard";

vi.mock("@/components/Header", () => ({
  default: () => <div>Mock Header</div>,
}));
vi.mock("@/components/Footer/Footer", () => ({
  default: () => <div>Mock Footer</div>,
}));
vi.mock("@/components/_meet-the-children/ChildrenCard", () => ({
  default: ({ image, list }: ChidrenCardProps) => (
    <div>
      <img src={image} alt="children" />
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  ),
}));
describe("MeetTheChildren Component", () => {
  test("renders without crashing", () => {
    render(<MeetTheChildren />);
    expect(
      screen.getByText(
        "Meet our vibrant, lovely and amazing kids from all over Africa",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "are often newly admitted and are just beginning to adjust to the environment and routines of life at the Diani Children’s Village.",
      ),
    ).toBeInTheDocument();
  });

  test('displays correct content for age bracket "Age 1-5"', () => {
    render(<MeetTheChildren />);
    const button1to5 = screen.getByText("Age 1-5");
    fireEvent.click(button1to5);
    expect(screen.getByText("Children at this age range")).toBeInTheDocument();
    expect(
      screen.getByText("Circumstances leading to their stay:"),
    ).toBeInTheDocument();
  });

  test('displays correct content for age bracket "Age 6-12"', () => {
    render(<MeetTheChildren />);
    const button6to12 = screen.getByText("Age 6-12");
    fireEvent.click(button6to12);
    expect(screen.getByText("Schooling:")).toBeInTheDocument();
    expect(screen.getByText("Extracurricular Activities:")).toBeInTheDocument();
  });

  test('displays correct content for age bracket "Age 13-18+"', () => {
    render(<MeetTheChildren />);
    const button13to18 = screen.getByText("Age 13-18+");
    fireEvent.click(button13to18);
    expect(
      screen.getByText("Education and Future Preparation:"),
    ).toBeInTheDocument();
    expect(screen.getByText("Involvement and Mentorship:")).toBeInTheDocument();
  });

  test("button click updates the age bracket and displays corresponding ChildrenCard", () => {
    render(<MeetTheChildren />);
    const button6to12 = screen.getByText("Age 6-12");
    fireEvent.click(button6to12);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/age-12.png");
    expect(screen.getByText("Schooling:")).toBeInTheDocument();
  });
});
