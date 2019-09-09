import React from 'react';

export default function index({ className, children }) {
  return <form className={className}>{children}</form>;
}
