import { Menu } from '@headlessui/react';
import React, { ComponentPropsWithRef, PropsWithChildren } from 'react';

export interface MenuItemProps extends Omit<ComponentPropsWithRef<typeof Menu.Item>, 'children'> {}

export function MenuItem({ className, children, ...props }: PropsWithChildren<MenuItemProps>) {
  return (
    <Menu.Item className={`ui-checked:ui-not-disabled:bg-controls-highlight-pale ui-selected:ui-not-disabled:bg-controls-highlight-palest ui-active:ui-not-disabled:bg-controls-highlight-paler block cursor-pointer select-none p-3 paragraph-sm-lighter ${className}`} {...props}>
      {children}
    </Menu.Item>
  );
}
