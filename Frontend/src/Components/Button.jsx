import React from 'react';

const Button = ({ type = 'button', className, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
