import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import StoreProducts from "./StoreProducts";
import { products } from "../../utils/products/products";
import BagOneBlue from "../../assets/productss/bag1/blue.png";
import { BrowserRouter } from "react-router-dom";

describe("StoreProducts", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <StoreProducts products={products} />
        </Provider>
      </BrowserRouter>
    );
  });

  it("products length", () => {
    expect(products.length).toBe(8);
  });
  it("products items", () => {
    expect(products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          featured: false,
          category: "ACCESSORIES",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
          header: "XTREME ARENAS SPORT BAG RIDER SB-099 HDE-XT",
          details: expect.arrayContaining([
            expect.objectContaining({
              img: BagOneBlue,
            }),
          ]),
          select: expect.arrayContaining([
            expect.objectContaining({
              type: "color",
              option: expect.arrayContaining([
                expect.objectContaining({
                  value: "color",
                  text: "Select Color",
                }),
              ]),
            }),
          ]),
        }),
      ])
    );
  });
});
