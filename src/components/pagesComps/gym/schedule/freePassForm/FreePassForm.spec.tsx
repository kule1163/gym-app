import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../app/store";
import FreePassForm from "./FreePassForm";

describe("Free Pass Form", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <FreePassForm />
      </Provider>
    );
  });

  it("Free pass in the document", () => {
    expect(screen.getByText(/free pass/i)).toBeInTheDocument();
  });
});
