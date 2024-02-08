import { IconButton } from './IconButton';

export default {
  component: IconButton,
  title: 'Components/IconButton',
  parameters: {
    componentSubtitle: 'A standard icon button component'
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Defines the colour scheme of the icon button based on the current theme',
      options: ['standard', 'filled', 'tonal', 'outline']
    },
    size: {
      control: 'select',
      description: 'Defines the size of the icon button, medium is the default size',
      options: ['xsmall', 'small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the icon button'
    },
    className: {
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
    variant: 'standard'
  }
};

export const Default = {
  args: {
    name: 'default',
    variant: 'standard',
    icon: 'fi-rr-envelope'
  }
};

export const Standard = {
  args: {
    name: 'standard',
    variant: 'standard',
    icon: 'fi-rr-envelope'
  }
};

export const Filled = {
  args: {
    name: 'filled',
    variant: 'filled',
    icon: 'fi-rr-envelope'
  }
};

export const Tonal = {
  args: {
    name: 'tonal',
    variant: 'tonal',
    icon: 'fi-rr-envelope'
  }
};

export const Outline = {
  args: {
    name: 'outline',
    variant: 'outline',
    icon: 'fi-rr-envelope'
  }
};

export const XSmall = {
  args: {
    name: 'xsmall',
    variant: 'standard',
    icon: 'fi-rr-envelope',
    size: 'xsmall'
  }
};

export const Small = {
  args: {
    name: 'small',
    variant: 'standard',
    icon: 'fi-rr-envelope',
    size: 'small'
  }
};

export const Medium = {
  args: {
    name: 'medium',
    variant: 'standard',
    icon: 'fi-rr-envelope',
    size: 'medium'
  }
};

export const Large = {
  args: {
    name: 'large',
    variant: 'standard',
    icon: 'fi-rr-envelope',
    size: 'large'
  }
};
