import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import FormComp from "./FormComp";

const onSubmit = jest.fn();

describe("FormComp", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormComp onSubmit={onSubmit} />
      </Provider>
    );
  });

  it("Email text", () => {
    const input: HTMLInputElement = screen.getByTestId("email");
    fireEvent.change(input, { target: { value: "batuhankir1163@gmail.com" } });
    expect(input.value).toBe("batuhankir1163@gmail.com");
  });
  it("Email text", () => {
    const textarea: HTMLTextAreaElement = screen.getByTestId("textarea");
    fireEvent.change(textarea, { target: { value: "today reservation" } });
    expect(textarea.value).toBe("today reservation");
  });
  describe("form validaton, submit, isvalid", () => {
    it("form submit", async () => {
      const input: HTMLInputElement = await screen.findByTestId("email");
      fireEvent.change(input, {
        target: { value: "batuhankir1163@gmail.com" },
      });

      const textarea: HTMLTextAreaElement = await screen.findByTestId(
        "textarea"
      );
      fireEvent.change(textarea, { target: { value: "today reservation" } });

      const form = await screen.findByTestId("form");
      fireEvent.submit(form);

      await waitFor(() => expect(onSubmit).toHaveBeenCalled());
    });
    it("if message not valid", async () => {
      const form = await screen.findByTestId("form");
      fireEvent.submit(form);

      const valid: HTMLSpanElement = await screen.findByText(
        "Message is required"
      );

      await waitFor(() => expect(valid).toBeInTheDocument());
    });
  });
});
