import { within } from '@storybook/test';
import { Checkbox } from './Checkbox.tsx';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
  parameters: {
    componentSubtitle: 'Basic Checkbox'
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the text input'
    },
    className: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    },
    onChange: {
      action: true,
      table: { disable: true }
    }
  },
  args: {
    disabled: false,
    alignment: 'left',
    label: 'A Label'
  }
};

export const Default = {
  args: {
    name: 'default'
  }
};

export const Unchecked = {
  args: {
    name: 'unchecked',
    checked: false
  }
};

export const Checked = {
  args: {
    name: 'checked',
    checked: true
  }
};

export const Indeterminate = {
  args: {
    name: 'indeterminate'
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;
    checkbox.indeterminate = true;
  }
};

export const RightLabel = {
  args: {
    name: 'rightLabel',
    label: 'Right Label',
    alignment: 'right'
  }
};

export const LeftLabel = {
  args: {
    name: 'leftLabel',
    label: 'Left Label',
    alignment: 'left'
  }
};
