import React from 'react';
import { useTranslation } from '../locale/use-translation.ts';
import { Menu, MenuButton, MenuItem, MenuItems } from '../Menu/index.ts';
import { Avatar } from '../Avatar/index.ts';
import { IconButton } from '../IconButton/IconButton.tsx';

export function AccountMenu({ initials, authWebUrl, theme }: { initials: string; authWebUrl: string; theme: string }) {
  const { t } = useTranslation();

  return (
    // This translate-y-1 is a hack to compensate for some strange offset that is happening
    // inside Menu...
    <Menu className='translate-y-1'>
      <MenuButton as='div'>
        <Avatar>{initials}</Avatar>
      </MenuButton>
      <MenuItems className='z-50'>
        <MenuItem>
          <div className='flex flex-row'>
            <i className='fi fi-sr-user-gear px-2 text-primary-main' />
            <a href={`${authWebUrl}/account/update-profile/view`} className='w-full text-left text-neutral-body'>
              {t('Account settings')}
            </a>
          </div>
        </MenuItem>
        <MenuItem>
          <div className='flex flex-row'>
            <i className='fi fi-sr-exit px-2 text-primary-accent' />
            <a href={`${authWebUrl}/log-out`} className='w-full text-left text-neutral-body'>
              {t('Log out')}
            </a>
          </div>
        </MenuItem>
        <MenuItem>
          <IconButton name='intent' value='theme' type='submit' icon={theme === 'eca-dark' ? 'fi-rr-eclipse-alt' : 'fi-rr-brightness'} variant='tonal' size='medium' className='self-start bg-neutral-layer-2' />
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
