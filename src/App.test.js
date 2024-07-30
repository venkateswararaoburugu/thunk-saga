import React from "react";

import App from "./App";
import { fireEvent, render,screen } from "@testing-library/react";

test('render App component',() =>{
  render(<App/>)

  const countElement = screen.getByText(/Count:0/i)
  expect(countElement).toBeInTheDocument();
})

test('increments count', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Increment/i);
  fireEvent.click(buttonElement);
  const countElement = screen.getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
});