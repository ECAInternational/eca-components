import React, { LabelHTMLAttributes, PropsWithChildren } from 'react';

export function Label({ className, children, htmlFor, ...props }: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <label className={`block py-1 transition-all label-sm-mid ${className}`} htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}
