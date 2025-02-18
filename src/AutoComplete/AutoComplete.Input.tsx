import { ComboboxButton, ComboboxInput } from '@headlessui/react';
import React, { ComponentProps, ForwardedRef, forwardRef } from 'react';
import { useAutoCompleteContext } from './AutoComplete.tsx';
import { Chip } from '../Chip/Chip.tsx';
import { callAll } from '../utils/call-all.ts';

type AutoCompleteInputProps = ComponentProps<typeof ComboboxInput> & {
  state: 'default' | 'error' | 'warning';
  autoComplete?: 'on' | 'off';
};

export const AutoCompleteInput = forwardRef(
  (
    { state, className, onClick, autoComplete = 'off', ...props }: AutoCompleteInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { open, value, multiple, onChange, itemKey } = useAutoCompleteContext();

    const border = {
      default: 'border-controls-border',
      warning: 'border-states-warning',
      error: 'border-states-error',
    };

    const hover = {
      default: 'hover:outline-neutral-detail-paler',
      warning: 'hover:border-states-warning hover:outline-states-warning-paler',
      error: 'hover:border-states-error hover:outline-states-error-paler',
    };

    const focus = {
      default:
        'focus-within:border-controls-highlight hover:focus-within:outline-controls-highlight focus-within:outline-controls-highlight',
      warning: 'focus-within:outline-states-warning hover:focus-within:outline-states-warning',
      error: 'focus-within:outline-states-error hover:focus-within:outline-states-error',
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
      autoComplete,
    };

    return (
      <>
        <div className={`flex flex-wrap gap-2 ${selectedItems.length > 0 ? 'mb-2' : ''}`}>
          {selectedItems.length > 0 &&
            selectedItems.map((item) => (
              <Chip
                key={itemKey ? itemKey(item) : item}
                onDelete={() => handleRemoveItem(item)}
                label={props.displayValue ? props.displayValue(item) : item}
                size="medium"
              />
            ))}
        </div>
        <div
          className={`bg-default-transparent text-neutral-body outline-default-transparent paragraph-sm-lighter disabled:bg-neutral-layer-1 disabled:placeholder:text-controls-content-disabled has-[:disabled]:border-neutral-detai
l-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled relative flex items-center rounded-md border outline outline-2 outline-offset-2 transition focus-visible:outline-0 disabled:cursor-not-allowed disabled:text-opacity-60 disabled:placeholder:text-opacity-60 has-[:disabled]:outline-0 ${hover[state]} ${border[state]} ${focus[state]}`}
        >
          <ComboboxInput
            className="bg-default-transparent w-full border-0 p-3 outline-0"
            ref={ref}
            {...inputProps}
            onClick={callAll(stopPropagation, onClick)}
          />
          {state === 'warning' && (
            <i className="fi fi-rr-triangle-warning text-states-warning flex items-center ps-3" />
          )}
          {state === 'error' && <i className="fi fi-rr-exclamation text-states-error flex items-center ps-3" />}
          <ComboboxButton className="flex">
            <i
              className={`m-1 my-px flex items-center justify-center rounded-full p-1 text-sm ${
                open ? 'fi-sr-angle-small-up' : 'fi-sr-angle-small-down'
              }`}
            />
          </ComboboxButton>
        </div>
      </>
    );
  },
);
