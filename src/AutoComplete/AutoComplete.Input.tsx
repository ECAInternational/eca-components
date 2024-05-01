import { Combobox } from '@headlessui/react';
import React, { ComponentPropsWithRef } from 'react';
import { useAutoCompleteContext } from './AutoComplete.tsx';
import { callAll } from '../utils/call-all.ts';
import { IconButton } from '../IconButton/IconButton.tsx';

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

  const stopPropagation = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget?.select();
    if (open) e.stopPropagation();
  };

  return (
    <Combobox.Button
      as='div'
      className={`relative flex w-full items-center rounded border p-3 text-controls-placeholder-text outline
        outline-2 outline-offset-2 outline-default-transparent transition paragraph-sm-mid
        has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0
        ${hover[state]} ${border[state]} ${focus[state]}`}
    >
      <Combobox.Input
        className='w-full rounded bg-default-transparent text-neutral-body paragraph-sm-lighter placeholder:text-controls-placeholder-text
               placeholder:text-opacity-60 focus:placeholder:text-default-transparent focus-visible:outline-0 
               disabled:cursor-not-allowed disabled:bg-neutral-layer-1 disabled:text-opacity-60 disabled:placeholder:text-controls-content-disabled disabled:placeholder:text-opacity-60'
        onClick={callAll(stopPropagation, onClick)}
        {...props}
      />
      <IconButton name='open' variant='standard' size='xsmall' icon={`${open ? 'fi-sr-angle-small-up' : 'fi-sr-angle-small-down'}`} className='rounded-full' />
      {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning' />}
      {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-3 text-states-error' />}
    </Combobox.Button>
  );
}
