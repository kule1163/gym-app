import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../app/store";
import SearchIcon from "./SearchIcon";
import { galleryItems } from "../../../../../utils/galery/galeryItems";

describe("SearchIcon", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchIcon item={galleryItems[0]} setShowPhotos={jest.fn()} />
      </Provider>
    );
  });

  it("Icon", () => {
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });
});
