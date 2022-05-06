import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import Schedule from "./Schedule";
import Image from "../../../../assets/gym/homeBack.jpg";

describe("Schedule", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Schedule />
      </Provider>
    );
  });

  it("backgorund image", () => {
    const container = screen.getByTestId("scheduleContainer");
    expect(container).toHaveStyle(`background: url(${Image})`);
  });
});
