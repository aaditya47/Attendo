import renderer from 'react-test-renderer'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {cleanup } from '@testing-library/react'

afterEach(cleanup)
it ("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<App></App>,div)
})
it("matches snapshot", () => {
    const tree = renderer.create(<App></App>).toJSON();
    expect(tree).toMatchSnapshot();
})