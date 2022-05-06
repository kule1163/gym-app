import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Router } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";

describe("App", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    );
  });

  it("check at home page", () => {
    expect(screen.getByText(/RESPECT YOUR BODY, IT’S THE ONLY ONE YOU GET/i))
      .toBeInTheDocument;
  });
  it("check navigate to another page", async () => {
    const blog = screen.getAllByTestId("menu-items");

    userEvent.click(blog[2]);

    const footwear = await screen.findByText(
      /3 POST-WORKOUT MISTAKES AND HOW TO FIX THEM/i
    );

    expect(footwear).toBeInTheDocument();
  });
});
