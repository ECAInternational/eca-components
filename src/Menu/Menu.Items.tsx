import React, { ComponentPropsWithRef, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export function MenuItems({
  className,
  onClose,
  ...props
}: ComponentPropsWithRef<typeof Menu.Items> & {
  onClose?: () => void;
}) {
  return (
    <Transition as={Fragment} leave='transition ease-in duration-150' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => onClose && onClose()}>
      <Menu.Items className={`absolute right-0 mt-2 w-56 overflow-auto rounded border border-neutral-detail-paler bg-neutral-layer-2 text-left shadow-lg paragraph-sm-lighter focus:outline-none ${className}`} {...props} />
    </Transition>
  );
}
