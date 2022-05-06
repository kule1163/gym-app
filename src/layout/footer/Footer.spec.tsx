import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Footer from "./Footer";
import { footerFeatures } from "../../utils/footerFeaturs/footerFeatures";
import { socialIcons } from "../../utils/socialIcons/socialIcons";
import { FaFacebookF } from "react-icons/fa";

describe("Footer", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
  });

  describe("footer features", () => {
    it("length", () => {
      expect(footerFeatures.length).toBe(3);
    });
    it("items", () => {
      expect(footerFeatures).toEqual(
        expect.arrayContaining([expect.objectContaining({ text: "UPDATES" })])
      );
    });
  });
  describe("social icons", () => {
    it("length", () => {
      expect(socialIcons.length).toBe(3);
    });
    it("items", () => {
      expect(socialIcons).toEqual(
        expect.arrayContaining([expect.objectContaining({ icon: FaFacebookF })])
      );
    });
  });
});
