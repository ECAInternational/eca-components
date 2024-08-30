import { Progress } from './Progress.tsx';

export default {
  component: Progress,
  title: 'Components/Progress',
  parameters: {
    componentSubtitle: 'A Standard Progress Component'
  },
  argTypes: {
    className: {
      table: { disable: true }
    },
    variant: {
      defaultValue: { summary: 'primary' },
      control: 'select',
      options: ['primary', 'secondary']
    }
  },
  args: {}
};

export const Default = {
  args: {
    value: 50
  }
};

export const Primary = {
  args: {
    value: 50
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    value: 50
  }
};

export const IndeterminatePrimary = {
  args: {}
};

export const IndeterminateSecondary = {
  args: {
    variant: 'secondary'
  }
};
