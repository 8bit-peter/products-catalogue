import React from "react";
import { render } from '@testing-library/react';
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

test('renders app without problem', () => {
    const { getByText } = render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(getByText(/Products catalogue/i)).toBeInTheDocument();
})