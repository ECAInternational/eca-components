import { ComboboxButton, ComboboxInput } from '@headlessui/react';
import React, { ComponentProps, ForwardedRef, forwardRef } from 'react';
import { useAutoCompleteContext } from './AutoComplete.tsx';
import { IconButton } from '../IconButton/IconButton.tsx';
import { Chip } from '../Chip/Chip.tsx';
import { callAll } from '../utils/call-all.ts';

type AutoCompleteInputProps = ComponentProps<typeof ComboboxInput> & {
  state: 'default' | 'error' | 'warning';
  autoComplete?: 'on' | 'off';
};

export const AutoCompleteInput = forwardRef(({ state, className, onClick, autoComplete = 'off', ...props }: AutoCompleteInputProps, ref: ForwardedRef<HTMLInputElement>) => {
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
  const handleRemoveItem = (item: any) => {
    onChange(selectedItems.filter((selectedItem) => selectedItem !== item));
  };

  const inputProps = {
    ...props,
    autoComplete
  };

  return (
    <>
      <div className={`flex flex-wrap gap-2 ${selectedItems.length > 0 ? 'mb-2' : ''}`}>{selectedItems.length > 0 && selectedItems.map((item) => <Chip key={itemKey ? itemKey(item) : item} onDelete={() => handleRemoveItem(item)} label={props.displayValue ? props.displayValue(item) : item} size='medium' />)}</div>
      <div className={`relative flex items-center rounded-md border bg-default-transparent text-neutral-body outline outline-2 outline-offset-2 outline-default-transparent transition paragraph-sm-lighter focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-neutral-layer-1 disabled:text-opacity-60 disabled:placeholder:text-controls-content-disabled disabled:placeholder:text-opacity-60 has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0 ${hover[state]} ${border[state]} ${focus[state]}`}>
        <ComboboxInput className='w-full border-0 bg-default-transparent p-3 outline-0' ref={ref} {...inputProps} onClick={callAll(stopPropagation, onClick)} />
        {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning' />}
        {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-3 text-states-error' />}
        <ComboboxButton className='flex'>
          <IconButton name='open' variant='standard' size='xsmall' icon={`${open ? 'fi-sr-angle-small-up' : 'fi-sr-angle-small-down'}`} className='my-px rounded-full p-1' />
        </ComboboxButton>
      </div>
    </>
  );
});
