import React, { ButtonHTMLAttributes } from 'react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  id?: string;
  variant: 'standard' | 'filled' | 'tonal' | 'outline';
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  selected?: boolean;
  icon: string;
}

export function IconButton(props: IconButtonProps) {
  const { name, id, variant, selected, size = 'medium', icon, ...others } = props;

  const bg = {
    standard: 'bg-default-transparent text-neutral-detail-bold',
    filled: 'bg-primary-main text-default-white',
    tonal: 'bg-controls-highlight-palest text-neutral-detail-bold',
    outline: 'border text-neutral-detail-bold border-neutral-detail-bold'
  };

  const bgSelected = {
    standard: 'bg-controls-highlight-palest text-controls-highlight',
    filled: 'bg-primary-paler text-primary-bold',
    tonal: 'bg-controls-highlight-palest text-neutral-detail-bold',
    outline: 'border bg-controls-highlight-palest border-controls-highlight text-controls-highlight'
  };

  const hover = {
    standard: 'hover:bg-controls-highlight-palest',
    filled: 'hover:bg-primary-pale',
    tonal: 'hover:bg-controls-highlight-paler hover:text-neutral-detail-bolder',
    outline: 'hover:shadow-inner-button hover:shadow-controls-highlight-pale'
  };

  const hoverSelected = {
    standard: 'hover:bg-controls-highlight-paler hover:text-controls-highlight',
    filled: 'hover:bg-primary-pale hover:text-primary-bolder',
    tonal: 'hover:bg-controls-highlight-pale hover:text-controls-highlight-bold',
    outline: 'hover:bg-controls-highlight-paler hover:text-controls-highlight-bold hover:border-controls-highlight-bold'
  };

  const focus = {
    standard: 'focus-visible:outline focus-visible:outline-neutral-detail-bold focus-visible:bg-controls-highlight-palest',
    filled: 'focus-visible:outline focus-visible:outline-primary-main focus-visible:bg-primary-main',
    tonal: 'focus-visible:outline focus-visible:outline-controls-highlight-paler focus-visible:bg-controls-highlight-paler focus-visible:text-neutral-detail-bolder',
    outline: 'focus-visible:outline focus-visible:outline-neutral-detail-bold focus-visible:[box-shadow:none]'
  };

  const focusSelected = {
    standard: 'focus-visible:outline focus-visible:outline-controls-highlight focus-visible:bg-controls-highlight-palest',
    filled: 'focus-visible:outline focus-visible:outline-primary-paler focus-visible:bg-primary-paler focus-visible:text-primary-bolder',
    tonal: 'focus-visible:outline focus-visible:outline-controls-highlight-paler focus-visible:bg-controls-highlight-paler focus-visible:text-neutral-detail-bold',
    outline: 'focus-visible:outline focus-visible:outline-controls-highlight focus-visible:bg-controls-highlight-palest focus-visible:text-controls-highlight'
  };

  const active = {
    standard: 'active:bg-controls-highlight-paler active:text-neutral-detail-bolder',
    filled: 'active:bg-primary-accent',
    tonal: 'active:bg-controls-highlight-pale active:text-neutral-detail-bolder',
    outline: 'active:shadow-inner-button active:shadow-controls-highlight-pale'
  };

  const activeSelected = {
    standard: 'active:bg-controls-highlight-pale active:text-controls-highlight-bold',
    filled: 'active:bg-primary-accent active:text-default-white',
    tonal: 'active:bg-controls-highlight-paler active:text-controls-highlight-bold',
    outline: 'active:bg-controls-highlight-pale active:text-controls-highlight-bold active:border-highlight-bold'
  };

  const disabled = {
    standard: 'disabled:bg-neutral-layer-1 disabled:text-neutral-detail-paler',
    filled: 'disabled:bg-controls-bg-disabled disabled:text-controls-content-disabled',
    tonal: 'disabled:bg-controls-bg-disabled disabled:text-controls-content-disabled',
    outline: 'disabled:border-neutral-detail-paler disabled:text-neutral-detail-paler disabled:[box-shadow:none]'
  };

  const margin = { xsmall: 'm-1', small: 'm-2.5', medium: 'm-3', large: 'm-3.5' };
  const outlineMarin = { xsmall: 'm-0.5', small: 'm-2', medium: 'm-2.5', large: 'm-3' };
  const textSize = { xsmall: 'text-sm', small: 'text-lg', medium: 'text-xl', large: 'text-2xl' };

  return (
    <button
      id={id || name}
      name={name}
      className={`transition flex items-center justify-center font-medium outline-2 outline-offset-2 outline-default-transparent
      ${size === 'large' ? 'rounded-md' : 'rounded'}
      ${variant === 'outline' ? 'p-px' : 'p-0'}
      ${(selected ? bgSelected : bg)[variant]}
      ${(selected ? hoverSelected : hover)[variant]}
      ${(selected ? focusSelected : focus)[variant]}
      ${(selected ? activeSelected : active)[variant]}
      active:scale-92
      ${disabled[variant]}
      disabled:cursor-not-allowed`}
      {...others}
    >
      <i className={`fi ${icon} ${textSize[size]} ${(variant === 'outline' ? outlineMarin : margin)[size]} flex items-center justify-center`} />
    </button>
  );
}
