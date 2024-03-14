import React from 'react';
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
    icon: {
      description: 'Defines an optional icon to display in the tooltip'
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
    position: 'bottom',
    delay: 300
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant='primary' name='button'>
        Button
      </Button>
    </Tooltip>
  )
};

export const Default = {
  args: {
    name: 'default-tooltip'
  }
};

export const Info = {
  args: {
    name: 'info-tooltip',
    state: 'info'
  }
};

export const Warning = {
  args: {
    name: 'warning-tooltip',
    state: 'warning'
  }
};

export const Error = {
  args: {
    name: 'error-tooltip',
    state: 'error'
  }
};

export const IconInfo = {
  args: {
    name: 'info-tooltip',
    state: 'info',
    icon: 'fi-rr-info'
  }
};

export const IconWarning = {
  args: {
    name: 'warning-tooltip',
    state: 'warning',
    icon: 'fi-rr-triangle-warning'
  }
};

export const IconError = {
  args: {
    name: 'error-tooltip',
    state: 'error',
    icon: 'fi-rr-exclamation'
  }
};

export const Small = {
  args: {
    name: 'small-tooltip',
    size: 'small'
  }
};

export const Large = {
  args: {
    name: 'large-tooltip',
    size: 'large'
  }
};

export const Top = {
  args: {
    name: 'top-tooltip',
    position: 'top'
  }
};

export const Right = {
  args: {
    name: 'right-tooltip',
    position: 'right'
  }
};

export const Bottom = {
  args: {
    name: 'bottom-tooltip',
    position: 'bottom'
  }
};

export const Left = {
  args: {
    name: 'left-tooltip',
    position: 'left'
  }
};

export const NoDelay = {
  args: {
    name: 'left-tooltip',
    delay: 0
  }
};

export const Delay = {
  args: {
    name: 'left-tooltip',
    delay: 500
  }
};
