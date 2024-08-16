import { Slider } from './Slider.tsx';

export default {
  component: Slider,
  title: 'Components/Slider',
  parameters: {
    componentSubtitle: 'Slider'
  },
  argTypes: {
    id: {
      table: { disable: true }
    },
    type: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    }
  },
  args: {}
};

export const Default = {
  args: {
    name: 'default-button'
  }
};
