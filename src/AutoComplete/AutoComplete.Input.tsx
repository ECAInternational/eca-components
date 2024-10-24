import { ComboboxButton, ComboboxInput } from '@headlessui/react';
import React, { ComponentProps, ForwardedRef, forwardRef } from 'react';
import { useAutoCompleteContext } from './AutoComplete.tsx';
import { callAll } from '../utils/call-all.ts';
import { IconButton } from '../IconButton/IconButton.tsx';

type AutoCompleteInputProps = ComponentProps<typeof ComboboxInput> & {
  state: 'default' | 'error' | 'warning';
};

export const AutoCompleteInput = forwardRef(({ state, className, onClick, ...props }: AutoCompleteInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { open, value, multiple, onChange, itemKey } = useAutoCompleteContext();

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
    onChange(selectedItems.filter((selectedItem) => selectedItem !== item));
  };

  return (
    <div>
      <div className={`flex flex-wrap gap-2 ${selectedItems.length > 0 ? 'mb-2' : ''}`}>
        {selectedItems.length > 0 &&
          selectedItems.map((item) => (
            <div key={itemKey ? itemKey(item) : item} className='flex flex-row items-center gap-2 rounded border border-neutral-detail-pale px-1 py-1.5 text-controls-placeholder-text'>
              <span> {props.displayValue ? props.displayValue(item) : item} </span>
              <IconButton name='delete' variant='standard' size='xsmall' icon={`${'fi-rr-cross-small'}`} className='rounded bg-neutral-detail-paler' onClick={(event) => handleRemoveItem(event, item)} />
            </div>
          ))}
      </div>
      <ComboboxButton as='div' className={`flex w-full items-center rounded-md border p-3 text-controls-placeholder-text outline outline-2 outline-offset-2 outline-default-transparent transition paragraph-sm-mid has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0 ${hover[state]} ${border[state]} ${focus[state]}`}>
        <div className='flex w-full flex-row'>
          <ComboboxInput className='w-full grow bg-default-transparent text-neutral-body paragraph-sm-lighter placeholder:text-controls-placeholder-text placeholder:text-opacity-60 focus:placeholder:text-default-transparent focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-neutral-layer-1 disabled:text-opacity-60 disabled:placeholder:text-controls-content-disabled disabled:placeholder:text-opacity-60' onClick={callAll(stopPropagation, onClick)} ref={ref} {...props} />
          <div className='flex-column flex justify-center'>
            <div className='flex flex-col justify-center'>
              <IconButton name='open' variant='standard' size='xsmall' icon={`${open ? 'fi-sr-angle-small-up' : 'fi-sr-angle-small-down'}`} className='rounded-full' />
            </div>
            {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning' />}
            {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-3 text-states-error' />}
          </div>
        </div>
      </ComboboxButton>
    </div>
  );
});
