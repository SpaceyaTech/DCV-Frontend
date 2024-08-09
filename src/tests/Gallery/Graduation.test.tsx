import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Graduation from "@/components/Gallery/Graduation";

describe("Graduation Component", () => {
  it("renders the main heading correctly", () => {
    render(
      <MemoryRouter>
        <Graduation />
      </MemoryRouter>,
    );
    const heading = screen.getByRole("heading", {
      name: /Cliff and Henry's Graduation/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the images with correct alt texts", () => {
    render(
      <MemoryRouter>
        <Graduation />
      </MemoryRouter>,
    );
    const graduationImage1 = screen.getByAltText("graduation image1");
    const graduationImage2 = screen.getByAltText("graduation image2");

    expect(graduationImage1).toBeInTheDocument();
    expect(graduationImage2).toBeInTheDocument();
  });

  it("renders the correct donation and meet buttons with icons", () => {
    render(
      <MemoryRouter>
        <Graduation />
      </MemoryRouter>,
    );

    const donateButton = screen.getByRole("button", {
      name: /Donate to DCV today/i,
    });
    const meetButton = screen.getByRole("button", {
      name: /Meet the children/i,
    });

    expect(donateButton).toBeInTheDocument();
    expect(meetButton).toBeInTheDocument();

    const favouriteIcon = screen.getByAltText("favourite icon");
    const handIcon = screen.getByAltText("hand icon");

    expect(favouriteIcon).toBeInTheDocument();
    expect(handIcon).toBeInTheDocument();
  });

  it("renders the correct links for donation and meet the children", () => {
    render(
      <MemoryRouter>
        <Graduation />
      </MemoryRouter>,
    );

    const donateLink = screen.getByRole("link", {
      name: /Donate to DCV today/i,
    });
    const meetLink = screen.getByRole("link", { name: /Meet the children/i });

    expect(donateLink).toHaveAttribute("href", "/donation");
    expect(meetLink).toHaveAttribute("href", "/meet");
  });

  it("renders the support message correctly", () => {
    render(
      <MemoryRouter>
        <Graduation />
      </MemoryRouter>,
    );

    const supportMessage = screen.getByText(
      /Witnessing such milestones wouldn’t be possible without your donations and support!/i,
    );
    expect(supportMessage).toBeInTheDocument();
  });
});
