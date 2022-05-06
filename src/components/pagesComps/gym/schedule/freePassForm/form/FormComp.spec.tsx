import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../../app/store";
import FormComp from "./FormComp";

const onSubmit = jest.fn();

describe("Free Pass Form", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormComp onSubmit={onSubmit} />
      </Provider>
    );
  });

  it("Name", () => {
    const input: HTMLInputElement = screen.getByTestId("name");
    fireEvent.change(input, { target: { value: "batuhan" } });
    expect(input.value).toBe("batuhan");
  });
  it("email", () => {
    const input: HTMLInputElement = screen.getByTestId("email");
    fireEvent.change(input, { target: { value: "batuhankir1163@gmail.com" } });
    expect(input.value).toBe("batuhankir1163@gmail.com");
  });
  it("phone", () => {
    const input: HTMLInputElement = screen.getByTestId("email");
    fireEvent.change(input, { target: { value: "+905528113046" } });
    expect(input.value).toBe("+905528113046");
  });
  it("Test form issubmit and Valid", async () => {
    const name: HTMLInputElement = await screen.findByPlaceholderText(
      /Enter your name/i
    );
    const email: HTMLInputElement = await screen.findByPlaceholderText(
      /Enter your email/i
    );
    const phone: HTMLInputElement = await screen.findByPlaceholderText(
      /Enter phone number/i
    );
    const form = await screen.findByTestId("form");
    fireEvent.change(name, { target: { value: "batuhan" } });
    fireEvent.change(email, { target: { value: "batuhankir1163@gmail.com" } });
    fireEvent.change(phone, { target: { value: "+905528113046" } });

    fireEvent.submit(form);
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
