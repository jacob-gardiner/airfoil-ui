import React from 'react';
import { render, cleanup, RenderResult } from '@testing-library/react/pure'
import AirInput from './AirInput';

const queryInput = () => document.querySelector('input');

const errorMessageText = 'Im an error';

jest.mock('./ErrorMessage', () => ({ children }: JSX.ElementChildrenAttribute) =>
{
  expect(children).toBe(errorMessageText)
  return  (<div data-testid="error-message">Error goes here</div>)
})

const findByTestIdNotFound = (id: string) => `Unable to find an element by: [data-testid="${id}"]`

describe('air input does what it should...', () => {

  describe('Input component', () => {

    afterEach(() => {
      cleanup();
    });
    it('defaults the type to text', async () => {
      render(<AirInput />);
      expect(queryInput()).toBeInTheDocument();
    });

    it('sets the placeholder text for the input', async () => {
      render(<AirInput placeholder="My Placeholder" />);

      expect(queryInput()).toHaveAttribute('placeholder', 'My Placeholder');
    });
    it('sets the aria-label text for the input', async () => {
      const ariaLabel = 'example-label';
      render(<AirInput ariaLabel={ariaLabel} />);

      expect(queryInput()).toHaveAttribute('aria-label', ariaLabel);
    });

    it('can disable the input', async () => {
      render(<AirInput disabled={true} />);

      expect(queryInput()).toBeDisabled();
    });


    it('does not render the error message if there is no error', async () => {
      const {
        findByTestId
      } = render(<AirInput />);
      expect(queryInput()).not.toHaveClass('border-red-500');
      await expect(findByTestId('error-message')).rejects.toThrow(findByTestIdNotFound('error-message'))

    });

  })
  describe('Error component', () => {

    let wrapper: RenderResult;

    beforeAll(() => {
      wrapper = render(<AirInput error={errorMessageText} />);
    });

    afterAll(() => {
      cleanup();
    })

    it('changes the border to red if there is an error', async () => {
      expect(queryInput()).toHaveClass('border-red-500');
    });
    it('shows an error message if passed', async () => {
      const errorMessageElement = await wrapper.findByTestId('error-message');
      expect(errorMessageElement).toBeInTheDocument();
    });


  })
});
