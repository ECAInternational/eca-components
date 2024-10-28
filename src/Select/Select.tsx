import React, { ComponentProps } from 'react';
import { Select as HeadlessSelect } from '@headlessui/react';

export interface SelectProps extends Omit<ComponentProps<typeof HeadlessSelect>, 'children'> {
  children: React.ReactNode;
  name: string;
  value: string;
  state?: 'default' | 'error' | 'warning';
  variant?: 'outline' | 'tonal';
  size?: 'small' | 'medium';
}

export function Select({ name, value, children, onChange, className, state = 'default', variant = 'outline', size = 'medium' }: SelectProps) {
  const border = {
    default: {
      outline: 'border-controls-border bg-default-transparent',
      tonal: 'border-default-transparent bg-controls-bg-unselected'
    },
    warning: {
      outline: 'border-states-warning bg-default-transparent',
      tonal: 'border-states-warning bg-controls-bg-unselected'
    },
    error: {
      outline: 'border-states-error bg-default-transparent',
      tonal: 'border-states-error bg-controls-bg-unselected'
    }
  };

  const padding = {
    default: {
      medium: 'px-2 py-1.5',
      small: 'px-2 py-1.5'
    },
    warning: {
      medium: 'px-2 py-1.5',
      small: 'px-2 py-1.5'
    },
    error: {
      medium: 'px-2 py-1.5',
      small: 'px-2 py-1.5'
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

  return (
    <div className='relative'>
      <HeadlessSelect name={name} value={value} onChange={onChange} className={`flex w-full appearance-none items-center rounded-md border text-neutral-body outline outline-2 outline-offset-2 outline-default-transparent transition paragraph-sm-mid disabled:cursor-not-allowed disabled:border-neutral-detail-paler disabled:bg-neutral-layer-1 disabled:text-controls-content-disabled disabled:outline-0 ${hover[state]} ${border[state][variant]} ${padding[state][size]} ${focus[state]} ${className}`}>
        {children}
      </HeadlessSelect>
      <div className='pointer-events-none absolute right-0 top-0 flex h-full items-center'>
        {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center text-states-warning' />}
        {state === 'error' && <i className='fi fi-rr-exclamation flex items-center text-states-error' />}
        <i className='fi fi-sr-angle-small-down flex items-center px-1.5' />
      </div>
    </div>
  );
}
