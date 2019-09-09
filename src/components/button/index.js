import React from 'react';

export default function index({ type, className, onClick, children }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
