import React, { useCallback, useState } from 'react';
import type { MenuItemDetails } from './types';
import { LinkMenuItem } from './LinkMenuItem.tsx';
import { ExpandableMenuItem } from './ExpandableMenuItem.tsx';
import { useMenuContext } from './MenuContext.tsx';

export function TopLevelMenuItem({ url, menuItemDetails, isListExpanded, isNavExpanded }: { url: string; menuItemDetails: MenuItemDetails; isListExpanded: boolean; isNavExpanded: boolean }) {
  const { collapseSubItemsExcept } = useMenuContext();
  const [isHovering, setIsHovering] = useState(false);
  const { id, subItems } = menuItemDetails;

  const onToggleMenuItem = useCallback(() => {
    collapseSubItemsExcept(isListExpanded ? '' : id);
  }, [collapseSubItemsExcept, id, isListExpanded]);

  const onNavigate = useCallback(() => {
    if (!isNavExpanded) {
      collapseSubItemsExcept('');
      setIsHovering(false);
    }
  }, [isNavExpanded, collapseSubItemsExcept, setIsHovering]);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  const isContentVisible = isListExpanded || (!isNavExpanded && isHovering);

  return (
    <li className='flex flex-col justify-between' onFocus={handleMouseOver} onMouseOver={handleMouseOver} onBlur={handleMouseOut} onMouseOut={handleMouseOut}>
      {subItems ? <ExpandableMenuItem url={url} details={menuItemDetails} isNavExpanded={isNavExpanded} onClick={onToggleMenuItem} isListExpanded={isListExpanded} isContentVisible={isContentVisible} onNavigate={onNavigate} /> : <LinkMenuItem url={url} onNavigate={onNavigate} details={menuItemDetails} isNavExpanded={isNavExpanded} isTopLevel isContentVisible={isContentVisible} />}
    </li>
  );
}
