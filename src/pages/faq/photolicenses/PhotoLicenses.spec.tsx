import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import PhotoLicenses from "./PhotoLicenses";
import { products } from "../../../utils/products/products";
import BagOneBlue from "../../../assets/productss/bag1/blue.png";

describe("PhotoLicenses", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PhotoLicenses />
      </Provider>
    );
  });

  it("products length", () => {
    expect(products.length).toBe(8);
  });
  it("products image", () => {
    expect(products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          details: expect.arrayContaining([
            expect.objectContaining({ img: BagOneBlue }),
          ]),
        }),
      ])
    );
  });
});
