import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Image from "../../assets/gym/homeBack.jpg";
import Contact from "./Contact";

describe("Contact", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Contact />
      </Provider>
    );
  });

  it("Background image", () => {
    const background = screen.getByTestId("background");
    expect(background).toHaveStyle(`background-image: url(${Image})`);
  });
});
