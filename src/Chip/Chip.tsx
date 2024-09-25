import React, { ButtonHTMLAttributes } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size: 'xsmall' | 'small' | 'medium';
  variant?: 'vis-1' | 'vis-2' | 'vis-3' | 'vis-4' | 'vis-5' | 'vis-6' | 'vis-7' | 'monochrome' | 'neutral';
  onDelete?: () => void;
}

export function Chip(props: ChipProps) {
  const { className, label, size = 'medium', variant = 'neutral', onDelete, ...others } = props;

  const chip = {
    'vis-1': 'text-visualisation-1-text-1 bg-visualisation-1-main',
    'vis-2': 'text-visualisation-2-text-1 bg-visualisation-2-main',
    'vis-3': 'text-visualisation-3-text-1 bg-visualisation-3-main',
    'vis-4': 'text-visualisation-4-text-1 bg-visualisation-4-main',
    'vis-5': 'text-visualisation-5-text-1 bg-visualisation-5-main',
    'vis-6': 'text-visualisation-6-text-1 bg-visualisation-6-main',
    'vis-7': 'text-visualisation-7-text-1 bg-visualisation-7-main',
    monochrome: 'text-neutral-layer-1 bg-neutral-detail-bold',
    neutral: 'border border-controls-lines-pale text-neutral-detail-bolder bg-neutral-layer-2'
  };

  const close = {
    'vis-1': 'text-neutral-800 bg-default-white',
    'vis-2': 'text-neutral-800 bg-default-white',
    'vis-3': 'text-neutral-800 bg-default-white',
    'vis-4': 'text-neutral-800 bg-default-white',
    'vis-5': 'text-neutral-800 bg-default-white',
    'vis-6': 'text-neutral-800 bg-default-white',
    'vis-7': 'text-neutral-800 bg-default-white',
    monochrome: 'text-neutral-detail-palest bg-neutral-body',
    neutral: 'text-neutral-detail-boldest bg-neutral-detail-paler'
  };

  const sizes = {
    xsmall: 'px-1 py-0.5',
    small: 'px-1.5 py-1',
    medium: onDelete ? 'ps-2.5 pe-1.5 py-1.5' : 'px-2.5 py-1.5'
  };

  return (
    <span className={`inline-flex items-center gap-2 rounded ${sizes[size]} leading-[1.125rem] label-sm-mid ${chip[variant]} ${className}`} {...others}>
      <span>{label}</span>
      {onDelete && (
        <button onClick={onDelete} aria-label={`Delete ${label}`} className={`flex items-center justify-center rounded-sm ${close[variant]} opacity-50 hover:opacity-70 focus-visible:outline focus-visible:outline-neutral-detail-boldest active:opacity-60`}>
          <i className='fi fi-rr-cross-small size-3.5' />
        </button>
      )}
    </span>
  );
}
