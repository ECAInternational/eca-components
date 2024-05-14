import React, { ComponentProps } from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';

export interface MenuProps extends Omit<ComponentProps<typeof HeadlessMenu>, 'children'> {
  children: React.ReactNode;
}

export function Menu({ className, children, ...rest }: MenuProps) {
  return (
    <HeadlessMenu as='div' className={`relative inline-block ${className}`} {...rest}>
      {children}
    </HeadlessMenu>
  );
}
