import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  id?: string;
  variant: 'primary' | 'outline' | 'ghost';
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  className?: string;
  isSubmitting?: boolean;
}

export function Button(props: ButtonProps) {
  const { name, id, variant, type = 'button', size = 'medium', children, className = '', isSubmitting = false, ...others } = props;

  const bg = {
    primary: `${isSubmitting ? 'bg-primary-pale' : 'bg-primary-main'} border-0 ${isSubmitting ? 'text-red-100' : 'text-primary-text-1'}`,
    outline: `bg-default-transparent border ${isSubmitting ? 'border-neutral-detail-pale text-neutral-detail-pale' : 'border-neutral-detail-boldest text-neutral-detail-boldest'}`,
    ghost: 'bg-default-transparent border-2 border-default-transparent text-neutral-detail-boldest'
  };

  const disabled = {
    primary: 'disabled:bg-controls-bg-disabled',
    outline: 'disabled:border-controls-content-disabled',
    ghost: ''
  };

  const hover = {
    primary: 'hover:bg-primary-accent',
    outline: 'hover:bg-neutral-detail-boldest hover:text-neutral-layer-1',
    ghost: 'hover:bg-controls-highlight-palest hover:text-neutral-detail-boldest'
  };

  const active = {
    primary: 'active:bg-primary-accent',
    outline: 'active:bg-neutral-detail-boldest active:text-neutral-layer-1',
    ghost: 'active:bg-controls-highlight-palest active:text-neutral-detail-boldest'
  };

  const focus = {
    primary: 'focus-visible:outline focus-visible:outline-primary-main',
    outline: 'focus-visible:text-neutral-detail-boldest focus-visible:outline focus-visible:outline-neutral-detail-boldest',
    ghost: 'focus-visible:text-neutral-detail-boldest focus-visible:outline-neutral-detail-boldest'
  };

  const sizes = {
    small: 'label-sm-mid rounded px-4 py-2',
    medium: 'label-sm-mid rounded-md px-5 py-3',
    large: 'label-md-mid rounded-lg px-6 py-4'
  };

  const commonIsSubmittingClassNames = isSubmitting ? 'pointer-events-none' : '';

  return (
    <button id={id || name} name={name} className={`flex items-center justify-center overflow-hidden outline-2 outline-offset-2 outline-default-transparent transition disabled:cursor-not-allowed disabled:text-controls-content-disabled ${bg[variant]} ${disabled[variant]} ${hover[variant]} ${active[variant]} ${focus[variant]} ${sizes[size]} ${commonIsSubmittingClassNames} ${className}`} type={type} {...others}>
      {children}
    </button>
  );
}
