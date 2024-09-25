import React from 'react';
import { AccountMenu } from './AccountMenu.tsx';

export default {
  component: AccountMenu,
  title: 'Components/AccountMenu',
  parameters: {
    componentSubtitle: 'An Account Menu'
  },
  argTypes: {},
  args: {
    disabled: false,
    size: 'medium',
    variant: 'primary'
  }
};

export const Default = {
  args: {
    initials: 'JD',
    authWebUrl: 'https://www.example.com',
    theme: 'eca-dark'
  },
  render: ({ initials, authWebUrl, theme }: { initials: string; authWebUrl: string; theme: string }) => (
    <div className='items-top mb-4 flex h-72 flex-none flex-row justify-end'>
      <AccountMenu initials={initials} authWebUrl={authWebUrl} theme={theme} />
    </div>
  )
};
