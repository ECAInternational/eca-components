import React, { ComponentProps } from 'react';
import { Combobox } from '@headlessui/react';

export interface AutoCompleteProps extends Omit<ComponentProps<typeof Combobox>, 'multiple'> {
  multiple?: boolean;
}

export function AutoComplete({ multiple, ...props }: AutoCompleteProps) {
  return <Combobox {...props} multiple={!!multiple as any} />;
}
