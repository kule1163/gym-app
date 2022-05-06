import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import MenuItems from "./MenuItems";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("Menu Items", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MenuItems />
        </Provider>
      </BrowserRouter>
    );
  });

  it("menu item current item", () => {
    expect(screen.getByText(/gym/i)).toBeInTheDocument();

    const blog = screen.getByText(/blog/i);
    userEvent.click(blog);
    expect(blog.classList.contains("current-item")).toBe(true);
  });
});
