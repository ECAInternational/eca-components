import React, { HTMLAttributes, PropsWithChildren } from 'react';

export function Avatar({
  children,
  className,
  variant = 'primary',
  size = 'medium',
  as: Component = 'button'
}: PropsWithChildren<
  {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    as?: 'button' | 'div';
  } & HTMLAttributes<HTMLButtonElement | HTMLDivElement>
>) {
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

  return <Component className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${bg[variant]} ${sizes[size]} ${className}`}>{children}</Component>;
}
