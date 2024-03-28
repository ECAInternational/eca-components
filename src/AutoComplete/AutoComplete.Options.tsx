import React, { ComponentPropsWithRef, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';

export function AutoCompleteOptions({
  onClose,
  ...props
}: ComponentPropsWithRef<typeof Combobox.Options> & {
  onClose?: () => void;
}) {
  return (
    <Transition as={Fragment} leave='transition ease-in duration-150' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => onClose && onClose()}>
      <Combobox.Options className='absolute mt-2 max-h-60 w-full overflow-auto rounded border border-neutral-detail-paler bg-neutral-layer-2 shadow-lg paragraph-sm-lighter focus:outline-none' {...props} />
    </Transition>
  );
}
