import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Cart from "./Cart";
import { BrowserRouter } from "react-router-dom";

describe("Cart", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  it("close button", () => {
    expect(screen.getByText(/your cart/i)).toBeInTheDocument();
  });
});
