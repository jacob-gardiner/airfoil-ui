import React from 'react';
import { render, screen } from '@testing-library/react';
import defaultTheme from 'tailwindcss/defaultTheme';
import ErrorMessage from './ErrorMessage';

const childrens = 'just some text';

describe('ErrorMessage', () => {
  describe('Default level', () => {
    it('Renders the passed children', () => {
      render(<ErrorMessage>{childrens}</ErrorMessage>);
      expect(screen.getByText(childrens)).toBeInTheDocument();
    });

    it('Renders with text-red-500 as the default level', () => {
      render(<ErrorMessage>{childrens}</ErrorMessage>);
      expect(screen.getByText(childrens)).toHaveClass('text-red-500');
    });
  });

  describe('Critical Level', () => {
    it('Renders the passed children', () => {
      render(<ErrorMessage level="critical">{childrens}</ErrorMessage>);
      expect(screen.getByText(childrens)).toBeInTheDocument();
    });
    it('Renders with text-red-1000 as the critical level', () => {
      render(<ErrorMessage level="critical">{childrens}</ErrorMessage>);
      expect(screen.getByText(childrens)).toHaveClass('text-red-1000');
    });
  });
});
