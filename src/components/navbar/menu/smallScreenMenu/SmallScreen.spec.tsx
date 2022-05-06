import React from "react";
import {render, screen} from "@testing-library/react"
import { store } from "../../../../app/store";
import {Provider} from "react-redux"
import SmallScreenMenu from "./SmallScreenMenu";

describe("Small Screen Menu", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
        <SmallScreenMenu />
    </Provider>
        )
    })

    it("Test logo", () => {
        const logo = screen.getByAltText("logo")
        expect(logo).toBeInTheDocument()
    })
})