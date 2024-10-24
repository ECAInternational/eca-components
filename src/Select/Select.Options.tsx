import React, { ComponentPropsWithRef, Fragment } from 'react';
import { ListboxOptions, Transition } from '@headlessui/react';

export function SelectOptions({
  className,
  onClose,
  position = 'bottom',
  align = 'start',
  ...props
}: ComponentPropsWithRef<typeof ListboxOptions> & {
  onClose?: () => void;
  position: 'top' | 'bottom' | 'left' | 'right';
  align: 'start' | 'end';
}) {
  return (
    <Transition as={Fragment} leave='transition ease-in duration-150' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => onClose && onClose()}>
      <ListboxOptions anchor={{ to: `${position} ${align}`, gap: '8px' }} className={`z-50 !max-h-60 min-w-[var(--button-width)] overflow-auto rounded-md border border-neutral-detail-paler bg-neutral-layer-2 paragraph-sm-lighter focus:outline-none ${className}`} {...props} />
    </Transition>
  );
}
