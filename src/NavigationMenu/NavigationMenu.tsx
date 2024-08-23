import React, { useCallback, useState } from 'react';

import { MenuProvider, useMenuContext } from './MenuContext';
import { NavHeader } from './NavHeader.tsx';
import type { MenuItemDetails } from './types';
import { NavFooter } from './NavFooter.tsx';
import { TopLevelMenuItem } from './TopLevelMenuItem.tsx';

interface NavigationMenuProps {
  menuItems: MenuItemDetails[];
  url: string;
}

const NAV_EXPANDED_WIDTH = 'min-w-72'; // due to current linting rules 'min-w-${var}' won't work inline
const NAV_COLLAPSED_WIDTH = 'min-w-20';

export function NavigationMenu({ url, menuItems }: NavigationMenuProps) {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(true);
  const { expandedMenuItemId, collapseSubItemsExcept } = useMenuContext();

  const toggleNavExpanded = useCallback(() => {
    if (isNavExpanded) {
      collapseSubItemsExcept();
    }
    setIsNavExpanded(!isNavExpanded);
  }, [isNavExpanded, collapseSubItemsExcept]);

  return (
    <nav id='main-nav' aria-label='Main' className={`flex h-full flex-col divide-y divide-neutral-detail-palest duration-300 ease-in-out ${isNavExpanded ? NAV_EXPANDED_WIDTH : NAV_COLLAPSED_WIDTH}`}>
      <NavHeader isNavExpanded={isNavExpanded} />
      <ol className='grow flex-col gap-3 overflow-hidden p-4'>{menuItems?.map((menuItemDetails) => <TopLevelMenuItem url={url} key={menuItemDetails.id} menuItemDetails={menuItemDetails} isListExpanded={menuItemDetails.id === expandedMenuItemId} isNavExpanded={isNavExpanded} />)}</ol>
      <NavFooter isNavExpanded={isNavExpanded} toggleNavExpanded={toggleNavExpanded} />
    </nav>
  );
}

export function NavigationMenuWithProvider(props: NavigationMenuProps) {
  return (
    <MenuProvider>
      <NavigationMenu {...props} />
    </MenuProvider>
  );
}
