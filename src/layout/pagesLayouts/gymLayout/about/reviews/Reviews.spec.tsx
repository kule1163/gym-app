import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../app/store";
import Reviews from "./Rewies";
import { reviews } from "../../../../../utils/about/reviews";
import Image from "../../../../../assets/gym/homeBack.jpg";

describe("Reviews", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Reviews />
      </Provider>
    );
  });

  it("Backgorund image", () => {
    const backgorund = screen.getByTestId("background");
    expect(backgorund).toHaveStyle(`background-image: url(${Image})`);
  });
  it("Images", () => {
    expect(screen.getAllByAltText("person-img"));
  });
  it("Revies length", () => {
    expect(reviews.length).toBe(4);
  });
  it("Revies include", () => {
    expect(reviews).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "ALEXANDER JOHNSON",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim urna id dolor.",
        }),
      ])
    );
  });
});
