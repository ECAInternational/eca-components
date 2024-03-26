import React, { HTMLAttributes, PropsWithChildren } from 'react';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ children, className, ...props }: PropsWithChildren<CardHeaderProps>) {
  return (
    <div className={`w-full text-3xl font-normal ${className}`} {...props}>
      {children}
    </div>
  );
}
