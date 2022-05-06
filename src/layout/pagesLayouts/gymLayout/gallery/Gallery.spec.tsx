import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import Gallery from "./Gallery";
import { galleryItems } from "../../../../utils/galery/galeryItems";

describe("Gallery", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );
  });

  it("gallery items length", () => {
    expect(galleryItems.length).toBe(4);
  });
  it("open gallery", () => {
    const galleryContainer = screen.getByTestId("galleryContainer");
    const openGallery = screen.getAllByTestId("search-icon");

    fireEvent.click(openGallery[0]);
    expect(galleryContainer.classList.contains("galery-photos-show")).toBe(
      true
    );
  });
  it("close gallery", () => {
    const closeIcon = screen.getByTestId("close");
    const galleryContainer = screen.getByTestId("galleryContainer");

    fireEvent.click(closeIcon);
    expect(galleryContainer.classList.contains("galery-photos-show")).toBe(
      false
    );
  });
});
