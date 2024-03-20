import React, { HTMLAttributes, PropsWithChildren } from 'react';

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export function CardBody({ children, className, ...props }: PropsWithChildren<CardBodyProps>) {
  return (
    <div className={`flex size-full ${className}`} {...props}>
      {children}
    </div>
  );
}
