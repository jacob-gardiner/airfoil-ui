import React from 'react';
import { render, screen } from '@testing-library/react';
import AirInput, { airInputErrorTestId, airInputTestId } from './AirInput';

describe('air input does what it should...', () => {
  it('sets the placeholder text for the input', async () => {
    render(<AirInput placeholder="My Placeholder" />);

    const inputElement = await screen.findByTestId(airInputTestId);
    expect(inputElement).toHaveAttribute('placeholder', 'My Placeholder');
  });
  it('sets the aria-label text for the input', async () => {
    const ariaLabel = 'example-label';
    render(<AirInput ariaLabel={ariaLabel} placeholder="My Placeholder" />);

    const inputElement = await screen.findByTestId(airInputTestId);

    expect(inputElement).toHaveAttribute('aria-label', ariaLabel);
  });

  it('defaults the type to text', async () => {
    render(<AirInput />);

    const inputElement = await screen.findByTestId(airInputTestId);
    expect(inputElement).toBeInTheDocument();
  });

  it('can disable the input', async () => {
    render(<AirInput disabled={true} />);

    const inputElement = await screen.findByTestId(airInputTestId);
    expect(inputElement).toBeDisabled();
  });

  it('changes the border to red if there is an error', async () => {
    const expectedErrorMessage = 'Something is wrong';
    render(<AirInput error={expectedErrorMessage} />);

    const inputElement = await screen.findByTestId(airInputTestId);
    expect(inputElement).toHaveClass('border-red-500');
  });

  it('shows an error message if passed', async () => {
    const expectedErrorMessage = 'Something is wrong';
    render(<AirInput error={expectedErrorMessage} />);

    const errorMessageElement = await screen.findByTestId(airInputErrorTestId);
    expect(errorMessageElement).toHaveTextContent(expectedErrorMessage);
  });
});
