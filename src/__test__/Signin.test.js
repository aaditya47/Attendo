import React from 'react';
import ReactDOM from 'react-dom';
import StudentSignIn from '../pages/StudentLogin';
import { render, cleanup } from '@testing-library/react'

import renderer from 'react-test-renderer'

afterEach(cleanup)
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<StudentSignIn></StudentSignIn>, div)
})
afterEach(cleanup)
it("renders button correctly", () => {
    const { getByTestId } = render(<StudentSignIn></StudentSignIn>)
    expect(getByTestId('button')).toHaveTextContent("Sign In")
});
afterEach(cleanup)
it("renders button1 correctly", () => {
    const { getByTestId } = render(<StudentSignIn></StudentSignIn>)
    expect(getByTestId('button2')).toHaveTextContent("Return to Home Page")
});

it("matches snapshot", () => {
    const tree = renderer.create(<StudentSignIn></StudentSignIn>).toJSON();
    expect(tree).toMatchSnapshot();
})