import React from 'react';
import { TabGroup } from './TabGroup';
import { Tab } from '../Tab/Tab';

export default {
  component: TabGroup,
  title: 'Components/TabGroup',
  parameters: {
    componentSubtitle: 'A group of tab components'
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the tab'
    },
    size: {
      control: 'select',
      description: 'Defines the size of the tab, medium is the default size',
      options: ['medium', 'large']
    }
  },
  args: {
    disabled: false,
    size: 'medium'
  }
};

export const Default = {
  args: {
    name: 'default'
  },
  render: (args) => (
    <TabGroup>
      <Tab {...args} id='tabOne' label='Tab One' />
      <Tab {...args} id='tabTwo' label='Tab Two' />
      <Tab {...args} id='tabthree' label='Tab Three' selected />
      <Tab {...args} id='tabfour' label='Tab Four' />
    </TabGroup>
  )
};
