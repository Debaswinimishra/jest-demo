import { render, screen } from "@testing-library/react";
import App from "./App";

test("test first react app case", () => {
  render(<App />);
  const text = screen.getByText(/hellow world/i);

  expect(text).toBeInTheDocument();
});
test("test second react app case", () => {
  render(<App />);
  const text2 = screen.getByText("First test case");
  expect(text2).toBeInTheDocument();
});
test("testing input field", () => {
  render(<App />);
  let inputField = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
});
