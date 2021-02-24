import React from 'react';
import { render, screen } from '@testing-library/react';
import AirInput, { airInputTestId } from "./AirInput";

test('renders learn react link', () => {
    render(<AirInput placeholder="My Placeholder"/>);
    const linkElement = screen.getByPlaceholderText(/My Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});
describe('air input does what it should...', () => {

    it('sets the placeholder text for the input', async () => {
        render(<AirInput placeholder="My Placeholder"/>);
        const linkElement = await screen.findByTestId(airInputTestId);
        expect(linkElement).toHaveProperty('placeholder', 'My Placeholder');
    })

    it('defaults the type to text', async () => {
        render(<AirInput />);
        const linkElement = await screen.findByTestId(airInputTestId);
        expect(linkElement).toBeInTheDocument();
    })

    it('can disable the input', async () => {
        render(<AirInput disabled={true} />);
        const linkElement = await screen.findByTestId(airInputTestId);
        expect(linkElement).toBeDisabled();
    })
})
