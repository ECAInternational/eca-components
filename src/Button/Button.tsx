import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  id?: string;
  variant: 'primary' | 'outline' | 'ghost';
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { name, id, variant, type = 'button', size = 'medium', children, className = '', ...others } = props;

  const bg = {
    primary: 'bg-primary-main border-0 text-default-white',
    outline: 'bg-default-transparent border border-neutral-detail-boldest text-neutral-detail-boldest',
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
    small: 'text-sm rounded px-4 py-2',
    medium: 'text-sm rounded px-5 py-3',
    large: 'text-base rounded-md px-6 py-4'
  };

  return (
    <button
      id={id || name}
      name={name}
      className={`flex items-center justify-center font-medium outline-2 outline-offset-2 outline-default-transparent transition
      active:scale-92
      disabled:cursor-not-allowed disabled:text-controls-content-disabled
      ${bg[variant]} ${disabled[variant]}
      ${hover[variant]} ${active[variant]} ${focus[variant]}
      ${sizes[size]} ${className}`}
      type={type}
      {...others}
    >
      {children}
    </button>
  );
}
