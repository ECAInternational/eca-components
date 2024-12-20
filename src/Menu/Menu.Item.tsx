import { MenuItem as HeadlessMenuItem } from '@headlessui/react';
import React, { ComponentPropsWithRef, PropsWithChildren } from 'react';

export interface MenuItemProps extends Omit<ComponentPropsWithRef<typeof HeadlessMenuItem>, 'children'> {}

export function MenuItem({ className, children, ...props }: PropsWithChildren<MenuItemProps>) {
  return (
    <HeadlessMenuItem className={`block cursor-pointer select-none p-3 paragraph-sm-lighter data-[active]:bg-controls-highlight-paler data-[checked]:bg-controls-highlight-pale data-[selected]:bg-controls-highlight-palest ${className}`} {...props}>
      {children}
    </HeadlessMenuItem>
  );
}
