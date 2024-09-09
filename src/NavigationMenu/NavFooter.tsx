import React from 'react';
import { useTranslation } from '../locale/use-translation.ts';
import { CollapseIcon } from './Icons/CollapseIcon.tsx';
import { ExpandIcon } from './Icons/ExpandIcon.tsx';
import { PlatformIconCollapsed } from './Icons/PlatformIconCollapsed.tsx';

export function NavFooter({ isNavExpanded, toggleNavExpanded }: { isNavExpanded: boolean; toggleNavExpanded: () => void }) {
  const { t } = useTranslation();
  return (
    <div className='relative'>
      <button title={isNavExpanded ? t('Collapse') : t('Expand')} className='absolute right-0 -translate-y-1/2 translate-x-1/2 bg-neutral-layer-1 hover:fill-controls-highlight' onClick={toggleNavExpanded}>
        {isNavExpanded ? <CollapseIcon /> : <ExpandIcon />}
      </button>
      <div className='flex items-center gap-3 overflow-hidden p-4'>
        <i className='inline-block'>
          <PlatformIconCollapsed />
        </i>
      </div>
    </div>
  );
}
