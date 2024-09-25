import React, { ComponentPropsWithRef, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';

export function SelectOptions({
  className,
  onClose,
  ...props
}: ComponentPropsWithRef<typeof Listbox.Options> & {
  onClose?: () => void;
}) {
  return (
    <Transition as={Fragment} leave='transition ease-in duration-150' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => onClose && onClose()}>
      <Listbox.Options className={`absolute mt-2 max-h-60 w-full overflow-auto rounded-md border border-neutral-detail-paler bg-neutral-layer-2 paragraph-sm-lighter focus:outline-none ${className}`} {...props} />
    </Transition>
  );
}
