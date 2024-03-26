import { Combobox } from '@headlessui/react';
import React, { ComponentPropsWithRef } from 'react';

export interface AutoCompleteLabelProps extends ComponentPropsWithRef<typeof Combobox.Label> {}

export function AutoCompleteLabel({ className, children, ...props }: AutoCompleteLabelProps) {
  return (
    <Combobox.Label className={`block py-1 text-sm transition-all ${className}`} {...props}>
      {children}
    </Combobox.Label>
  );
}
