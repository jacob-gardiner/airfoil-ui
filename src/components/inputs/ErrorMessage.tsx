import React from 'react';

export const airInputTestId = 'airfoilInput';
export const airInputErrorTestId = 'airfoilInputError';

const ErrorMessage: React.FC = ({ children }) => (
  <div className="text-xs text-red-500">{children}</div>
);

export default ErrorMessage;
