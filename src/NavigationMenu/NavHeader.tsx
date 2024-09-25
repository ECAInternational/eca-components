import React from 'react';
import { CompanyLogoExpanded } from './Icons/CompanyLogoExpanded.tsx';
import { CompanyLogoCollapsed } from './Icons/CompanyLogoCollapsed.tsx';

export function NavHeader({ isNavExpanded }: { isNavExpanded: boolean }) {
  return <div className='m-4 flex h-10 flex-row items-center gap-3 overflow-hidden'>{isNavExpanded ? <CompanyLogoExpanded /> : <CompanyLogoCollapsed />}</div>;
}
