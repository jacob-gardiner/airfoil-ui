import React from 'react';

interface AirInputProps {
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  ariaLabel?: string;
}

export const airInputTestId = 'airfoilInput';
export const airInputErrorTestId = 'airfoilInputError';

const baseInputStyles =
  'focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border border-gray-300 rounded-md';

const AirInput: React.FC<AirInputProps> = ({
  placeholder,
  disabled,
  error,
  ariaLabel,
}) => (
  <>
    <input
      data-testid={airInputTestId}
      className={`${baseInputStyles} ${error ? 'border-red-500' : ''}`}
      type="text"
      aria-label={ariaLabel}
      placeholder={placeholder}
      disabled={disabled}
    />
    {error && (
      <div data-testid={airInputErrorTestId} className="text-xs text-red-500">
        {error}
      </div>
    )}
  </>
);

export default AirInput;
