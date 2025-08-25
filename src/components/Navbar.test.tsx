import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
import { vi, test, expect } from "vitest";
import { Provider } from "react-redux";
import store from "../utils/store"; // Adjust the import path as needed
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("renders all elements from the Navbar component", () => {
  const mockOnSearchInput = vi.fn();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar onSearchInput={mockOnSearchInput} />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("MegaMart")).toBeInTheDocument();
  expect(screen.getByTestId("search-input")).toBeInTheDocument();
  expect(screen.getByTestId("signin-signup")).toBeInTheDocument();
  expect(screen.getByText(/Cart/)).toBeInTheDocument();
});

test("calls onSearchInput when typing in search input", async () => {
  const mockOnSearchInput = vi.fn();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar onSearchInput={mockOnSearchInput} />
      </BrowserRouter>
    </Provider>
  );
  const searchInput = screen.getByTestId("search-input") as HTMLInputElement;
  await userEvent.type(searchInput, "laptop");
  expect(searchInput.value).toBe("laptop");
});
