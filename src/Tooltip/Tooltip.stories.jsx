import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
  parameters: {
    componentSubtitle: 'Basic Tooltip'
  },
  argTypes: {
    content: {
      description: 'Defines the content of the tooltip'
    },
    state: {
      control: 'select',
      description: 'Defines the state of the tooltip'
    },
    size: {
      control: 'select',
      description: 'Defines the size of the tooltip'
    },
    position: {
      control: 'select',
      description: 'Defines the position of the tooltip'
    },
    delay: {
      description: 'Defines the delay in ms before the tooltip appears'
    },
    id: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    title: {
      table: { disable: true }
    }
  },
  args: {
    state: 'info',
    content: 'Refresh',
    size: 'small',
    position: 'top',
    delay: 300
  }
};

export const Default = {
  args: {
    name: 'default-tooltip'
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant='primary' name='button'>
        Button
      </Button>
    </Tooltip>
  )
};
