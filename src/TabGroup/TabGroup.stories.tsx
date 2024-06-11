import React from 'react';

import { TabGroup } from './TabGroup.tsx';
import { Tab, TabProps } from '../Tab/Tab.tsx';

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
    },
    defaultIndex: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
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
  render: (args: TabProps) => (
    <TabGroup>
      <Tab {...args}>Tab One</Tab>
      <Tab {...args}>Tab Two</Tab>
      <Tab {...args}>Tab Three</Tab>
      <Tab {...args}>Tab Four</Tab>
    </TabGroup>
  )
};

export const DefaultSelectedTab = {
  args: {
    name: 'selected'
  },
  render: (args: TabProps) => (
    <TabGroup defaultIndex={2}>
      <Tab {...args}>Tab One</Tab>
      <Tab {...args}>Tab Two</Tab>
      <Tab {...args}>Tab Three</Tab>
      <Tab {...args}>Tab Four</Tab>
    </TabGroup>
  )
};

export const DisableTab = {
  args: {
    name: 'disabled'
  },
  render: (args: TabProps) => (
    <TabGroup>
      <Tab {...args}>Tab One</Tab>
      <Tab {...args} disabled>
        Tab Two
      </Tab>
      <Tab {...args}>Tab Three</Tab>
      <Tab {...args} disabled>
        Tab Four
      </Tab>
    </TabGroup>
  )
};

export const MediumTab = {
  args: {
    name: 'medium',
    size: 'medium'
  },
  render: (args: TabProps) => (
    <TabGroup>
      <Tab {...args}>Tab One</Tab>
      <Tab {...args} disabled>
        Tab Two
      </Tab>
      <Tab {...args}>Tab Three</Tab>
      <Tab {...args} disabled>
        Tab Four
      </Tab>
    </TabGroup>
  )
};

export const LargeTab = {
  args: {
    name: 'large',
    size: 'large'
  },
  render: (args: TabProps) => (
    <TabGroup>
      <Tab {...args}>Tab One</Tab>
      <Tab {...args} disabled>
        Tab Two
      </Tab>
      <Tab {...args}>Tab Three</Tab>
      <Tab {...args} disabled>
        Tab Four
      </Tab>
    </TabGroup>
  )
};
