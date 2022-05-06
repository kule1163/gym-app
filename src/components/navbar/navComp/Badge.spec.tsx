import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import Badge from "./Badge";

describe("Badge Test", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Badge />
      </Provider>
    );
  });

  it("badge", () => {
    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });
});
