import React, { ElementType, ReactNode } from 'react';
import { Tab, TabGroupProps as HeadlessTabGroupProps } from '@headlessui/react';

export type TabGroupProps = {
  children: ReactNode;
  defaultIndex?: number;
} & HeadlessTabGroupProps<ElementType>;

export function TabGroup({ children, defaultIndex = 0, ...props }: TabGroupProps) {
  return (
    <Tab.Group defaultIndex={defaultIndex} {...props}>
      <Tab.List className='flex justify-start gap-3'>{children}</Tab.List>
    </Tab.Group>
  );
}
