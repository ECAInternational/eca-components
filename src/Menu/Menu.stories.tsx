import React from 'react';
import { Menu } from './Menu.tsx';
import { MenuButton } from './Menu.Button.tsx';
import { MenuItems } from './Menu.Items.tsx';
import { MenuItem } from './Menu.Item.tsx';

export default {
  component: Menu,
  title: 'Components/Menu',
  height: '400px',
  parameters: {
    componentSubtitle: 'Basic Menu'
  },
  argTypes: {
    as: {
      control: 'select',
      description: 'Defines the element of the button',
      options: ['div', 'button']
    },
    defaultValue: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    label: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    },
    type: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    },
    multiple: {
      table: { disable: true }
    },
    form: {
      table: { disable: true }
    },
    refName: {
      table: { disable: true }
    },
    nullable: {
      table: { disable: true }
    },
    onChange: {
      table: { disable: true }
    },
    by: {
      table: { disable: true }
    },
    ref: {
      table: { disable: true }
    },
    __demoMode: {
      table: { disable: true }
    }
  },
  args: {}
};

export const Default = {
  args: {
    as: 'button'
  },
  render: ({ as }: { as: 'div' | 'button' }) => (
    <div className='h-72 bg-neutral-layer-1 p-2 text-neutral-body'>
      <div className='flex justify-end'>
        <Menu>
          <MenuButton as={as} className='flex justify-end'>
            Menu
          </MenuButton>
          <MenuItems>
            <MenuItem>
              <button className='w-full text-left'>Open a page</button>
            </MenuItem>
            <MenuItem disabled>
              <button>Disabled Item</button>
            </MenuItem>
            <MenuItem>
              <button className='w-full text-left'>Another menu Item</button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
};
