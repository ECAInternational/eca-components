import React, { ReactElement } from 'react';

type StepState = 'default' | 'completed' | 'error';

export interface StepProps {
  index: number;
  label?: string;
  state: StepState;
}

export function Step(props: StepProps) {
  const { index, label, state = 'default' } = props;

  const text: Record<StepState, string> = {
    default: 'text-neutral-detail-bold hover:text-neutral-detail-bolder focus-visible:text-neutral-detail-boldest active:text-neutral-detail-boldest',
    completed: 'text-neutral-detail-bold',
    error: 'text-states-error-bold active:text-states-error-boldest'
  };

  const disc: Record<StepState, string> = {
    default: 'border border-controls-border text-neutral-detail-bold group-hover:outline-neutral-detail-palest group-focus-visible:outline-controls-border group-active:outline-neutral-detail-paler',
    completed: 'bg-controls-highlight-paler text-controls-highlight-bolder group-hover:outline-controls-highlight-palest group-focus-visible:outline-controls-highlight group-active:outline-controls-highlight-paler',
    error: 'border border-states-error text-states-error group-hover:outline-states-error-paler group-focus-visible:outline-pink-500 group-active:outline-states-error-paler group-active:border-none group-active:bg-states-error-paler'
  };

  const discContent: Record<StepState, ReactElement> = {
    default: <span>{index}</span>,
    completed: <i className='fi-sr-check flex'></i>,
    error: <i className='fi-sr-exclamation flex'></i>
  };

  return (
    <button className={`group flex items-center cursor-pointer outline-0 text-sm ${text[state]}`}>
      {label && <span className='pr-4'>{label}</span>}
      <span
        className={`size-5.5 m-1 rounded-full flex items-center justify-center ${disc[state]} font-medium
        outline outline-2 outline-offset-2 outline-default-transparent`}
      >
        {discContent[state]}
      </span>
    </button>
  );
}
