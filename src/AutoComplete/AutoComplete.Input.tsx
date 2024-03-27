import { Combobox } from '@headlessui/react';
import React, { ComponentPropsWithRef } from 'react';
import { useAutoCompleteContext } from './AutoComplete.tsx';
import { callAll } from '../utils/call-all.ts';

export function AutoCompleteInput({
  className,
  state,
  onClick,
  ...props
}: ComponentPropsWithRef<typeof Combobox.Input> & {
  state: 'default' | 'error' | 'warning';
}) {
  const { open } = useAutoCompleteContext();

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

  const stopPropagation = (e: MouseEvent) => {
    if (open) e.stopPropagation();
  };

  return (
    <Combobox.Button
      className={`font-regular relative flex w-full rounded border p-3 text-controls-placeholder-text outline outline-2
        outline-offset-2 outline-default-transparent transition paragraph-sm-mid
        has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0
        ${hover[state]} ${border[state]} ${focus[state]}`}
    >
      <Combobox.Input
        className='font-light w-full rounded bg-default-transparent text-neutral-body placeholder:text-controls-placeholder-text
               placeholder:text-opacity-60 focus:placeholder:text-default-transparent focus-visible:outline-0 
               disabled:cursor-not-allowed disabled:bg-neutral-layer-1 disabled:text-opacity-60 disabled:placeholder:text-controls-content-disabled disabled:placeholder:text-opacity-60'
        onClick={callAll(stopPropagation, onClick)}
        {...props}
      />
      {open ? <i className='fi fi-sr-angle-small-up size-5' aria-hidden='true' /> : <i className='fi fi-sr-angle-small-down size-5' aria-hidden='true' />}
      {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning' />}
      {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-3 text-states-error' />}
    </Combobox.Button>
  );
}
