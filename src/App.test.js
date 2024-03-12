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
  // for textbox test
  let checkInputField = screen.getByRole("textbox");
  // for placeholder test
  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter user name");
  expect(checkInputField).toBeInTheDocument();
  expect(checkInputPlaceHolder).toBeInTheDocument();
  // for name test
  expect(checkInputField).toHaveAttribute("name", "name");
  // for id test
  expect(checkInputField).toHaveAttribute("id", "userid");
  expect(checkInputField).toHaveAttribute("type", "text");
  expect(checkInputField).toHaveAttribute("value", "username");
});
