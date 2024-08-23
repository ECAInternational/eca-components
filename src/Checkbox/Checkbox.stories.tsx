import React from 'react';
import { within } from '@storybook/test';
import { Checkbox, CheckboxProps } from './Checkbox.tsx';
import { FieldSet } from '../Form/FieldSet.tsx';
import { Label } from '../Form/Label.tsx';

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
    disabled: false
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
    name: 'rightLabel'
  },
  render: (args: CheckboxProps) => (
    <FieldSet className='flex items-center'>
      <Checkbox {...args} />
      <Label htmlFor={args.name} className='ps-2 paragraph-sm-lighter'>
        Label
      </Label>
    </FieldSet>
  )
};

export const LeftLabel = {
  args: {
    name: 'leftLabel'
  },
  render: (args: CheckboxProps) => (
    <FieldSet className='flex items-center'>
      <Label htmlFor={args.name} className='pe-2 paragraph-sm-lighter'>
        Label
      </Label>
      <Checkbox {...args} />
    </FieldSet>
  )
};
