import { Chip } from './Chip';

export default {
  component: Chip,
  title: 'Components/Chip',
  parameters: {
    componentSubtitle: 'Basic Chip'
  },
  argTypes: {
    className: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    }
  },
  args: {
    label: 'Label'
  }
};

export const Default = {};

export const Yellow = {
  args: {
    label: 'Yellow',
    variant: 'yellow'
  }
};

export const Green = {
  args: {
    label: 'Green',
    variant: 'green'
  }
};

export const Blue = {
  args: {
    label: 'Blue',
    variant: 'blue'
  }
};

export const Purple = {
  args: {
    label: 'Purple',
    variant: 'purple'
  }
};

export const Pink = {
  args: {
    label: 'Pink',
    variant: 'pink'
  }
};

export const Orange = {
  args: {
    label: 'Orange',
    variant: 'orange'
  }
};

export const Red = {
  args: {
    label: 'Red',
    variant: 'red'
  }
};

export const Black = {
  args: {
    label: 'Black',
    variant: 'black'
  }
};

export const Neutral = {
  args: {
    label: 'Neutral',
    variant: 'neutral'
  }
};
