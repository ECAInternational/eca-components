import React, { OptgroupHTMLAttributes, PropsWithChildren } from 'react';

export function SelectOptionGroup({ className, label, children, ...props }: PropsWithChildren<OptgroupHTMLAttributes<HTMLDivElement>>) {
  return (
    <div role='group' {...props}>
      <div className={`select-none bg-neutral-detail-palest px-3 py-0.5 text-neutral-body paragraph-sm-lighter ${className}`}>{label}</div>
      {children}
    </div>
  );
}
