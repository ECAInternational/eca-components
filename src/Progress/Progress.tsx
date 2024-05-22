import React from 'react';

export interface ProgressProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  value?: number;
}

export function Progress(props: ProgressProps) {
  const { variant = 'primary', className = '', value, ...others } = props;
  const bg = {
    primary: 'bg-red-200',
    secondary: 'bg-controls-highlight'
  };

  const hasValue = value !== undefined;
  const indeterminate = hasValue ? null : `animate-progress w-0 absolute`;

  return (
    <div className={`w-full ${className}`}>
      <div className={`relative h-1`} {...others}>
        <div className={`h-full transition-all ${bg[variant]} ${indeterminate}`} style={hasValue ? { width: `${value}%` } : {}}></div>
      </div>
    </div>
  );
}
