import React, { InputHTMLAttributes } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
  label?: string;
  state?: 'default' | 'warning' | 'error';
  type?: string;
  description?: string;
  icon?: string;
  prefix?: string;
  suffix?: string;
}

export function TextInput(props: TextInputProps) {
  const { name, id, label, state = 'default', type = 'text', description, icon, prefix, suffix, ...others } = props;

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
    <div className='text-neutral-detail-bolder has-[:disabled]:text-controls-content-disabled'>
      {label && (
        <label htmlFor={id} className='block py-1 transition-all label-sm-mid'>
          {label}
          {description && <span className='ps-1 paragraph-sm-lighter'>{description}</span>}
        </label>
      )}

      <span
        className={`relative flex rounded border p-3 text-controls-placeholder-text outline
        outline-2 outline-offset-2 outline-default-transparent transition
        has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0
        ${hover[state]} ${border[state]} ${focus[state]}`}
      >
        {prefix && <span className='flex items-center pe-1 paragraph-sm-heavier'>{prefix}</span>}
        {icon && <i className={`fi ${icon} flex items-center pe-2.5 text-neutral-detail-bold`} />}

        <input
          id={id || name}
          name={name}
          type={type}
          {...others}
          className={`w-full rounded bg-default-transparent text-neutral-body paragraph-sm-lighter placeholder:text-controls-placeholder-text
               placeholder:text-opacity-60 focus:placeholder:text-default-transparent focus-visible:outline-0 
               disabled:cursor-not-allowed disabled:bg-neutral-layer-1 disabled:text-opacity-60 disabled:placeholder:text-controls-content-disabled disabled:placeholder:text-opacity-60`}
        />
        {suffix && <span className='flex items-center pe-2.5 paragraph-sm-heavier'>{suffix}</span>}
        {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning' />}
        {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-3 text-states-error' />}
      </span>
    </div>
  );
}
