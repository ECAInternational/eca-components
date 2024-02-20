import { Tooltip } from './Tooltip';

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
  parameters: {
    componentSubtitle: 'Basic Text Fields'
  },
  argTypes: {
    title: {
      description: 'Defines the text of the tooltip'
    },
    state: {
      control: 'select',
      description: 'Defines the state of the tooltip',
      options: ['info', 'warning', 'error']
    },
    size: {
      control: 'select',
      description: 'Defines the size of the tooltip',
      options: ['small', 'large', 'error']
    },
    position: {
      control: 'select',
      description: 'Defines the position of the tooltip',
      options: ['top', 'right', 'bottom', 'left']
    },
    id: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    }
  },
  args: {
    state: 'info'
  }
};

export const Default = {
  args: {
    name: 'default-tooltip',
    state: 'info',
    title: 'Refresh',
    size: 'small',
    position: 'bottom'
  }
};
