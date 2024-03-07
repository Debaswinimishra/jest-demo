// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// App.test.js

// import { render, screen, fireEvent } from "@testing-library/react";
// import App from "./App";

// test("multiplyValues function works correctly", () => {
//   // Arrange
//   render(<App />);

//   // Act
//   fireEvent.change(screen.getByPlaceholderText("Enter value 1"), {
//     target: { value: "2" },
//   });
//   fireEvent.change(screen.getByPlaceholderText("Enter value 2"), {
//     target: { value: "3" },
//   });
//   fireEvent.click(screen.getByText("Multiply"));

//   // Assert
//   const resultElement = screen.getByText("Result:");
//   expect(resultElement).toHaveTextContent("Result: 6");
// });

// test("multiplyValues function handles non-numeric inputs", () => {
//   // Arrange
//   render(<App />);

//   // Act
//   fireEvent.change(screen.getByPlaceholderText("Enter value 1"), {
//     target: { value: "abc" },
//   });
//   fireEvent.change(screen.getByPlaceholderText("Enter value 2"), {
//     target: { value: "3" },
//   });
//   fireEvent.click(screen.getByText("Multiply"));

//   // Assert
//   const resultElement = screen.getByText("Result:");
//   expect(resultElement).toHaveTextContent("Result: NaN");
// });

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("multiplyValues function works correctly", () => {
  // Arrange
  render(<App />);

  // Act
  fireEvent.change(screen.getByPlaceholderText("Enter value 1"), {
    target: { value: "2" },
  });
  fireEvent.change(screen.getByPlaceholderText("Enter value 2"), {
    target: { value: "3" },
  });

  const alertMock = jest.spyOn(window, "alert");
  fireEvent.click(screen.getByText("Multiply"));

  expect(alertMock).toHaveBeenCalled();
  expect(alertMock).toHaveBeenCalledWith("Multiplication result: 6");

  alertMock.mockRestore();
});

test("multiplyValues function handles non-numeric inputs", () => {
  // Arrange
  render(<App />);

  // Act
  fireEvent.change(screen.getByPlaceholderText("Enter value 1"), {
    target: { value: "abc" },
  });
  fireEvent.change(screen.getByPlaceholderText("Enter value 2"), {
    target: { value: "3" },
  });

  const alertMock = jest.spyOn(window, "alert");
  fireEvent.click(screen.getByText("Multiply"));

  // Assert
  expect(alertMock).toHaveBeenCalled();
  expect(alertMock).toHaveBeenCalledWith("Multiplication result: NaN");

  // Clean up the mock
  alertMock.mockRestore();
});
