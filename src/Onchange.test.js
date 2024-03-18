import { fireEvent, render, screen } from "@testing-library/react";
import Onchange from "./Onchange";

test.skip("onchange event testing", () => {
  render(<Onchange />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  expect(input.value).toBe("atestabc");
});
