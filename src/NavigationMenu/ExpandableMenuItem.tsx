import React from 'react';
import { MenuItemTitle } from './MenuItemTitle.tsx';
import type { MenuItemDetails } from './types';
import { PopOutContent } from './PopOutContent.tsx';

export function ExpandableMenuItem({ pathname, details, onClick, isListExpanded, isNavExpanded, isContentVisible, onNavigate }: { pathname: string; details: MenuItemDetails; onClick: () => void; isListExpanded: boolean; isNavExpanded: boolean; isContentVisible: boolean; onNavigate: () => void }) {
  const { label, subItems } = details;
  const isSelected = pathname && subItems?.find((subItem) => subItem.link === pathname);
  const hasPersistentPopout = isListExpanded && !isNavExpanded;
  const shouldShowSubItems = isNavExpanded || hasPersistentPopout;

  return (
    <>
      <button onClick={onClick} name={label} aria-label={label} className={`${isSelected ? 'bg-controls-element-tonal' : ''} flex min-h-5 w-full items-center gap-3 rounded-md px-3 py-2.5 text-neutral-body hover:bg-controls-element-tonal-hover focus-visible:border-controls-highlight`}>
        <MenuItemTitle details={details} isNavExpanded={isNavExpanded} isListExpanded={isListExpanded} />
      </button>
      <PopOutContent pathname={pathname} menuItemDetails={details} isContentVisible={isContentVisible} shouldShowSubItems={shouldShowSubItems} isNavExpanded={isNavExpanded} onNavigate={onNavigate} />
    </>
  );
}
