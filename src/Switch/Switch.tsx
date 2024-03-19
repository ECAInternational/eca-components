import React, { InputHTMLAttributes } from 'react';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
  label?: string;
  alignment?: 'left' | 'right' | 'top';
  checked?: boolean;

  disabled?: boolean;
}

export function Switch(props: SwitchProps) {
  const { name, id, label, alignment = 'left', checked, disabled = false, ...others } = props;

  return (
    <div className={`flex ${alignment === 'top' && 'flex-col'} items-center text-neutral-detail-bolder has-[:disabled]:text-controls-content-disabled`}>
      {label && alignment === 'top' && (
        <label htmlFor={id} className='pb-1 text-sm font-light transition'>
          {label}
        </label>
      )}

      {label && alignment === 'left' && (
        <label htmlFor={id} className='pe-2 text-sm font-light transition'>
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
          className='outline-offset-default-transparent before:content[""] peer grid h-7 w-12 cursor-pointer appearance-none place-content-center rounded-full border border-neutral-detail
          bg-controls-highlight-palest p-px outline outline-2 outline-offset-2 outline-default-transparent

          transition before:size-5 before:-translate-x-1/2 before:rounded-full before:bg-neutral-detail before:transition

          checked:border-controls-highlight checked:before:translate-x-1/2 checked:before:bg-controls-highlight hover:outline-neutral-detail-paler
          checked:hover:outline-controls-highlight-paler focus-visible:outline-controls-border

          checked:focus-visible:outline-controls-highlight active:border-neutral-detail-bold active:outline-4 active:outline-offset-0
          active:outline-neutral-detail-palest

          active:before:bg-neutral-detail-bold
          checked:active:border-controls-highlight-bold

          checked:active:bg-controls-highlight-palest
          checked:active:outline-controls-highlight-palest checked:active:before:bg-controls-highlight-bold disabled:cursor-not-allowed
          disabled:border-neutral-detail-paler disabled:bg-neutral-detail-palest
          disabled:before:bg-neutral-detail-pale
          disabled:before:opacity-60
          checked:disabled:border-controls-highlight-pale checked:disabled:bg-controls-bg-disabled checked:disabled:before:bg-controls-highlight-pale
          disabled:hover:outline-0'
        />
      </div>
      {label && alignment === 'right' && (
        <label htmlFor={id} className='ps-2 text-sm font-light'>
          {label}
        </label>
      )}
    </div>
  );
}
