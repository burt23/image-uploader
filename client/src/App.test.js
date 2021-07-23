import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders upload button", () => {
  render(<App />);
  const uploadButton = screen.getByTestId("uploadButton");
  expect(uploadButton).toBeInTheDocument();
});

test("renders search input", () => {
  render(<App />);
  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();
});

test("renders main content div", () => {
  render(<App />);
  const mainContent = screen.getByTestId("mainContent");
  expect(mainContent).toBeInTheDocument();
});
