import React from 'react';

export default ({ type, className, onClick, children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);
