import React from "react"
import {render, screen} from "@testing-library/react"
import {Provider} from "react-redux"
import {store} from "../../app/store"
import Header from "./Header"

describe("Header", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Header first="first" second="second"/>
            </Provider>
        )
    })

    it("First text", () =>{
        expect(screen.getByText(/first/i)).toBeInTheDocument()
    })
    it("Second text", () =>{
        expect(screen.getByText(/second/i)).toBeInTheDocument()
    })
})