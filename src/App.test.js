import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('login container shows on page load', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/enter your github organisation and team/i);
  expect(linkElement).toBeInTheDocument();
});
