import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import { products } from "../../../../utils/products/products";
import ProductImage from "./ProductImage";
import BagOneBlue from "../../../../assets/productss/bag1/blue.png";

describe("ProductImage", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ProductImage product={products[0]} />
      </Provider>
    );
  });

  it("images at screen", () => {
    expect(products[0].details.length).toBe(4);
  });
  it("contains images", () => {
    expect(products[0].details).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          img: BagOneBlue,
        }),
      ])
    );
  });
});
