import React, { HTMLAttributes } from 'react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  variant?: 'warning' | 'success' | 'info' | 'error' | 'monochrome' | 'neutral';
  onDelete?: () => void;
  className?: string;
}

export function Alert({ label, variant = 'neutral', onDelete, className = '', ...rest }: AlertProps) {
  const alert = {
    warning: 'border-states-warning text-neutral-body bg-states-warning-paler',
    success: 'border-states-success text-neutral-body bg-states-success-palest',
    info: 'border-states-info text-neutral-body bg-states-info-paler',
    error: 'border-states-error text-neutral-body bg-states-error-palest',
    monochrome: 'text-neutral-layer-1 bg-neutral-body shadow-lg',
    neutral: 'border-neutral-detail-palest text-neutral-body bg-neutral-layer-2 shadow-lg'
  };

  const close = {
    warning: 'text-visualisation-2-paler bg-visualisation-2-bolder',
    success: 'text-visualisation-3-paler bg-visualisation-3-bolder',
    info: 'text-visualisation-4-paler bg-visualisation-4-bolder',
    error: 'text-visualisation-7-paler bg-visualisation-7-bolder',
    monochrome: 'text-neutral-detail-bolder bg-neutral-detail-paler',
    neutral: 'text-neutral-detail-palest bg-neutral-body'
  };

  const icon = {
    warning: 'fi-rr-triangle-warning text-states-warning-boldest',
    success: 'fi-rr-check text-states-success-boldest',
    info: 'fi-rr-info text-states-info-boldest',
    error: 'fi-rr-exclamation text-states-error-boldest',
    monochrome: '',
    neutral: ''
  };

  return (
    <div role='alert' className={`inline-flex w-full items-center gap-2 rounded border px-3 py-2 leading-[1.125rem] paragraph-sm-mid ${alert[variant]} ${className}`} {...rest}>
      {icon[variant] && <i className={`fi ${icon[variant]} flex items-center justify-center`} />}
      <span className='w-full'>{label}</span>
      {onDelete && (
        <button
          onClick={onDelete}
          aria-label={`Delete ${label}`}
          className={`flex items-center justify-center rounded-sm ${close[variant]}
          opacity-50 hover:opacity-70 focus-visible:outline
          focus-visible:outline-neutral-detail-boldest active:opacity-60`}
        >
          <i className='fi fi-rr-cross-small size-3.5' />
        </button>
      )}
    </div>
  );
}
