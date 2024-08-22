import React, { InputHTMLAttributes, useState } from 'react';
import { IconButton } from '../IconButton/IconButton.tsx';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
  label?: string;
  state?: 'default' | 'warning' | 'error';
  variant?: 'outline' | 'tonal';
  type?: string;
  description?: string;
  disabled?: boolean;
  icon?: string;
  prefix?: string;
  suffix?: string;
}

export function TextInput(props: TextInputProps) {
  const { name, id, label, variant = 'outline', state = 'default', type = 'text', description, disabled, icon, prefix, suffix, className, ...others } = props;
  const [revealPassword, setRevealPassword] = useState(false);

  const border = {
    default: {
      outline: 'border-controls-border',
      tonal: 'border-default-transparent bg-controls-bg-unselected'
    },
    warning: {
      outline: 'border-states-warning',
      tonal: 'border-states-warning bg-controls-bg-unselected'
    },
    error: {
      outline: 'border-states-error',
      tonal: 'border-states-error bg-controls-bg-unselected'
    }
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

  const isPasswordInput = type === 'password';

  return (
    <div className='text-neutral-detail-bolder has-[:disabled]:text-controls-content-disabled'>
      {label && (
        <label htmlFor={id} className='block py-1 transition-all label-sm-mid'>
          {label}
          {description && <span className='ps-1 paragraph-sm-lighter'>{description}</span>}
        </label>
      )}

      <span className={`relative flex rounded border ${isPasswordInput ? 'py-1.5 pe-1 ps-3' : 'p-3'} text-controls-placeholder-text outline outline-2 outline-offset-2 outline-default-transparent transition has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0 ${hover[state]} ${border[state][variant]} ${focus[state]}`}>
        {prefix && <span className='flex items-center pe-1 paragraph-sm-heavier'>{prefix}</span>}
        {icon && <i className={`fi ${icon} flex items-center pe-2.5 text-neutral-detail-bold`} />}

        <input id={id || name} name={name} type={revealPassword ? 'text' : type} disabled={disabled} {...others} className={`w-full rounded bg-default-transparent text-neutral-body paragraph-sm-lighter placeholder:text-controls-placeholder-text placeholder:text-opacity-60 focus:placeholder:text-default-transparent focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-neutral-layer-1 disabled:text-opacity-60 disabled:placeholder:text-controls-content-disabled disabled:placeholder:text-opacity-60 [&::-ms-reveal]:hidden ${className}`} />
        {suffix && <span className='flex items-center pe-2.5 paragraph-sm-heavier'>{suffix}</span>}
        {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning' />}
        {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-3 text-states-error' />}
        {isPasswordInput && <IconButton name='reveal' variant='standard' size='xsmall' icon={revealPassword ? 'fi-rr-eye-crossed' : 'fi-rr-eye'} aria-label={revealPassword ? 'Hide password' : 'Reveal password'} disabled={disabled} onClick={() => setRevealPassword(!revealPassword)} className='my-px p-1' />}
      </span>
    </div>
  );
}
