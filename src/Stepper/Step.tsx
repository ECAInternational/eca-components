import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

type StepState = 'default' | 'completed' | 'error';

export interface StepProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  index?: number;
  selected?: boolean;
  state?: StepState;
}

export function Step(props: PropsWithChildren<StepProps>) {
  const { children, disabled, index, selected, state = 'default' } = props;

  const text: Record<StepState, string> = {
    default: 'text-neutral-detail-bold hover:text-neutral-detail-bolder focus-visible:text-neutral-detail-boldest active:text-neutral-detail-boldest',
    completed: 'text-neutral-detail-bold',
    error: 'text-states-error-bold active:text-states-error-boldest'
  };

  const textSelected: Record<StepState, string> = {
    default: 'text-neutral-body',
    completed: 'text-neutral-body',
    error: 'text-states-error-boldest'
  };

  const disc: Record<StepState, string> = {
    default: 'border border-controls-border text-neutral-detail-bold group-hover:outline-neutral-detail-palest group-focus-visible:outline-controls-border group-active:outline-neutral-detail-paler',
    completed: 'bg-controls-highlight-paler text-controls-highlight-bolder group-hover:outline-controls-highlight-palest group-focus-visible:outline-controls-highlight group-active:outline-controls-highlight-paler',
    error: 'border border-states-error text-states-error group-hover:outline-states-error-paler group-focus-visible:outline-pink-500 group-active:outline-states-error-paler group-active:border-none group-active:bg-states-error-paler'
  };

  const discSelected: Record<StepState, string> = {
    default: 'border-none text-controls-highlight-bolder bg-controls-highlight-pale outline-controls-highlight-pale',
    completed: 'border-none text-controls-highlight-bolder bg-controls-highlight-pale outline-controls-highlight-pale',
    error: 'border-none text-states-error bg-states-error-paler outline-states-error-paler'
  };

  const discContent: Record<StepState, ReactElement> = {
    default: <span>{index}</span>,
    completed: <i className='fi-sr-check flex'></i>,
    error: <i className='fi-sr-exclamation flex'></i>
  };

  return (
    <button
      className={`group flex cursor-pointer flex-col items-center text-sm outline-0 ${(selected ? textSelected : text)[state]}
      disabled:cursor-not-allowed disabled:text-neutral-detail`}
      disabled={disabled}
    >
      <span
        className={`m-1 flex size-5.5 items-center justify-center rounded-full ${(selected ? discSelected : disc)[state]} font-medium
        outline outline-2 outline-offset-2 outline-default-transparent
        group-disabled:border-none group-disabled:bg-neutral-detail-palest group-disabled:text-neutral-detail-pale group-disabled:outline-none
       `}
      >
        {discContent[state]}
      </span>
      {children && <span className='mt-2'>{children}</span>}
    </button>
  );
}
