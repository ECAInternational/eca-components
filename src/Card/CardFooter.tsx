import React, { HTMLAttributes, PropsWithChildren } from 'react';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ children, className, ...props }: PropsWithChildren<CardFooterProps>) {
  return (
    <div className={`flex w-full ${className}`} {...props}>
      {children}
    </div>
  );
}
