import React, { HTMLAttributes } from 'react';

export interface ActionableAlertProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  status?: 'info' | 'warning' | 'error' | 'success';
}

export function ActionableAlert({ children, className, status = 'info', ...props }: ActionableAlertProps) {
  const alert = {
    warning: 'bg-states-warning',
    success: 'bg-states-success',
    info: 'bg-states-info',
    error: 'bg-states-error'
  };

  const icon = {
    warning: 'fi-rr-triangle-warning text-neutral-900',
    success: 'fi-rr-check text-neutral-900',
    info: 'fi-rr-info text-neutral-900',
    error: 'fi-rr-exclamation text-neutral-50'
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
