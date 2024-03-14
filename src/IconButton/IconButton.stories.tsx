import { IconButton } from './IconButton.tsx';

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
    selected: {
      control: 'boolean',
      description: 'Changes the icon button to a selected state'
    },
    className: {
      table: { disable: true }
    },
    children: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    onClick: {
      action: true,
      table: { disable: true }
    }
  },
  args: {
    disabled: false,
    size: 'medium',
    variant: 'standard',
    selected: false,
    icon: 'fi-rr-envelope'
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
    variant: 'standard'
  }
};

export const Filled = {
  args: {
    name: 'filled',
    variant: 'filled'
  }
};

export const Tonal = {
  args: {
    name: 'tonal',
    variant: 'tonal'
  }
};

export const Outline = {
  args: {
    name: 'outline',
    variant: 'outline'
  }
};

export const XSmall = {
  args: {
    name: 'xsmall',
    size: 'xsmall'
  }
};

export const Small = {
  args: {
    name: 'small',
    size: 'small'
  }
};

export const Medium = {
  args: {
    name: 'medium',
    size: 'medium'
  }
};

export const Large = {
  args: {
    name: 'large',
    size: 'large'
  }
};

export const SelectedStandard = {
  args: {
    name: 'large',
    selected: true
  }
};

export const SelectedTonal = {
  args: {
    name: 'large',
    selected: true,
    variant: 'tonal'
  }
};

export const SelectedOutline = {
  args: {
    name: 'large',
    selected: true,
    variant: 'outline'
  }
};

export const SelectedFilled = {
  args: {
    name: 'large',
    selected: true,
    variant: 'filled'
  }
};
