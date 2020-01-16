import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import LoginContainer from './LoginContainer';

test('typing into input fields and clicking submit button returns name and avatar of github team', () => {

  const { getByText, getByLabelText } = render(<LoginContainer />);

  const input1 = getByLabelText(/organisation/i);
  const input2 = getByLabelText(/team/i);

  fireEvent.change(input1, {
      target: {value: `foundersandcoders`}
  })

  fireEvent.change(input2, {
    target: {value: `FAC18`}
});

const submitButton = getByText("Submit");

fireEvent.click(submitButton);

  const userReda = getByText(/redahaq/i);
  expect(userReda).toBeInTheDocument();
});
