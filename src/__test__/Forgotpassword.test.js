import React from 'react';
import ReactDOM from 'react-dom';
import ForgotPassword from '../pages/ForgotPassword';
import { render, cleanup } from '@testing-library/react'

import renderer from 'react-test-renderer'

afterEach(cleanup)
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ForgotPassword></ForgotPassword>, div)
})
afterEach(cleanup)
it("renders button correctly", () => {
    const { getByTestId } = render(<ForgotPassword></ForgotPassword>)
    expect(getByTestId('button')).toHaveTextContent("Get Password")
});

it("matches snapshot", () => {
    const tree = renderer.create(<ForgotPassword></ForgotPassword>).toJSON();
    expect(tree).toMatchSnapshot();
})