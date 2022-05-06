import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Home from "./Home";
import Image from "../../assets/gym/homeBack.jpg";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
  });

  it("Background image", () => {
    const background = screen.getByTestId("background");
    expect(background).toHaveStyle(`background-image: url(${Image})`);
  });
  it("Input email", () => {
    const input: HTMLInputElement = screen.getByLabelText("email-text");
    fireEvent.change(input, { target: { value: "batuhankir1163@gmail.com" } });
    expect(input.value).toBe("batuhankir1163@gmail.com");
  });
});
