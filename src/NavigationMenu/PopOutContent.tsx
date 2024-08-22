import React, { memo } from 'react';
import { Transition } from '@headlessui/react';
import { LinkMenuItem } from './LinkMenuItem.tsx';
import { MenuItemDetails } from './types.ts';

type Props = {
  menuItemDetails: MenuItemDetails;
  isNavExpanded: boolean;
  shouldShowSubItems?: boolean;
  isContentVisible?: boolean;
  onNavigate?: () => void;
  url: string;
};

export const PopOutContent = memo(({ url, onNavigate, menuItemDetails, isNavExpanded, shouldShowSubItems, isContentVisible }: Props) => {
  const { label, subItems } = menuItemDetails;
  const popOverClasses = 'absolute left-10 bg-neutral-layer-1 shadow-md rounded-md z-10 border border-neutral-detail-palest p-3';

  return (
    <Transition enter='ease-in duration-300' enterFrom='transform opacity-0 max-h-0' enterTo='transform opacity-100 max-h-96' leave='ease-out duration-300' leaveFrom='transform opacity-100 max-h-96' leaveTo='transform opacity-0 max-h-0' show={isContentVisible} as='div' className={`${isNavExpanded ? '' : popOverClasses} ml-7 flex flex-col gap-3 pt-3`}>
      {!isNavExpanded && <h2 className='text-neutral-body'>{label}</h2>}
      {subItems?.length && shouldShowSubItems && (
        <ol className='pl-5'>
          {subItems.map((subItemDetails: MenuItemDetails) => (
            <LinkMenuItem url={url} onNavigate={onNavigate} details={subItemDetails} isNavExpanded={isNavExpanded} key={subItemDetails.id} />
          ))}
        </ol>
      )}
    </Transition>
  );
});
