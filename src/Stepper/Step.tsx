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
    completed: 'bg-controls-highlight-paler fill-controls-highlight-bolder group-hover:outline-controls-highlight-palest group-focus-visible:outline-controls-highlight group-active:outline-controls-highlight-paler',
    error: 'border border-states-error fill-states-error group-hover:outline-states-error-paler group-focus-visible:outline-pink-500 group-active:outline-states-error-paler group-active:border-none group-active:bg-states-error-paler'
  };

  const discSelected: Record<StepState, string> = {
    default: 'border-none text-controls-highlight-bolder bg-controls-highlight-pale outline-controls-highlight-pale',
    completed: 'border-none fill-controls-highlight-bolder bg-controls-highlight-pale outline-controls-highlight-pale',
    error: 'border-none fill-states-error bg-states-error-paler outline-states-error-paler'
  };

  const buttonLayout: Record<StepLabelPosition, string> = {
    below: 'flex-col',
    left: 'flex-row items-center'
  };

  const discContent: Record<StepState, ReactElement> = {
    default: <span>{index}</span>,
    completed: (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 465.822 465.822' width='14' height='14'>
        <g>
          <path d='M5.988,289.981l88.875,88.875c24.992,24.984,65.504,24.984,90.496,0l274.475-274.475c8.185-8.475,7.95-21.98-0.525-30.165   c-8.267-7.985-21.374-7.985-29.641,0L155.194,348.691c-8.331,8.328-21.835,8.328-30.165,0l-88.875-88.875   c-8.475-8.185-21.98-7.95-30.165,0.525C-1.996,268.608-1.996,281.714,5.988,289.981L5.988,289.981z' />
        </g>
      </svg>
    ),
    error: (
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 512 512' width='14' height='14'>
        <g>
          <path d='M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z' />
        </g>
      </svg>
    )
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
