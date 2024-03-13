import React from 'react';
import { Tab, TabProps } from './Tab.tsx';

export default {
  component: Tab,
  title: 'Components/Tab',
  parameters: {
    componentSubtitle: 'A standard tab component'
  },
  argTypes: {
    size: {
      control: 'select',
      description: 'Defines the size of the tab, medium is the default size',
      options: ['medium', 'large']
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the tab'
    },
    selected: {
      table: { disable: true }
    },
    type: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    children: {
      table: { disable: true }
    },
    onClick: {
      table: { disable: true }
    },
    label: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    }
  },
  args: {
    disabled: false,
    size: 'medium',
    label: 'Lorem Ipsum'
  }
};

export const Default = {
  args: {
    name: 'default'
  },
  render: (args: TabProps) => (
    <div className='flex gap-4 justify-start'>
      <Tab {...args} id='tabOne' label='Tab One' selected />
      <Tab {...args} id='tabTwo' label='Tab Two' />
    </div>
  )
};

export const Unselected = {
  args: {
    name: 'unselected'
  }
};

export const Selected = {
  args: {
    name: 'selected',
    selected: true
  }
};

export const Medium = {
  args: {
    name: 'medium'
  }
};

export const Large = {
  args: {
    name: 'large',
    size: 'large'
  }
};
