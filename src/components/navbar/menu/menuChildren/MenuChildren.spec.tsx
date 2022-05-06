import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import MenuChildren from "./MenuChildren";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("MenuChildren Items", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MenuChildren />
        </Provider>
      </BrowserRouter>
    );
  });

  it("menu children items current item", () => {
    expect(screen.getByText(/about us/i)).toBeInTheDocument();

    const gallery = screen.getByText(/gallery/i);
    userEvent.click(gallery);
    expect(gallery.classList.contains("white")).toBe(true);
  });
});
