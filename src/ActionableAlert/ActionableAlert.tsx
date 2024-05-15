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
    warning: 'bg-states-warning-paler',
    success: 'bg-states-success-paler',
    info: 'bg-states-info-paler',
    error: 'bg-states-error-paler'
  };

  const icon = {
    warning: 'fi-rr-triangle-warning text-states-warning-boldest',
    success: 'fi-rr-check text-states-success-boldest',
    info: 'fi-rr-info text-states-info-boldest',
    error: 'fi-rr-exclamation text-states-error-boldest'
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
