import React from 'react';
import type { MenuItemDetails } from './types';
import { MenuItemTitle } from './MenuItemTitle.tsx';
import { PopOutContent } from './PopOutContent.tsx';

export function LinkMenuItem({ pathname, details, isNavExpanded, isTopLevel, isContentVisible, onNavigate }: { pathname: string; details: MenuItemDetails; isNavExpanded: boolean; isTopLevel?: boolean; isContentVisible?: boolean; onNavigate?: () => void }) {
  const { link = '', label, enabled } = details;
  const isSelected = pathname === link;

  return (
    <>
      <div className='menuItem relative'>
        {!isTopLevel && <div data-testid='menu-branch' className='branch' />}
        <a href={enabled ? link : ''} className={`${enabled ? 'text-neutral-body' : 'pointer-events-none text-controls-content-disabled'} ${isSelected && 'bg-controls-element-tonal'} link selected:bg-controls-element-tonal hover:bg-controls-element-tonal-hover flex min-h-5 w-full items-center rounded-md px-3 py-2.5 focus-visible:border-controls-highlight`} aria-label={label} onClick={onNavigate}>
          {isTopLevel ? <MenuItemTitle details={details} isNavExpanded={isNavExpanded} /> : label}
        </a>
      </div>
      {isTopLevel && <PopOutContent pathname={pathname} menuItemDetails={details} isContentVisible={isTopLevel && isContentVisible} shouldShowSubItems isNavExpanded={isNavExpanded} />}
    </>
  );
}
