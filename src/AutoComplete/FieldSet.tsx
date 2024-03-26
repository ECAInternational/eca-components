import React, { HTMLAttributes, PropsWithChildren } from 'react';

export function FieldSet({ children, className, ...props }: PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>>) {
  return (
    <fieldset className={`relative w-full text-neutral-detail-bolder has-[:disabled]:text-controls-content-disabled ${className}`} {...props}>
      {children}
    </fieldset>
  );
}
