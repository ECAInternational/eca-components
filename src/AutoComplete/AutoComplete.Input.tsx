import { Combobox } from '@headlessui/react';
import React, { ComponentPropsWithRef } from 'react';

export function AutoCompleteInput({
  className,
  state,
  onClick,
  ...props
}: ComponentPropsWithRef<typeof Combobox.Input> & {
  state: 'default' | 'error' | 'warning';
}) {
  const border = {
    default: 'border-controls-border',
    warning: 'border-states-warning',
    error: 'border-states-error'
  };

  const hover = {
    default: 'hover:outline-neutral-detail-paler',
    warning: 'hover:border-states-warning hover:outline-states-warning-paler',
    error: 'hover:border-states-error hover:outline-states-error-paler'
  };

  const focus = {
    default: 'focus-within:border-controls-highlight hover:focus-within:outline-controls-highlight focus-within:outline-controls-highlight',
    warning: 'focus-within:outline-states-warning hover:focus-within:outline-states-warning',
    error: 'focus-within:outline-states-error hover:focus-within:outline-states-error'
  };

  return (
    // <span
    //   className={`font-regular relative flex rounded border p-3 text-sm text-controls-placeholder-text outline
    //     outline-2 outline-offset-2 outline-default-transparent transition
    //     has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0
    //     ${hover[state]} ${border[state]} ${focus[state]}`}
    // >
    <Combobox.Button
      className={`font-regular relative flex w-full rounded border p-3 text-sm text-controls-placeholder-text outline
        outline-2 outline-offset-2 outline-default-transparent transition
        has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0
        ${hover[state]} ${border[state]} ${focus[state]}`}
    >
      {({ open }) => (
        <>
          <Combobox.Input
            className='w-full rounded bg-default-transparent font-light text-neutral-body placeholder:text-controls-placeholder-text
               placeholder:text-opacity-60 focus:placeholder:text-default-transparent focus-visible:outline-0 
               disabled:cursor-not-allowed disabled:bg-neutral-layer-1 disabled:text-opacity-60 disabled:placeholder:text-controls-content-disabled disabled:placeholder:text-opacity-60'
            onClick={(e: MouseEvent) => {
              if (open) e.stopPropagation();
              if (onClick) {
                onClick(e);
              }
            }}
            {...props}
          />

          <i className='fi fi-sr-angle-small-down size-5' aria-hidden='true' />
          {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning' />}
          {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-3 text-states-error' />}
        </>
      )}
    </Combobox.Button>
    // </span>
  );
}
