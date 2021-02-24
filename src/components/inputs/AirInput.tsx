import React from 'react';
import ErrorMessage from './ErrorMessage';

interface AirInputProps {
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  ariaLabel?: string;
}

export const airInputTestId = 'airfoilInput';
export const airInputErrorTestId = 'airfoilInputError';

const baseInputStyles =
  'focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md';

const AirInput: React.FC<AirInputProps> = ({
  placeholder,
  disabled,
  error,
  ariaLabel,
}) => (
  <>
    <input
      className={`${baseInputStyles} ${error ? 'border-red-500' : ''}`}
      type="text"
      aria-label={ariaLabel}
      placeholder={placeholder}
      disabled={disabled}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default AirInput;
