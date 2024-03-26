import React, { ComponentPropsWithRef, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';

// @ts-ignore
export interface AutoCompleteOptionsProps extends ComponentPropsWithRef<typeof Combobox.Options> {}

export function AutoCompleteOptions({ ...props }: AutoCompleteOptionsProps) {
  return (
    <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
      <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto border border-neutral-detail-paler py-3 text-base shadow-lg focus:outline-none' {...props} />
    </Transition>
  );
}
