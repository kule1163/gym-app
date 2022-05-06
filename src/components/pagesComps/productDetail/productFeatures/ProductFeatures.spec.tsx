import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import ProductFeatures from "./ProductFeatures";
import { products } from "../../../../utils/products/products";

describe("Product Features", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ProductFeatures product={products[0]} />
      </Provider>
    );
  });

  it("products select", () => {
    expect(screen.getAllByRole("option").length).toBe(5);
  });

  it("should correctly set default option", () => {
    const options: HTMLOptionElement[] = screen.getAllByRole("option");

    fireEvent.change(screen.getByTestId("select"), {
      target: { value: "blue" },
    });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
  });
});
