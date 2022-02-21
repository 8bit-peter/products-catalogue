import React from "react";
import ContextProvider from "../../context/ContextProvider";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { render } from "@testing-library/react";
import { ProductsList } from "./ProductsList";

test('When component is rendered, the list should be displayed', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <ContextProvider>
                <ProductsList />
            </ContextProvider>
        </ThemeProvider>
    );
    expect(getByTestId('products-list')).toBeInTheDocument();
})