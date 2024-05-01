import React, { ReactNode } from 'react';
import { Tab } from '@headlessui/react';

interface TabGroupProps {
  children: ReactNode;
  defaultIndex?: number;
}

export function TabGroup({ children, defaultIndex = 0 }: TabGroupProps) {
  return (
    <Tab.Group defaultIndex={defaultIndex}>
      <Tab.List className='flex justify-start gap-3'>{children}</Tab.List>
    </Tab.Group>
  );
}
