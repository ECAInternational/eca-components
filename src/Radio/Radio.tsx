import React, { InputHTMLAttributes } from 'react';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
  label?: string;
  value: string;
  checked?: boolean;
}

export function Radio(props: RadioProps) {
  const { name, id, label, value, checked, ...others } = props;

  return (
    <div className='flex items-center text-neutral-body has-[:disabled]:text-controls-content-disabled'>
      <input
        type='radio'
        id={id || name}
        name={name}
        value={value}
        checked={checked}
        {...others}
        className='outline-offset-default-transparent before:content[""] peer grid size-6 cursor-pointer appearance-none place-content-center rounded-full border
          border-controls-border outline outline-2 outline-offset-2 outline-default-transparent

          transition before:size-3.5
          before:scale-0 before:rounded-full
          before:bg-controls-highlight before:transition
          checked:border-controls-highlight checked:before:scale-100 hover:border-controls-border-hover hover:outline-neutral-detail-paler checked:hover:border-controls-highlight

          checked:hover:outline-controls-highlight-paler focus-visible:border-controls-border focus-visible:outline-controls-border checked:focus-visible:border-controls-highlight checked:focus-visible:outline-controls-highlight active:border-controls-border-hover active:outline-4

          active:outline-offset-0
          active:outline-neutral-detail-palest
          checked:active:outline-neutral-detail-palest disabled:cursor-not-allowed
          disabled:border-neutral-detail-paler checked:disabled:border-controls-bg-disabled
          before:checked:disabled:bg-controls-bg-disabled disabled:hover:outline-0
          active:[&:not(:disabled)]:bg-neutral-detail-palest'
      />
      {label && (
        <label htmlFor={id} className='ps-2 text-sm font-light transition-all'>
          {label}
        </label>
      )}
    </div>
  );
}
