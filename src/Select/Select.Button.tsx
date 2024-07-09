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
  ...props
}: PropsWithChildren<SelectButtonProps> & {
  state: 'default' | 'error' | 'warning';
}) {
  const { open } = useSelectContext();

  const border = {
    default: 'border-controls-border',
    warning: 'border-states-warning',
    error: 'border-states-error'
  };

  const padding = {
    default: 'p-1.5 ps-3',
    warning: 'px-3 py-1.5',
    error: 'px-3 py-1.5'
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
    <Listbox.Button className={`relative flex w-full items-center rounded border text-neutral-body outline outline-2 outline-offset-2 outline-default-transparent transition paragraph-sm-mid disabled:cursor-not-allowed disabled:border-neutral-detail-paler disabled:bg-neutral-layer-1 disabled:text-controls-content-disabled disabled:outline-0 ${hover[state]} ${border[state]} ${padding[state]} ${focus[state]} ${className}`} {...props} onClick={onClick}>
      <span className='font-light flex w-full items-center justify-start text-left'>{children}</span>
      <IconButton name='open' variant='standard' size='xsmall' icon={`${open ? 'fi-sr-angle-small-up' : 'fi-sr-angle-small-down'}`} className='rounded-full p-1' />
      {state === 'warning' && <i className='fi fi-rr-triangle-warning flex items-center ps-1 text-states-warning' />}
      {state === 'error' && <i className='fi fi-rr-exclamation flex items-center ps-1 text-states-error' />}
    </Listbox.Button>
  );
}
