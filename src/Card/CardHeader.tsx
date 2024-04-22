import React, { HTMLAttributes, PropsWithChildren } from 'react';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ children, className, ...props }: PropsWithChildren<CardHeaderProps>) {
  return (
    <div className={`font-normal w-full text-3xl ${className}`} {...props}>
      {children}
    </div>
  );
}
