import React, { ComponentPropsWithRef, Fragment } from 'react';
import { ComboboxOptions, Transition } from '@headlessui/react';

export function AutoCompleteOptions({
  onClose,
  className,
  position = 'bottom',
  align = 'start',
  ...props
}: ComponentPropsWithRef<typeof ComboboxOptions> & {
  onClose?: () => void;
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'end';
}) {
  return (
    <Transition as={Fragment} leave='transition ease-in duration-150' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => onClose && onClose()}>
      <ComboboxOptions anchor={{ to: `${position} ${align}` }} className={`z-50 !max-h-60 w-[calc(var(--input-width)+var(--button-width))] overflow-auto rounded-md border border-neutral-detail-paler bg-neutral-layer-2 paragraph-sm-lighter focus:outline-none ${className}`} {...props} />
    </Transition>
  );
}
