import React from 'react';
import { MenuItemTitle } from './MenuItemTitle.tsx';
import type { MenuItemDetails } from './types';
import { PopOutContent } from './PopOutContent.tsx';

export function getIsUrlMatch(url: string, menuItems?: MenuItemDetails[]): boolean {
  const urlPathname = new URL(url, 'http://placeholder.com').pathname;

  return (
    menuItems?.some((item) => {
      if (!item.link) return false;

      const itemPathname = new URL(item.link, 'http://placeholder.com').pathname;

      return urlPathname === itemPathname;
    }) || false
  );
}

export function ExpandableMenuItem({ url, details, onClick, isListExpanded, isNavExpanded, isContentVisible, onNavigate }: { url: string; details: MenuItemDetails; onClick: () => void; isListExpanded: boolean; isNavExpanded: boolean; isContentVisible: boolean; onNavigate: () => void }) {
  const { label, subItems } = details;

  const isSelected = getIsUrlMatch(url, subItems);

  const hasPersistentPopout = isListExpanded && !isNavExpanded;
  const shouldShowSubItems = isNavExpanded || hasPersistentPopout;

  return (
    <>
      <button onClick={onClick} name={label} aria-label={label} className={`${isSelected ? 'bg-controls-element-tonal' : ''} hover:bg-controls-element-tonal-hover flex min-h-5 w-full items-center gap-3 rounded-md px-3 py-2.5 text-neutral-body focus-visible:border-controls-highlight`}>
        <MenuItemTitle details={details} isNavExpanded={isNavExpanded} isListExpanded={isListExpanded} />
      </button>
      <PopOutContent url={url} menuItemDetails={details} isContentVisible={isContentVisible} shouldShowSubItems={shouldShowSubItems} isNavExpanded={isNavExpanded} onNavigate={onNavigate} />
    </>
  );
}
