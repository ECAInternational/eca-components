import React, { ButtonHTMLAttributes } from 'react';

export interface AlertProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'yellow' | 'green' | 'blue' | 'red' | 'monochrome' | 'neutral';
  onDelete?: () => void;
}

export function Alert(props: AlertProps) {
  const { label, variant = 'neutral', onDelete, ...others } = props;

  const alert = {
    yellow: 'border-visualisation-2-accent text-visualisation-2-boldest bg-visualisation-2-palest',
    green: 'border-visualisation-3-accent text-visualisation-3-boldest bg-visualisation-3-palest',
    blue: 'border-visualisation-4-accent text-visualisation-4-boldest bg-visualisation-4-palest',
    red: 'border-visualisation-7-accent text-visualisation-7-boldest bg-visualisation-7-palest',
    monochrome: 'border-neutral-detail-boldest text-neutral-layer-1 bg-neutral-detail-bold',
    neutral: 'border-neutral-detail-pale text-neutral-detail-bolder bg-neutral-layer-2'
  };

  const close = {
    yellow: 'text-visualisation-2-paler bg-visualisation-2-bolder',
    green: 'text-visualisation-3-paler bg-visualisation-3-bolder',
    blue: 'text-visualisation-4-paler bg-visualisation-4-bolder',
    red: 'text-visualisation-7-paler bg-visualisation-7-bolder',
    monochrome: 'text-neutral-detail-palest bg-neutral-body',
    neutral: 'text-neutral-detail-boldest bg-neutral-detail-paler'
  };

  const icon = {
    yellow: 'fi-rr-triangle-warning',
    green: 'fi-rr-check',
    blue: 'fi-rr-info',
    red: 'fi-rr-exclamation',
    monochrome: '',
    neutral: ''
  };

  return (
    <span className={`inline-flex w-full items-center gap-2 rounded border px-2.5 py-1.5 leading-[1.125rem] label-sm-mid ${alert[variant]}`} {...others}>
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
    </span>
  );
}
