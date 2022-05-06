import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import FooterComp from "./FooterComp";
import { contactFooterItems } from "../../../utils/contactFooter/contactFooterItems";
import { BsClockFill } from "react-icons/bs";

describe("Contact Footer", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FooterComp />
      </Provider>
    );
  });

  it("contact footer items length", () => {
    expect(contactFooterItems.length).toBe(4);
  });
  it("contact footer items", () => {
    expect(contactFooterItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          text: "MON - SUN: 6 AM - 8 PM",
          icon: BsClockFill,
        }),
      ])
    );
  });
});
