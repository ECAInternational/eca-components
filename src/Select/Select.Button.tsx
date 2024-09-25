import { Listbox } from '@headlessui/react';
import React, { ComponentPropsWithRef, PropsWithChildren } from 'react';
import { useSelectContext } from './Select.tsx';
import { IconButton } from '../IconButton/IconButton.tsx';

export interface SelectButtonProps extends Omit<ComponentPropsWithRef<typeof Listbox.Button>, 'children'> {}

export function SelectButton({
  className,
  state,
  onClick,
  children,
  variant = 'outline',
  size = 'medium',
  ...props
}: PropsWithChildren<SelectButtonProps> & {
  state: 'default' | 'error' | 'warning';
  variant?: 'outline' | 'tonal';
  size?: 'small' | 'medium';
}) {
  const { open } = useSelectContext();

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

  const padding = {
    default: {
      medium: 'pt-1.5 pb-1.5 ps-3',
      small: 'pt-0.5 pb-0.5 ps-3'
    },
    warning: {
      medium: 'px-3 py-1.5',
      small: 'px-3 py-0.5'
    },
    error: {
      medium: 'px-3 py-1.5',
      small: 'px-3 py-0.5'
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
    <Listbox.Button className={`relative flex w-full items-center rounded-md border text-neutral-body outline outline-2 outline-offset-2 outline-default-transparent transition paragraph-sm-mid disabled:cursor-not-allowed disabled:border-neutral-detail-paler disabled:bg-neutral-layer-1 disabled:text-controls-content-disabled disabled:outline-0 ${hover[state]} ${border[state][variant]} ${padding[state][size]} ${focus[state]} ${className}`} {...props} onClick={onClick}>
      <span className='flex w-full items-center justify-start text-left paragraph-sm-lighter'>{children}</span>
      <IconButton name='open' variant='standard' size='xsmall' icon={`${open ? 'fi-sr-angle-small-up' : 'fi-sr-angle-small-down'}`} className='rounded-full p-1' />
      {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-1 text-states-warning' />}
      {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-1 text-states-error' />}
    </Listbox.Button>
  );
}
