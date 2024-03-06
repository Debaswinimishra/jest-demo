import { render, screen } from "@testing-library/react";
import App from "./Addition";
import sum from "./Addition";

test("adds 1 + 2 to equal 3", () => {
  render(<App />);

  expect(sum(1, 2)).toBe(3);
});
