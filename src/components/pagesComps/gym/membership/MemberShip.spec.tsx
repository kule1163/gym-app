import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import MemberShip from "./MemberShip";
import { memberships } from "../../../../utils/membership/memberships";

describe("MemberShip", () => {
  beforeEach(() => {
    render(<MemberShip item={memberships[0]} />);
  });

  it("memberships item", () => {
    expect(memberships[0]).toEqual(
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
      })
    );
  });
});
