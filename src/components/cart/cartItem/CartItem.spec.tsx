import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import CartItem from "./CartItem";
import { BrowserRouter } from "react-router-dom";

const cartItems = [
  {
    cartItemId: "130eeaf5-9280-4ed4-9144-88255ce9c116",
    category: "footwear",
    color: "green",
    count: "1",
    details: [
      {
        id: "f97c4a8a-d2d5-4b59-88be-d0a1da8bbe53",
        img: "/static/media/blue.03c73ea8554c143ca944.png",
      },
    ],
    featured: true,
    header: "XTREME ARENAS SPORT BAG RIDER SB-009 HDE-F",
    id: "11897bf5-e8e5-4741-ab34-829cfdb8faa6",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
    secondPrice: "440.23",
    select: [],
    sign: "11897bf5-e8e5-4741-ab34-829cfdb8faa6green40",
    size: "40",
    license:
      "https://www.shutterstock.com/tr/image-vector/tshirt-sport-design-templatesoccer-jersey-mockupuniform-1135214936",
  },
];

describe("CartItem", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CartItem cartItems={[]} />
        </Provider>
      </BrowserRouter>
    );
  });

  it("if cart item length === 0", () => {
    expect(screen.getByText(/CONTINUE SHOPPING/i)).toBeInTheDocument();
  });
});

describe("CartItem", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CartItem cartItems={cartItems} />
        </Provider>
      </BrowserRouter>
    );
  });

  it("with cart item", () => {
    expect(screen.getByText(/green/i)).toBeInTheDocument();
  });
});
