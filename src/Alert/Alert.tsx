import React, { HTMLAttributes } from 'react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  variant?: 'warning' | 'success' | 'info' | 'error' | 'monochrome' | 'neutral';
  onDelete?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export function Alert({ label, variant = 'neutral', onDelete, fullWidth = true, className = '', ...rest }: AlertProps) {
  const alert = {
    warning: 'border-states-warning text-neutral-body bg-states-warning-pale',
    success: 'border-states-success text-neutral-body bg-states-success-pale',
    info: 'border-states-info text-neutral-body bg-states-info-pale',
    error: 'border-states-error text-neutral-body bg-states-error-paler',
    monochrome: 'text-neutral-layer-1 bg-neutral-body shadow-lg',
    neutral: 'border-neutral-detail-palest text-neutral-body bg-neutral-layer-2 shadow-lg'
  };

  const close = {
    warning: 'text-neutral-800 bg-default-white',
    success: 'text-neutral-800 bg-default-white',
    info: 'text-neutral-800 bg-default-white',
    error: 'text-neutral-800 bg-default-white',
    monochrome: 'text-neutral-detail-bolder bg-neutral-detail-paler',
    neutral: 'text-neutral-detail-palest bg-neutral-body'
  };

  const icon = {
    warning: 'fi-rr-triangle-warning text-states-warning-bold',
    success: 'fi-rr-check text-states-success-bold',
    info: 'fi-rr-info text-states-info-bold',
    error: 'fi-rr-exclamation text-states-error-bold',
    monochrome: '',
    neutral: ''
  };

  const wideClassName = fullWidth ? 'w-full' : '';

  return (
    <div role='alert' className={`inline-flex ${wideClassName} items-center gap-2 rounded border px-3 py-2 leading-[1.125rem] paragraph-sm-mid ${alert[variant]} ${className}`} {...rest}>
      {icon[variant] && <i className={`fi ${icon[variant]} flex items-center justify-center`} />}
      <span className='w-full'>{label}</span>
      {onDelete && (
        <button onClick={onDelete} aria-label={`Delete ${label}`} className={`flex items-center justify-center rounded-sm ${close[variant]} opacity-50 hover:opacity-70 focus-visible:outline focus-visible:outline-neutral-detail-boldest active:opacity-60`}>
          <i className='fi fi-rr-cross-small size-3.5' />
        </button>
      )}
    </div>
  );
}
