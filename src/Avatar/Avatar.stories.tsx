import React from 'react';
import { Avatar } from './Avatar.tsx';
import { Menu, MenuButton, MenuItem, MenuItems } from '../Menu/index.ts';

export default {
  component: Avatar,
  title: 'Components/Avatar',
  parameters: {
    componentSubtitle: 'An Avatar component'
  },
  argTypes: {
    children: {
      name: 'Initials'
    },
    variant: {
      control: 'select',
      description: 'Defines the colour scheme of the button based on the current theme',
      options: ['primary', 'outline', 'ghost']
    },
    as: {
      control: 'select',
      description: 'Defines the element of the button',
      options: ['button', 'div'],
      defaultValue: 'button'
    },
    size: {
      control: 'select',
      description: 'Defines the size of the button, medium is the default size',
      options: ['small', 'medium', 'large']
    },
    className: {
      table: { disable: true }
    }
  },
  args: { size: 'medium', variant: 'primary' }
};

export const Default = {
  args: {
    variant: 'primary',
    children: 'EC'
  }
};

export const WithDropdown = {
  args: {
    variant: 'primary',
    children: 'EC'
  },
  render: (args: { variant: string; children: string }) => (
    <div className='h-72 p-2 text-neutral-body'>
      <div className='flex justify-end'>
        <Menu>
          <MenuButton as='div'>
            <Avatar>{args.children}</Avatar>
          </MenuButton>
          <MenuItems>
            <MenuItem>
              <span className='w-full text-left'>Open a page</span>
            </MenuItem>
            <MenuItem disabled>
              <span>Disabled Item</span>
            </MenuItem>
            <MenuItem>
              <span className='w-full text-left'>Another menu Item</span>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
};

export const WithIcon = {
  args: {
    icon: 'fi-rr-user'
  },
  render: (args: { icon: string }) => (
    <Avatar>
      <i className={`fi ${args.icon} flex`} />
    </Avatar>
  )
};

export const WithImage = {
  args: {
    size: 'large'
  },
  render: (args: { size: 'large' }) => (
    <Avatar size={args.size}>
      <img alt='profile' src='/avatar.jpg' />
    </Avatar>
  )
};

export const AsDiv = {
  args: {
    as: 'div'
  },
  render: (args: { as: 'div' }) => (
    <Avatar as={args.as}>
      <button>EC</button>
    </Avatar>
  )
};
