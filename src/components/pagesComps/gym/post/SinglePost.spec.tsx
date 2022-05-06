import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import SinglePost from "./SinglePost";
import { menuInfoItems } from "../../../../utils/menuInfoItems";
import { BrowserRouter } from "react-router-dom";

describe("Single Post", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SinglePost />
        </Provider>
      </BrowserRouter>
    );
  });
  it("length of array", () => {
    expect(menuInfoItems.length).toBe(4);
  });
  it("array is contain", () => {
    expect(menuInfoItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: "workout",
          info: "DOES EXERCISE MAKE YOU HAPPIER THAN MONEY?",
          date: "01/2020",
          bgColor: "first",
        }),
      ])
    );
  });
});
