import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, } from "@testing-library/react";
import * as rtl from "@testing-library/react";


it('App renders', async() => {
  const app = await rtl.render(<App />);
  const dark = await app.getByText(/dark mode/i);
  rtl.fireEvent.click(dark);
  let body = document.getElementsByTagName('body');
  expect(body[0].classList.contains('dark-mode')).toBe(true);
  rtl.fireEvent.click(dark);
  expect(body[0].classList.contains('dark-mode')).toBe(false);
})

it('darkmode', () => {
  const {getByText} = render(<App />);
  const darkmode = getByText(/^dark mode$/i);
  fireEvent.click(darkmode);
});

test('header displaying', () => {
  const { getByText } = render(<App />);
  getByText("Women's World Cup");
})



