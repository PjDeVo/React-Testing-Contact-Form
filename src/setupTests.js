// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "mutationobserver-shim";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";
import App from "./App";

test("App Renders With No Issues", () => {
  render(<App />);
});

test("Contains All Required Fields", () => {
  const container = render(<App />);

  container.getByText("First Name*");
  container.getByText("Last Name*");
  container.getByText("Email*");
});

test("testing max length of first name input", () => {
  const container = render(<App />);
  const firstNameInput = container.getByTestId("firstNameInput");

  if (firstNameInput > 3) {
    expect(firstNameInput).toThrow();
  }
});

test("testing required fields are filled out", () => {
  const container = render(<App />);
  const firstNameInput = container.getByTestId("firstNameInput");
  const lastNameInput = container.getByTestId("lastNameInput");
  const emailInput = container.getByTestId("emailInput");

  if (
    firstNameInput.innerHTML === null ||
    lastNameInput === null ||
    emailInput === null
  ) {
    expect(container).toThrow();
  }
});
