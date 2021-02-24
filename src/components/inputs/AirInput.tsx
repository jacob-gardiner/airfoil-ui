import React from 'react';

interface AirInputProps {
  placeholder?: string;
  disabled?: boolean;
}

export const airInputTestId = 'airfoilInput';

const AirInput: React.FC<AirInputProps> = ({ placeholder, disabled }) => (
  <input
    data-testid={airInputTestId}
    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
    type="text"
    placeholder={placeholder}
    disabled={disabled}
  />
);

export default AirInput;
