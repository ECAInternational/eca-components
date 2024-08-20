import React, { memo } from 'react';
import { Transition } from '@headlessui/react';

import type { MenuItemDetails } from './types';
import { ExpanderChevron } from './Icons/ExpanderChevron.tsx';

interface Props {
  details: MenuItemDetails;
  isNavExpanded: boolean;
  isListExpanded?: boolean;
}

export const MenuItemTitle = memo(({ details, isNavExpanded, isListExpanded }: Props) => {
  const { icon, label, subItems, enabled } = details;

  return (
    <div className='flex w-full gap-3'>
      {icon && <i className={`${icon} ml-0.5 mt-0.5 ${enabled ? 'text-neutral-detail' : 'text-controls-content-disabled'}`} data-testid={icon} />}
      <Transition as='div' show={isNavExpanded} enter='ease-in duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-out duration-300' leaveFrom='opacity-100' leaveTo='opacity-0' className='flex flex-1 items-center'>
        <div className={`flex-1 text-nowrap text-left ${enabled ? 'text-neutral-body' : 'text-controls-content-disabled'}`}>{label}</div>
        <div className='flex-none'>{subItems?.length && <ExpanderChevron isListExpanded={isListExpanded} />}</div>
      </Transition>
    </div>
  );
});
