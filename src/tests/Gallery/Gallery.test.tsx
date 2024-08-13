import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Gallery from "@/components/Gallery/Gallery";

describe("Gallery Component", () => {
  test("renders the main heading", () => {
    render(
      <BrowserRouter>
        <Gallery />
      </BrowserRouter>,
    );
    const heading = screen.getByRole("heading", { name: /Gallery/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the mobile gallery image on small screens", () => {
    render(
      <BrowserRouter>
        <Gallery />
      </BrowserRouter>,
    );
    const mobileGalleryImage = screen.getByAltText("gallery");
    expect(mobileGalleryImage).toBeInTheDocument();
  });

  test("renders the correct number of gallery images", () => {
    render(
      <BrowserRouter>
        <Gallery />
      </BrowserRouter>,
    );
    const images = screen.getAllByRole("img", { name: /gallery image/i });
    expect(images).toHaveLength(9); // 9 gallery images
  });

  test("renders the 'Check out our gallery' button", () => {
    render(
      <BrowserRouter>
        <Gallery />
      </BrowserRouter>,
    );
    const button = screen.getByRole("button", {
      name: /Check out our gallery/i,
    });
    expect(button).toBeInTheDocument();
  });

  test("renders the correct alt text for all images", () => {
    render(
      <BrowserRouter>
        <Gallery />
      </BrowserRouter>,
    );
    const imageAlts = [
      "gallery image 1",
      "gallery image 2",
      "gallery image 3",
      "gallery image 4",
      "gallery image 5",
      "gallery image 6",
      "gallery image 7",
      "gallery image 8",
      "gallery image 9",
    ];

    imageAlts.forEach((alt) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });
});
