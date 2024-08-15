import { render, screen } from "@testing-library/react";
import DonationMethods from "@/components/Donate/DonationMethods";
import { describe, it, expect } from "vitest";

vi.mock("@/assets/images/donate/donate-hero-1.png", () => ({
  default: "DonateHero1.png",
}));
vi.mock("@/assets/images/donate/mpesa-logo.png", () => ({
  default: "MpesaLogo.png",
}));
vi.mock("@/assets/images/donate/ncbabank-logo.png", () => ({
  default: "NCBABankLogo.png",
}));
vi.mock("@/assets/images/donate/rabobank-logo.png", () => ({
  default: "RaboBankLogo.png",
}));
vi.mock("@/assets/images/donate/global-giving-logo.png", () => ({
  default: "GlobalGivingLogo.png",
}));

describe("DonationMethods component", () => {
  it("renders the heading 'Donation Methods'", () => {
    render(<DonationMethods />);
    expect(
      screen.getByRole("heading", { name: /donation methods/i }),
    ).toBeInTheDocument();
  });

  it("renders all donation methods", () => {
    render(<DonationMethods />);

    expect(screen.getByAltText("Mpesa Logo")).toBeInTheDocument();
    expect(screen.getByAltText("NCBA Bank KSH Logo")).toBeInTheDocument();
    expect(screen.getByAltText("NCBA Bank EUR Logo")).toBeInTheDocument();
    expect(screen.getByAltText("RABO Bank Logo")).toBeInTheDocument();
    expect(screen.getByAltText("Global Giving Logo")).toBeInTheDocument();
  });

  it("renders the 'Get involved' section", () => {
    render(<DonationMethods />);

    expect(
      screen.getByRole("heading", { name: /get involved/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /more ways to help/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/we understand that we are blessed in different ways/i),
    ).toBeInTheDocument();
  });

  it("renders all involvement options", () => {
    render(<DonationMethods />);

    expect(
      screen.getByText(
        /volunteer: join our team and make a hands-on difference/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /fundraise: organize a fundraiser to support our mission/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/spread the word: share our cause on social media/i),
    ).toBeInTheDocument();
  });

  it("renders the donate hero image", () => {
    render(<DonationMethods />);
    expect(screen.getByAltText("Donate Hero 1")).toBeInTheDocument();
  });

  it("should render all list items", () => {
    render(<DonationMethods />);

    const ariaHiddenElements = screen.getAllByTestId("list-item");
    expect(ariaHiddenElements.length).toBe(3);
  });

  it("has a link to GlobalGiving.org", () => {
    render(<DonationMethods />);

    const link = screen.getByRole("link", {
      name: /https:\/\/bit\.ly\/3ahkvt2/i,
    });

    expect(link).toHaveAttribute("href", "https://bit.ly/3AhkVt2");
  });
});
