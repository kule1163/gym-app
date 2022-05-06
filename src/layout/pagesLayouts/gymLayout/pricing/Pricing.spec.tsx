import React from "react";
import { screen, render } from "@testing-library/react";
import Pricing from "./Pricing";
import { memberships } from "../../../../utils/membership/memberships";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("Pricing", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Pricing />
      </Provider>
    );
  });

  it("membership length", () => {
    expect(memberships.length).toBe(4);
  });
  it("membership items", () => {
    expect(memberships).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: "bronz",
          membership: "membership",
          background: "third",
          children: expect.arrayContaining([
            expect.objectContaining({
              text: "Sed viverra nunc evarius",
            }),
          ]),
          price: 29,
        }),
      ])
    );
  });
});
