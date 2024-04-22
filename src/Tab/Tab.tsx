import React, { ButtonHTMLAttributes } from 'react';

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  id?: string;
  size?: 'medium' | 'large';
  label: string;
  selected?: boolean;
}

export function Tab(props: TabProps) {
  const { id, name, size = 'medium', label, selected = false, ...others } = props;

  const sizes = {
    medium: 'label-sm-lighter py-2 px-3',
    large: 'label-md-lighter py-2.5 px-3.5'
  };

  return (
    <button
      id={id || name}
      name={name}
      className={`disabled:default-transparent group
      flex items-center justify-center
      rounded-lg
      p-1
      text-neutral-body outline-none
      transition disabled:cursor-not-allowed
      ${selected ? 'bg-controls-highlight-paler disabled:bg-controls-highlight-palest disabled:opacity-60' : 'bg-default-transparent hover:bg-controls-highlight-pale active:bg-controls-highlight-palest disabled:bg-default-transparent disabled:text-controls-content-disabled disabled:opacity-90'}
      `}
      type='button'
      role='tab'
      aria-selected={selected}
      {...others}
    >
      <div
        className={`
      leading-5 rounded-md px-3 py-2
      outline outline-2 outline-default-transparent
      group-focus-visible:outline-offset-[-2px]
      ${selected ? 'group-focus-visible:outline-neutral-layer-2' : 'group-focus-visible:outline-neutral-detail-boldest'}
      ${sizes[size]}
      `}
      >
        {label}
      </div>
    </button>
  );
}
