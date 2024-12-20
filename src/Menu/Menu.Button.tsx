import { MenuButton as HeadlessMenuButton } from '@headlessui/react';
import React, { ComponentPropsWithRef } from 'react';

export function MenuButton({ className, children, as, ...props }: ComponentPropsWithRef<typeof HeadlessMenuButton>) {
  return (
    <HeadlessMenuButton as={as ?? 'button'} className={`inline-flex rounded-md ${className}`} {...props}>
      {children}
    </HeadlessMenuButton>
  );
}
