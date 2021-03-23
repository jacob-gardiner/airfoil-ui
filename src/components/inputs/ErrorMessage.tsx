import React from 'react';

export const airInputTestId = 'airfoilInput';
export const airInputErrorTestId = 'airfoilInputError';

type ErrorMessageProps = {
  level?: 'critical' | 'default';
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  level = 'default',
}) => (
  <div className={`text-xs text-red-${level === 'critical' ? '1000' : '500'}`}>
    {children}
  </div>
);

export default ErrorMessage;
