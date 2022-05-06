import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import NestedInput from "./NestedInput";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
  }),
}));

describe("NestedInput", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <NestedInput name="batu" placeholder="ahmet batuhan" type="text" />
      </Provider>
    );
  });

  it("Nestedinput place holder", () => {
    const input: HTMLInputElement = screen.getByTestId("batu");
    expect(input.placeholder).toBe("ahmet batuhan");
  });

  it("Nestedinput with props", () => {
    const input: HTMLInputElement = screen.getByTestId("batu");
    fireEvent.change(input, { target: { value: "batuhan" } });

    expect(input.value).toBe("batuhan");
  });
});
