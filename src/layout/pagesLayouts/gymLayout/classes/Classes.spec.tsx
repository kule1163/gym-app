import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import Classes from "./Classes";
import { classes } from "../../../../utils/classes/classes";

describe("Classes", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Classes />
      </Provider>
    );
  });

  it("classes length", () => {
    expect(classes.length).toBe(6);
  });
  it("classes text", () => {
    expect(classes[0].text).toBe("Cardio");
  });
});
