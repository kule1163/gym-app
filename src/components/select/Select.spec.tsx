import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Select from "./Select";
import { products } from "../../utils/products/products";
import { v4 as uuidv4 } from "uuid";
import { OptionProps } from "../../utils/htmlelEmentTypes/option";
import { useForm } from "react-hook-form";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useForm: () => ({
    handleSubmit: () => jest.fn(),
    register: () => jest.fn(),
  }),
}));

const a = jest.mocked(useForm());

const option: OptionProps[] = [
  { id: uuidv4(), value: "color", text: "Select Color" },
  { id: uuidv4(), value: "blue", text: "blue" },
  { id: uuidv4(), value: "green", text: "green" },
  { id: uuidv4(), value: "orange", text: "orange" },
  { id: uuidv4(), value: "pink", text: "pink" },
];

describe("Select", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Select methods={a} name="color" options={option} />
      </Provider>
    );
  });

  it("option length", () => {
    expect(option.length).toBe(5);
  });

  it("selected item", () => {
    const select = screen.getByTestId("select");
    const options: HTMLOptionElement[] = screen.getAllByRole("option");

    fireEvent.change(select, { target: { value: "blue" } });

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });
});
