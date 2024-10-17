import React from 'react';
import { useTranslation } from '../locale/use-translation.ts';
import { Menu, MenuButton, MenuItems } from '../Menu/index.ts';
import { Avatar } from '../Avatar/index.ts';
import { Button } from '../Button/Button.tsx';

export function AccountMenu({ initials, firstName, lastName, company, authWebUrl }: { initials: string; firstName: string; lastName: string; company: string; authWebUrl: string }) {
  const { t } = useTranslation();

  return (
    // This translate-y-1 is a hack to compensate for some strange offset that is happening
    // inside Menu...
    <Menu className='translate-y-1'>
      <MenuButton as='div'>
        <Avatar>{initials}</Avatar>
      </MenuButton>
      <MenuItems className='z-50 flex flex-col gap-3.5 bg-neutral-layer-2 p-5 text-neutral-body'>
        <div className={'flex flex-col'}>
          <div className={'flex paragraph-sm-heavier'}>
            {firstName} {lastName}
          </div>
          <div className={'flex paragraph-sm-lighter'}>{company}</div>
        </div>

        <div>
          <a href={`${authWebUrl}/account/update-profile/view`}>
            <Button name='outline' type={'button'} size='small' variant='outline'>
              {t('Manage account')}
            </Button>
          </a>
        </div>

        <div className={'flex border-b-2 border-b-neutral-detail-paler'}></div>

        <div className={'flex'}>
          <a href={`${authWebUrl}/log-out`} className={'w-full'}>
            <Button name='ghost' size='small' variant='ghost' type={'button'} className={'w-full !p-2'}>
              <span className={'mr-3 rounded-3xl border-0 bg-neutral-detail-palest p-2'}>
                <i className={`fi fi-sr-leave flex text-sm`} />
              </span>
              <span className={'w-full text-left'}>{t('Sign out')}</span>
            </Button>
          </a>
        </div>
      </MenuItems>
    </Menu>
  );
}
