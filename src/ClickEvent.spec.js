import { fireEvent, render, screen } from "@testing-library/react";

import ClickEvent from "./ClickEvent";

test("button click event testing", () => {
  render(<ClickEvent />);
  let button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByText("updated successfully")).toBeInTheDocument();
});
