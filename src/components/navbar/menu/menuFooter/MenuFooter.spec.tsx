import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import MenuFooter from "./MenuFooter";
import { menuItems } from "../../../../utils/menuItems";
import { BrowserRouter } from "react-router-dom";

describe("MenuFooter", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MenuFooter />
        </Provider>
      </BrowserRouter>
    );
  });

  it("Children length", () => {
    expect(menuItems[0].children.length).toBe(6);
  });
  it("Children contains", () => {
    expect(menuItems[0].children).toEqual(
      expect.arrayContaining([expect.objectContaining({ text: "about us" })])
    );
  });
});
