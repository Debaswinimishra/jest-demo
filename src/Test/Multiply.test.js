const multiply = require("./Multiply");

test("multiply 2 * 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("multiply 0 * 5 to equal 0", () => {
  expect(multiply(0, 5)).toBe(0);
});

test("multiply -4 * 8 to equal -32", () => {
  expect(multiply(-4, 8)).toBe(-32);
});
