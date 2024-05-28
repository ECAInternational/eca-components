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
  const { open, value, multiple, setValue } = useAutoCompleteContext();

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

  let selectedItems = [];
  if (multiple && value && Array.isArray(value)) {
    selectedItems = value;
  }

  const stopPropagation = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget?.select();
    if (open) e.stopPropagation();
  };

  // Handler to remove item
  const handleRemoveItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: any) => {
    event.stopPropagation();
    setValue(selectedItems.filter((selectedItem) => selectedItem !== item));
  };

  return (
    <Combobox.Button
      as='div'
      className={`relative flex w-full items-center rounded border p-3 text-controls-placeholder-text outline
        outline-2 outline-offset-2 outline-default-transparent transition paragraph-sm-mid
        has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0
        ${hover[state]} ${border[state]} ${focus[state]}`}
    >
      <div className='flex w-full flex-row'>
        <div className='flex-grow'>
          <div className='flex flex-wrap gap-2'>
            {selectedItems.length > 0 &&
              !props.displayValue &&
              selectedItems.map((item) => (
                <div key={item} className='flex flex-row items-center gap-2 rounded border border-b-neutral-detail-pale px-1 py-1.5'>
                  <span> {item} </span>
                  <button className='rounded bg-neutral-detail-paler' onClick={(event) => handleRemoveItem(event, item)} aria-label={`Remove ${item}`}>
                    <i className='fi fi-rr-cross-small flex items-center text-neutral-detail-boldest' />
                  </button>
                </div>
              ))}
            <div className='flex flex-1 flex-row'>
              <Combobox.Input
                className='w-full flex-grow rounded bg-default-transparent text-neutral-body paragraph-sm-lighter placeholder:text-controls-placeholder-text
         placeholder:text-opacity-60 focus:placeholder:text-default-transparent focus-visible:outline-0 
         disabled:cursor-not-allowed disabled:bg-neutral-layer-1 disabled:text-opacity-60 disabled:placeholder:text-controls-content-disabled disabled:placeholder:text-opacity-60'
                onClick={callAll(stopPropagation, onClick)}
                {...props}
              />
            </div>
          </div>
        </div>
        <div className='flex-column flex justify-center'>
          <div className='flex flex-col justify-center'>
            <IconButton name='open' variant='standard' size='xsmall' icon={`${open ? 'fi-sr-angle-small-up' : 'fi-sr-angle-small-down'}`} className='rounded-full' />
          </div>
          {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning' />}
          {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-3 text-states-error' />}
        </div>
      </div>
    </Combobox.Button>
  );
}
