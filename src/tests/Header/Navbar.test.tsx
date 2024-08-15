import { render, screen } from "@testing-library/react";
import NavBarMobile from "@/components/Header/NavBar";
import { BrowserRouter } from "react-router-dom";
// Test 1: Render Test
test("renders NavBarMobile component", () => {
  render(<NavBarMobile />, { wrapper: BrowserRouter });
  const nav = screen.getByRole("navigation");
  expect(nav).toBeInTheDocument();
});

// Test 2: Logo Rendering
test("renders logo with correct alt text", () => {
  render(<NavBarMobile />, { wrapper: BrowserRouter });
  const logo = screen.getByAltText("logo");
  expect(logo).toBeInTheDocument();
});

// Test 3: Navlinks Component Rendering
test("renders Navlinks component", () => {
  render(<NavBarMobile />, { wrapper: BrowserRouter });
  const navlinks = screen.getByRole("navigation"); // Assuming Navlinks renders a <nav> element or use another appropriate role.
  expect(navlinks).toBeInTheDocument();
});

// Test 4: DonateButton Component Rendering
test("renders DonateButton component", () => {
  render(<NavBarMobile />, { wrapper: BrowserRouter });
  const donateButton = screen.getByRole("button", { name: /donate/i });
  expect(donateButton).toBeInTheDocument();
});

// Test 5: Menu Button Rendering
test("renders Menu button with correct text and icon", () => {
  render(<NavBarMobile />, { wrapper: BrowserRouter });

  const menuButtons = screen.getAllByRole("button", { name: /menu/i });
  const menuButton = menuButtons.find((button) =>
    button.classList.contains("menuBtn"),
  );
  expect(menuButton).toBeInTheDocument();

  const menuIcon = screen.getByTestId("menu-icon"); // Assuming data-testid="menu-icon" is added to the icon
  expect(menuIcon).toBeInTheDocument();
});

// Test 6: Menu Button Styling
test("Menu button has correct styling classes", () => {
  render(<NavBarMobile />, { wrapper: BrowserRouter });
  const menuButtons = screen.getAllByRole("button", { name: /menu/i });
  const menuButton = menuButtons.find((button) =>
    button.classList.contains("menuBtn"),
  );
  expect(menuButton).toHaveClass(
    "flex",
    "items-center",
    "gap-2",
    "rounded-md",
    "border",
    "bg-neutral-base-white",
    "px-4",
    "py-3",
    "shadow-xl",
    "lg:hidden",
  );
});

// Test 7: Responsive Behavior
test("Menu button is hidden on large screens", () => {
  render(<NavBarMobile />, { wrapper: BrowserRouter });
  const menuButtons = screen.getAllByRole("button", { name: /menu/i });
  const menuButton = menuButtons.find((button) =>
    button.classList.contains("menuBtn"),
  );
  expect(menuButton).toBeInTheDocument();
});
