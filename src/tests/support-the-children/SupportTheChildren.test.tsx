import { render, screen } from "@testing-library/react";
import SupportChildren from "@/components/support-the-children/SupportChildren";
import cover1 from "@/assets/images/support-the-children-1.png";
import cover2 from "@/assets/images/support-the-children-2.png";

describe("SupportChildren Component", () => {
  test("renders the images and content correctly", () => {
    render(<SupportChildren />);

    const img1 = screen.getByAltText("cover 1");
    const img2 = screen.getByAltText("cover 2");

    expect(img1).toHaveAttribute("src", cover1);
    expect(img2).toHaveAttribute("src", cover2);

    expect(
      screen.getByText(
        /Diani Children’s Village \(DCV\) was established in 1994/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /We are a dedicated organization that rescues and cares/i,
      ),
    ).toBeInTheDocument();
  });
});
