import React from 'react';
import { render, getByLabelText, fireEvent, cleanup } from '@testing-library/react';
import GithubChooseOrg from './GithubChooseOrg';

test('typing into input fields and clicking submit button returns name and avatar of github team', () => {
  const { getByText } = render(<GithubChooseOrg />);

  const input1 = getByLabelText(/organisation/i)
  const input2 = getByLabelText(/team/i)

  fireEvent.change(input1, {
      target: {value: `foundersandcoders`}
  })

  fireEvent.change(input2, {
    target: {value: `FAC18`}
})

  const linkElement = getByText(//i);
  expect(linkElement).toBeInTheDocument();
});
