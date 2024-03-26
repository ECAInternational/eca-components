import { Combobox } from '@headlessui/react';
import React, { ComponentPropsWithRef, PropsWithChildren } from 'react';

export interface AutoCompleteOptionProps extends Omit<ComponentPropsWithRef<typeof Combobox.Option>, 'children'> {}

export function AutoCompleteOption({ className, children, ...props }: PropsWithChildren<AutoCompleteOptionProps>) {
  return (
    <Combobox.Option className={`ui-not-active:text-gray-900 relative cursor-default select-none py-2 pl-10 pr-4 ui-active:bg-controls-highlight-palest ${className}`} {...props}>
      {({ selected, active }) => (
        <>
          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{children}</span>
          {selected ? (
            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
              <i className='fi fi-rs-check size-5' aria-hidden='true' />
            </span>
          ) : null}
        </>
      )}
    </Combobox.Option>
  );
}
