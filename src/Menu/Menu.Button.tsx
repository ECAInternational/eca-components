import { Menu } from '@headlessui/react';
import React, { ComponentPropsWithRef } from 'react';

export function MenuButton({ className, children, ...props }: ComponentPropsWithRef<typeof Menu.Button>) {
  return (
    <Menu.Button as='button' className={`inline-flex rounded-md ${className}`} {...props}>
      {children}
    </Menu.Button>
  );
}
