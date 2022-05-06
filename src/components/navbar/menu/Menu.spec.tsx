import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { BrowserRouter } from "react-router-dom";

describe("menu tests", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Menu />
        </Provider>
      </BrowserRouter>
    );
  });

  it("look first menu item: gym", () => {
    expect(screen.getByText(/gym/i)).toBeInTheDocument();
  });
  it("when menu check children", () => {
    const blog = screen.getByText(/blog/i);
    fireEvent.click(blog);
    expect(screen.getByText(/exercise/i)).toBeInTheDocument();
  });
});
