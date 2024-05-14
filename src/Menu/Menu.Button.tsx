import { Menu } from '@headlessui/react';
import React, { ComponentPropsWithRef } from 'react';

export function MenuButton({ className, children, as, ...props }: ComponentPropsWithRef<typeof Menu.Button>) {
  return (
    <Menu.Button as={as ?? 'button'} className={`inline-flex rounded-md ${className}`} {...props}>
      {children}
    </Menu.Button>
  );
}
