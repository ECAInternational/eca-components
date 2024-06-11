import React, { ElementType, ReactNode } from 'react';
import { Tab, TabGroupProps } from '@headlessui/react';

interface GroupProps {
  children: ReactNode;
  defaultIndex?: number;
}

export function TabGroup({ children, defaultIndex = 0, ...props }: GroupProps & TabGroupProps<ElementType>) {
  return (
    <Tab.Group defaultIndex={defaultIndex} {...props}>
      <Tab.List className='flex justify-start gap-3'>{children}</Tab.List>
    </Tab.Group>
  );
}
