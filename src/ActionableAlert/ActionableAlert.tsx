import React, { ButtonHTMLAttributes, Children } from 'react';

export interface ActionableAlertProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  status?: 'info' | 'warning' | 'error' | 'success';
}

export function ActionableAlert({ children, status = 'info' }: ActionableAlertProps) {
  const childrenArray = Children.toArray(children);

  const label = childrenArray[0];
  const primaryButton = childrenArray[1];
  const secondaryButton = childrenArray[2];

  const alert = {
    warning: 'border-visualisation-2-accent text-visualisation-2-boldest bg-visualisation-2-palest',
    success: 'border-visualisation-3-accent text-visualisation-3-boldest bg-visualisation-3-palest',
    info: 'border-visualisation-4-accent text-visualisation-4-boldest bg-visualisation-4-palest',
    error: 'border-visualisation-7-accent text-visualisation-7-boldest bg-visualisation-7-palest'
  };

  const icon = {
    info: 'fi-rr-info',
    warning: 'fi-rr-triangle-warning',
    error: 'fi-rr-exclamation',
    success: 'fi-rr-check'
  };

  return (
    <div role='alert' className={`inline-flex w-full rounded shadow-lg`}>
      <span className={`inline-flex items-center rounded-l p-4 ${alert[status]}`}>
        <i className={`fi ${icon[status]} flex items-center justify-center`} />
      </span>
      <span className={`inline-flex w-full items-center gap-2 rounded py-3 pl-4 pr-3 leading-[1.125rem] label-sm-mid`}>
        <span className='w-full'>{label}</span>
        {secondaryButton}
        {primaryButton}
      </span>
    </div>
  );
}
