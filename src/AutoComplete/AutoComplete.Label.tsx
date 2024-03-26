import { Combobox } from '@headlessui/react';
import React, { ComponentPropsWithRef } from 'react';

export function AutoCompleteLabel({ className, children, ...props }: ComponentPropsWithRef<typeof Combobox.Label>) {
  return (
    <Combobox.Label className={`block py-1 text-sm transition-all ${className}`} {...props}>
      {children}
    </Combobox.Label>
  );
}
