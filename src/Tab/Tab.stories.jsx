import { Tab } from './Tab';

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
      control: 'boolean',
      description: 'Selects the tab'
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
    onClick: { action: true }
  },
  args: {
    disabled: false,
    size: 'medium',
    label: 'Lorem ipsum'
  }
};

export const Default = {
  args: {
    name: 'default',
    children: 'Tab'
  }
};
