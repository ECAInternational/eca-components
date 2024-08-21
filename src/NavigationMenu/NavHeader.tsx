import React from 'react';
import { CompanyLogo } from './Icons/CompanyLogo.tsx';
import { useTranslation } from '../locale/use-translation.ts';

export function NavHeader({ isNavExpanded }: { isNavExpanded: boolean }) {
  const { t } = useTranslation();

  return (
    <div className='m-4 flex h-10 flex-row items-center gap-3 overflow-hidden'>
      <CompanyLogo />
      {isNavExpanded && <h3 className='font-bold text-nowrap text-sm leading-[18px] tracking-tight text-neutral-detail'>{t('Your Company')}</h3>}
    </div>
  );
}
