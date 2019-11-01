import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('darkmode', () => {
  // let clicked = false;
  const {getByText} = render(<App useDarkMode = {() => clicked = true} />);
  const darkmode = getByText(/^dark mode$/i);
  fireEvent.click(darkmode);
  // expect(clicked).toBe(true);
});

test('header displaying', () => {
  const { getByText } = render(<App />);
  getByText("Women's World Cup");
})



