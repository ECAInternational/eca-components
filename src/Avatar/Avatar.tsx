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
    primary: 'text-primary-text-1 border-0 bg-primary-main outline outline-1 outline-offset-2 outline-default-transparent hover:outline-primary-main focus-visible:outline-primary-main',
    outline: 'bg-default-transparent border border-neutral-detail-boldest text-neutral-detail-bold hover:border-neutral-detail-bold focus-visible:border-neutral-detail-bold',
    ghost: 'bg-default-transparent border-2 border-default-transparent text-neutral-detail-boldest hover:text-neutral-detail-bold focus-visible:text-neutral-detail-bold'
  };

  const sizes = {
    small: 'heading-xs-heavier size-8',
    medium: 'heading-xs-heavier size-10',
    large: 'heading-md-heavier size-12'
  };

  return <Component className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${bg[variant]} ${sizes[size]} ${className}`}>{children}</Component>;
}
