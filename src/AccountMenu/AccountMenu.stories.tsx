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
    authWebUrl: 'https://www.example.com',
    firstName: 'Nat',
    lastName: 'Star',
    company: 'ECA International'
  },
  render: ({ authWebUrl, firstName, lastName, company }: { authWebUrl: string; firstName: string; lastName: string; company: string }) => (
    <div className='items-top mb-4 flex h-72 flex-none flex-row justify-end'>
      <AccountMenu firstName={firstName} lastName={lastName} company={company} authWebUrl={authWebUrl} />
    </div>
  )
};
