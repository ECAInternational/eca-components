import React, { ComponentPropsWithRef, Fragment } from 'react';
import { MenuItems as HeadlessMenuItems, Transition } from '@headlessui/react';

export function MenuItems({
  className,
  onClose,
  ...props
}: ComponentPropsWithRef<typeof HeadlessMenuItems> & {
  onClose?: () => void;
}) {
  return (
    <Transition as={Fragment} leave='transition ease-in duration-150' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => onClose && onClose()}>
      <HeadlessMenuItems anchor='bottom end' className={`mt-2 w-56 overflow-auto rounded-md border border-neutral-detail-paler bg-neutral-layer-2 text-left shadow-lg paragraph-sm-lighter focus:outline-none ${className}`} {...props} />
    </Transition>
  );
}
