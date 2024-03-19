import React, { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  alignment?: 'left' | 'right';
}

export function Checkbox(props: CheckboxProps) {
  const { name, id, label, checked, alignment = 'left', disabled = false, ...others } = props;

  return (
    <div className='flex items-center text-neutral-body has-[:disabled]:text-controls-content-disabled'>
      {label && alignment === 'left' && (
        <label htmlFor={id} className='pe-2 text-sm font-light transition-all'>
          {label}
        </label>
      )}

      <div className='flex items-center'>
        <input
          type='checkbox'
          id={id || name}
          name={name}
          disabled={disabled}
          checked={checked}
          {...others}
          className='outline-offset-default-transparent peer size-6 cursor-pointer appearance-none rounded border border-controls-border
          outline outline-2 outline-offset-2 outline-default-transparent transition

          checked:border-0 checked:bg-controls-highlight indeterminate:border-0
          indeterminate:bg-controls-highlight hover:border-controls-border-hover
          hover:outline-neutral-detail-paler checked:hover:outline-controls-highlight-paler
          indeterminate:hover:outline-controls-highlight-paler focus-visible:border-controls-border focus-visible:outline-controls-border checked:focus-visible:outline-controls-highlight indeterminate:focus-visible:outline-controls-highlight

          active:border-controls-border-hover active:bg-neutral-detail-palest
          active:outline-4 active:outline-offset-0
          active:outline-neutral-detail-palest
          checked:active:bg-controls-highlight-bold
          indeterminate:active:bg-controls-highlight-bold

          disabled:cursor-not-allowed disabled:border-neutral-detail-paler
          checked:disabled:border-controls-bg-disabled
          checked:disabled:bg-controls-bg-disabled
          indeterminate:disabled:bg-neutral-detail-paler
          disabled:hover:outline-0'
        />
        <i className='fi fi-br-minus pointer-events-none absolute flex size-6 scale-0 place-content-center items-center text-controls-highlight-palest opacity-0 transition-all peer-indeterminate:scale-100 peer-indeterminate:opacity-100 peer-disabled:text-controls-content-disabled' />
        <i className='fi fi-br-check pointer-events-none absolute flex size-6 scale-0 place-content-center items-center text-controls-highlight-palest opacity-0 transition-all peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:text-controls-content-disabled' />
      </div>
      {label && alignment === 'right' && (
        <label htmlFor={id} className='ps-2 text-sm font-light'>
          {label}
        </label>
      )}
    </div>
  );
}
