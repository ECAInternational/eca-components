import React, { HTMLAttributes, PropsWithChildren } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  raised?: boolean;
  className?: string;
}

export function Card({ children, raised, className, ...props }: PropsWithChildren<CardProps>) {
  return (
    <div className={`flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-neutral-layer-2 bg-auto p-10 text-neutral-body md:w-fit md:max-w-[460px] ${raised && 'md:shadow-xl'} ${className}`} {...props}>
      {children}
    </div>
  );
}
