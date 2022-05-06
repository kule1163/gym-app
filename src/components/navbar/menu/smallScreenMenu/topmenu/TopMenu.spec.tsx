import React from "react";
import { screen, render } from "@testing-library/react";
import { menuItems } from "../../../../../utils/menuItems";
import { Provider } from "react-redux";
import { store } from "../../../../../app/store";
import TopMenu from "./TopMenu";
import { BrowserRouter } from "react-router-dom";

describe("Top Menu", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <TopMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  it("Top menu length", () => {
    expect(menuItems.length).toBe(4);
  });
  it("Top menu length", () => {
    expect(menuItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          text: "gym",
          children: expect.arrayContaining([
            expect.objectContaining({ text: "about us" }),
          ]),
        }),
      ])
    );
  });
});
