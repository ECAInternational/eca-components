import React from 'react';
import { Switch, SwitchProps } from './Switch.tsx';
import { FieldSet } from '../Form/FieldSet.tsx';
import { Label } from '../Form/Label.tsx';

export default {
  component: Switch,
  title: 'Components/Switch',
  parameters: {
    componentSubtitle: 'Basic Switch'
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

export const On = {
  args: {
    name: 'on',
    checked: true
  }
};

export const Off = {
  args: {
    name: 'off',
    checked: false
  }
};

export const Right = {
  args: {
    name: 'right'
  },
  render: (args: SwitchProps) => (
    <FieldSet className='flex items-center'>
      <Switch {...args} />
      <Label className='ps-2' htmlFor={args.name}>
        Label
      </Label>
    </FieldSet>
  )
};

export const Left = {
  args: {
    name: 'left'
  },
  render: (args: SwitchProps) => (
    <FieldSet className='flex items-center'>
      <Label className='pe-2' htmlFor={args.name}>
        Label
      </Label>
      <Switch {...args} />
    </FieldSet>
  )
};

export const Top = {
  args: {
    name: 'top'
  },
  render: (args: SwitchProps) => (
    <FieldSet className='flex flex-col items-center'>
      <Label htmlFor={args.name}>Label</Label>
      <Switch {...args} />
    </FieldSet>
  )
};
