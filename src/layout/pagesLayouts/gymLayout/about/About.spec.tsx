import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import About from "./About";
import { featuresItems } from "../../../../utils/about/featuresItem";

describe("About", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <About />
      </Provider>
    );
  });

  it("Features items", () => {
    expect(featuresItems.length).toBe(6);
  });
  it("Features items contains", () => {
    expect(featuresItems).toEqual(
      expect.arrayContaining([expect.objectContaining({ text: "Free Wi-Fi" })])
    );
  });
});
