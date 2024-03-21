import React, { ReactElement } from 'react';

type StepState = 'default' | 'completed' | 'error';

export interface StepProps {
  index: number;
  label?: string;
  state: StepState;
}

export function Step(props: StepProps) {
  const { index, label, state = 'default' } = props;

  const disc: Record<StepState, string> = {
    default: 'border border-controls-border text-neutral/detail-bold',
    completed: 'bg-controls-highlight-paler text-controls-highlight-bolder',
    error: 'border border-states-error text-states-error'
  };

  const discContent: Record<StepState, ReactElement> = {
    default: <span>{index}</span>,
    completed: <i className='fi-sr-check flex'></i>,
    error: <i className='fi-sr-exclamation flex'></i>
  };

  return (
    <span className='flex items-center text-sm '>
      {label && <span className='pr-4'>{label}</span>}
      <button
        className={`size-5.5 m-1 rounded-full flex items-center justify-center ${disc[state]}
        outline-offset hover:outline`}
      >
        {discContent[state]}
      </button>
    </span>
  );
}
