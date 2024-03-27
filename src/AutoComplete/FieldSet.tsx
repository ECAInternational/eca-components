import React, { FieldsetHTMLAttributes, PropsWithChildren } from 'react';

export function FieldSet({ children, className, ...props }: PropsWithChildren<FieldsetHTMLAttributes<HTMLFieldSetElement>>) {
  return (
    <fieldset className={`relative w-full has-[:disabled]:text-controls-content-disabled ${className}`} {...props}>
      {children}
    </fieldset>
  );
}
