import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("navbar test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    );
  });
  describe("topMenu", () => {
    it("test to topMenu is open", () => {
      const menuToggle = screen.getByTestId("menuToggle");
      fireEvent.click(menuToggle);
      const topMenu = screen.getByTestId("topMenu");
      expect(topMenu.classList.contains("test")).toBe(true);
    });
    it("test to topMenu is close", () => {
      const menuToggle = screen.getByTestId("menuToggle");
      fireEvent.click(menuToggle);
      const topMenu = screen.getByTestId("topMenu");
      expect(topMenu.classList.contains("test")).toBe(false);
    });
  });
});
