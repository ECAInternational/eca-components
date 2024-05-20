import React, { HTMLAttributes } from 'react';

export interface ActionableAlertProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  status?: 'info' | 'warning' | 'error' | 'success';
}

export function ActionableAlert({ children, className, status = 'info', ...props }: ActionableAlertProps) {
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
    <div role='alert' className={`inline-flex w-full rounded shadow-lg ${className}`} {...props}>
      <div className={`inline-flex items-center rounded-l p-4 ${alert[status]}`}>
        <i className={`fi ${icon[status]} flex items-center justify-center`} />
      </div>
      {children}
    </div>
  );
}
