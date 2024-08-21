import React from 'react';
import { PlatformIcon } from './Icons/platform-icon.tsx';
import { useTranslation } from '../locale/use-translation.ts';
import { CollapseIcon } from './Icons/CollapseIcon.tsx';
import { ExpandIcon } from './Icons/ExpandIcon.tsx';

export function NavFooter({ isNavExpanded, toggleNavExpanded }: { isNavExpanded: boolean; toggleNavExpanded: () => void }) {
  const { t } = useTranslation();
  return (
    <div className='relative'>
      <button title={isNavExpanded ? t('Collapse') : t('Expand')} className='absolute right-0 -translate-y-1/2 translate-x-1/2 bg-neutral-layer-1 hover:fill-controls-highlight' onClick={toggleNavExpanded}>
        {isNavExpanded ? <CollapseIcon /> : <ExpandIcon />}
      </button>
      <div className='flex items-center gap-3 overflow-hidden p-4'>
        <i className='inline-block'>
          <PlatformIcon />
        </i>
        {isNavExpanded && <span className='text-neutral-detail'>{t('Platform')}</span>}
      </div>
    </div>
  );
}
