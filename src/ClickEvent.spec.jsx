import { fireEvent, render, screen } from "@testing-library/react";

import ClickEvent from "./ClickEvent";
import cleandb from "./service";

// beforeAll(() => {
//   console.log("*******beforeAll hook********");
// });
beforeEach(() => {
  console.log("*******beforeEach hook********");
  cleandb();
});
// afterAll(() => {
//   console.log("*******afterAll hook********");
// });
// afterEach(() => {
//   console.log("*******afterEach hook********");
// });

test("button click event testing 1", () => {
  console.log("1");
  render(<ClickEvent />);
  let button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByText("updated successfully")).toBeInTheDocument();
});

test("button click event testing 2", () => {
  console.log("2");
  render(<ClickEvent />);
  let button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByText("updated successfully")).toBeInTheDocument();
});

test("button click event testing 3", () => {
  console.log("3");
  render(<ClickEvent />);
  let button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByText("updated successfully")).toBeInTheDocument();
});
