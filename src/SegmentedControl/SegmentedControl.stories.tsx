import React from 'react';
import { SegmentedControl, SegmentedControlProps } from './SegmentedControl.tsx';
import { FieldSet } from '../Form/FieldSet.tsx';
import { Label } from '../Form/Label.tsx';

export default {
  component: SegmentedControl,
  title: 'Components/SegmentedControl',
  parameters: {
    componentSubtitle: 'Basic Segmented Control'
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the entire segmented control'
    },
    size: {
      control: 'select',
      description: 'Defines the size of the segmented control, medium is the default size'
    },
    id: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    checked: {
      table: { disable: true }
    }
  },
  args: {
    disabled: false,
    size: 'medium'
  }
};

export const Default = {
  args: {
    name: 'default'
  },
  render: (args: SegmentedControlProps) => (
    <SegmentedControl {...args}>
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
    </SegmentedControl>
  )
};

export const Width = {
  args: {
    name: 'width',
    className: 'w-72'
  },
  render: (args: SegmentedControlProps) => (
    <SegmentedControl {...args}>
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
    </SegmentedControl>
  )
};

export const OneDisabled = {
  args: {
    name: 'one-disabled'
  },
  render: (args: SegmentedControlProps) => (
    <SegmentedControl {...args}>
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' disabled />
    </SegmentedControl>
  )
};

export const AllDisabled = {
  args: {
    name: 'all-disabled'
  },
  render: (args: SegmentedControlProps) => (
    <SegmentedControl {...args} disabled>
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
    </SegmentedControl>
  )
};

export const Small = {
  args: {
    name: 'small',
    size: 'small'
  },
  render: (args: SegmentedControlProps) => (
    <SegmentedControl {...args}>
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
    </SegmentedControl>
  )
};

export const Medium = {
  args: {
    name: 'medium'
  },
  render: (args: SegmentedControlProps) => (
    <SegmentedControl {...args}>
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
      <input type='radio' aria-label='Option' />
    </SegmentedControl>
  )
};

export const WithLabel = {
  args: {
    name: 'with-label'
  },
  render: (args: SegmentedControlProps) => (
    <FieldSet>
      <Label htmlFor={args.name}>Label</Label>
      <SegmentedControl {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedControl>
    </FieldSet>
  )
};

export const WithDescription = {
  args: {
    name: 'with-description'
  },
  render: (args: SegmentedControlProps) => (
    <FieldSet>
      <Label htmlFor={args.name}>
        Label<span className='ps-1 paragraph-sm-lighter'>Description</span>
      </Label>
      <SegmentedControl {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedControl>
    </FieldSet>
  )
};

export const Highlights = {
  args: {
    name: 'Highlights'
  },
  render: (args: SegmentedControlProps) => (
    <SegmentedControl {...args}>
      <input type='radio' aria-label='Default' />
      <input type='radio' aria-label='Orange' data-highlight='orange' />
      <input type='radio' aria-label='Yelow' data-highlight='yellow' />
      <input type='radio' aria-label='Green' data-highlight='green' />
      <input type='radio' aria-label='Blue' data-highlight='blue' />
      <input type='radio' aria-label='Purple' data-highlight='purple' />
      <input type='radio' aria-label='Pink' data-highlight='pink' />
      <input type='radio' aria-label='Red' data-highlight='red' />
    </SegmentedControl>
  )
};
