import { render, screen } from "@testing-library/react";
import { describe, vi, test, expect } from "vitest";

import Pagination from "./Pagination";

const mockProps = {
  currentPage: 0,
  numOfPages: 5,
  onPageChange: vi.fn(),
};

describe("Pagination Component", () => {
  test("renders correctly", () => {
    render(<Pagination {...mockProps} />);
    expect(screen.getByTestId("prev-button")).toBeInTheDocument();
    expect(screen.getByTestId("next-button")).toBeInTheDocument();
    for (let i = 0; i < mockProps.numOfPages; i++) {
      expect(screen.getByTestId(`page-button-${i}`)).toBeInTheDocument();
    }
  });

  test("previous button is disabled on first page", () => {
    render(<Pagination {...mockProps} />);
    expect(screen.getByTestId("prev-button")).toBeDisabled();
  });

  test("next button is disabled on last page", () => {
    render(
      <Pagination {...mockProps} currentPage={mockProps.numOfPages - 1} />
    );
    expect(screen.getByTestId("next-button")).toBeDisabled();
  });

  test("calls onPageChange with correct page number when buttons are clicked", () => {
    render(<Pagination {...mockProps} />);
    const nextButton = screen.getByTestId("next-button");
    const pageButton2 = screen.getByTestId("page-button-2");

    nextButton.click();
    // check that it was called with a function that increments the page
    expect(mockProps.onPageChange).toHaveBeenCalledWith(expect.any(Function));
    // OR
    expect(mockProps.onPageChange.mock.calls[0][0](0)).toBe(1);
    // OR
    expect(typeof mockProps.onPageChange.mock.calls[0][0]).toBe("function");

    // Simulate applying that function to get the next page
    const incrementFunction = mockProps.onPageChange.mock.calls[0][0];
    expect(incrementFunction(0)).toBe(1);

    pageButton2.click();
    expect(mockProps.onPageChange).toHaveBeenCalledWith(2);
  });
});
