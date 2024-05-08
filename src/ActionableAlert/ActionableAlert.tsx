import React, { ButtonHTMLAttributes } from 'react';
import { Button } from '../Button/Button.tsx';

export interface ActionableAlertProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'yellow' | 'green' | 'blue' | 'red';
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function ActionableAlert(props: ActionableAlertProps) {
  const { label, variant = 'blue', primaryButtonText, secondaryButtonText, onPrimaryClick, onSecondaryClick, ...others } = props;

  const alert = {
    yellow: 'border-visualisation-2-accent text-visualisation-2-boldest bg-visualisation-2-palest',
    green: 'border-visualisation-3-accent text-visualisation-3-boldest bg-visualisation-3-palest',
    blue: 'border-visualisation-4-accent text-visualisation-4-boldest bg-visualisation-4-palest',
    red: 'border-visualisation-7-accent text-visualisation-7-boldest bg-visualisation-7-palest'
  };

  const icon = {
    yellow: 'fi-rr-triangle-warning',
    green: 'fi-rr-check',
    blue: 'fi-rr-info',
    red: 'fi-rr-exclamation'
  };

  return (
    <span className={`inline-flex w-full rounded shadow-lg`} {...others}>
      {icon[variant] && (
        <span className={`inline-flex items-center rounded-l px-4 py-4 ${alert[variant]}`} {...others}>
          <i className={`fi ${icon[variant]} flex items-center justify-center`} />
        </span>
      )}
      <span className={`inline-flex w-full items-center gap-2 rounded px-4 py-4 leading-[1.125rem] label-sm-mid`} {...others}>
        <span className='w-full'>{label}</span>
        {onPrimaryClick && (
          <Button onClick={onPrimaryClick} name='ghost' size='small' variant='ghost'>
            {primaryButtonText}
          </Button>
        )}
        {onSecondaryClick && (
          <Button onClick={onSecondaryClick} name='outline' size='small' variant='outline'>
            {secondaryButtonText}
          </Button>
        )}
      </span>
    </span>
  );
}
