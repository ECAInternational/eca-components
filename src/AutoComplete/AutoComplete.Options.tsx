import React, { ComponentPropsWithRef, Fragment } from 'react';
import { ComboboxOptions, Transition } from '@headlessui/react';

export function AutoCompleteOptions({
  onClose,
  className,
  ...props
}: ComponentPropsWithRef<typeof ComboboxOptions> & {
  onClose?: () => void;
}) {
  return (
    <Transition as={Fragment} leave='transition ease-in duration-150' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => onClose && onClose()}>
      <ComboboxOptions anchor={{ to: 'bottom start', gap: '24px', offset: '-12px' }} className={`z-50 !my-0 !max-h-60 min-w-[var(--button-width)] overflow-auto rounded-md border border-neutral-detail-paler bg-neutral-layer-2 paragraph-sm-lighter focus:outline-none ${className}`} {...props} />
    </Transition>
  );
}
