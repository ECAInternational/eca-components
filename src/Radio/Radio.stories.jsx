import { Radio } from './Radio';

export default {
  component: Radio,
  title: 'Components/Radio',
  parameters: {
    componentSubtitle: 'Basic Radio Button'
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the text input'
    },
    id: {
      table: { disable: true }
    }
  },
  args: {
    disabled: false
  }
};

export const Selected = {
  args: {}
};

export const Unselected = {
  args: {}
};
