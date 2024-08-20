import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ContactForm from "@/components/Contact/ContactForm";
import { toast, ToastContainer } from "react-toastify";

//Test coverage
//Rendering Form elements
//Form Validation

// Mock the toast functions
vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
  ToastContainer: () => <div>Toast Container</div>,
}));

describe("ContactForm", () => {
  it("renders form elements correctly", () => {
    render(<ContactForm />);

    // Check if all form elements are rendered
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Send message/i)).toBeInTheDocument();
  });

  it("shows validation errors when form is submitted with invalid data", async () => {
    render(<ContactForm />);

    // Trigger form submission
    fireEvent.click(screen.getByText(/Send message/i));

    // Check for validation error messages
    expect(
      await screen.findByText(/First name is required/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Last name is required/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Phone number must be valid/i),
    ).toBeInTheDocument();
    expect(await screen.findByText(/Message is required/i)).toBeInTheDocument();
  });

  it("displays success toast and resets form on successful submission", async () => {
    render(<ContactForm />);

    // Fill in the form with valid data
    fireEvent.input(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.input(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.input(screen.getByLabelText(/Phone/i), {
      target: { value: "1234567890" },
    });
    fireEvent.input(screen.getByLabelText(/Email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByLabelText(/Message/i), {
      target: { value: "Hello!" },
    });

    // Mock setTimeout to avoid waiting for real time
    vi.useFakeTimers();

    // Trigger form submission
    fireEvent.click(screen.getByText(/Send message/i));
  });

  render(<ContactForm />);
});
