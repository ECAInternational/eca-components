import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

export type StepState = 'default' | 'completed' | 'error';
export type StepLabelPosition = 'left' | 'below';

export interface StepProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  index?: number;
  labelPosition?: StepLabelPosition;
  selected?: boolean;
  state?: StepState;
}

export function Step(props: PropsWithChildren<StepProps>) {
  const { children, disabled, index, labelPosition = 'below', selected, state = 'default', ...others } = props;

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

  const buttonLayout: Record<StepLabelPosition, string> = {
    below: 'flex-col',
    left: 'flex-row items-center'
  };

  const discContent: Record<StepState, ReactElement> = {
    default: <span>{index}</span>,
    completed: <i className='fi-sr-check flex' />,
    error: <i className='fi-sr-exclamation flex' />
  };

  const label: Record<StepLabelPosition, string> = {
    left: 'pr-4',
    below: 'pt-2 w-7.5 justify-center'
  };

  const labelElement = children && <span className={`flex text-nowrap label-sm-lighter ${label[labelPosition]}`}>{children}</span>;

  return (
    <button
      className={`group flex cursor-pointer ${buttonLayout[labelPosition]} outline-0 ${(selected ? textSelected : text)[state]}
      disabled:cursor-not-allowed disabled:text-neutral-detail`}
      disabled={disabled}
      {...others}
    >
      {labelPosition === 'left' && labelElement}
      <span
        className={`m-1 flex size-5.5 items-center justify-center rounded-full ${(selected ? discSelected : disc)[state]} 
        outline outline-2 outline-offset-2 label-sm-mid ${!selected && 'outline-default-transparent'}
        group-disabled:border-none group-disabled:bg-neutral-detail-palest group-disabled:text-neutral-detail-pale group-disabled:outline-none
       `}
      >
        {discContent[state]}
      </span>
      {labelPosition === 'below' && labelElement}
    </button>
  );
}
