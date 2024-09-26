import React from 'react';

const Input = ({ id, type = 'text', className, value, onChange, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`block w-full px-4 py-2 border rounded-md focus:outline-none ${className}`}
    />
  );
};

export default Input;
