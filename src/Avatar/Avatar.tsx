import React, { PropsWithChildren } from 'react';

export function Avatar({
  children,
  className,
  variant = 'primary',
  size = 'medium'
}: PropsWithChildren<{
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}>) {
  const bg = {
    primary: 'bg-primary-main border-0 text-default-white',
    outline: 'bg-default-transparent border border-neutral-detail-boldest text-neutral-detail-boldest',
    ghost: 'bg-default-transparent border-2 border-default-transparent text-neutral-detail-boldest'
  };

  const sizes = {
    small: 'label-sm-mid size-8',
    medium: 'label-sm-mid size-10',
    large: 'label-md-mid size-12'
  };

  return <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${bg[variant]} ${sizes[size]} ${className}`}>{children}</div>;
}
