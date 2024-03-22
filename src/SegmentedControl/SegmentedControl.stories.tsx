import React from 'react';
import { SegmentedControl, SegmentedControlProps } from './SegmentedControl.tsx';

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
    size: 'medium',
    description: ''
  }
};

export const Default = {
  args: {
    name: 'default',
    label: 'Label'
  },
  render: (args: SegmentedControlProps) => (
    <div className='w-72'>
      <SegmentedControl {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedControl>
    </div>
  )
};

export const OneDisabled = {
  args: {
    name: 'one-disabled',
    label: 'One disabled option'
  },
  render: (args: SegmentedControlProps) => (
    <div className='w-72'>
      <SegmentedControl {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' disabled />
      </SegmentedControl>
    </div>
  )
};

export const AllDisabled = {
  args: {
    name: 'all-disabled',
    label: 'All disabled'
  },
  render: (args: SegmentedControlProps) => (
    <div className='w-96'>
      <SegmentedControl {...args} disabled>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedControl>
    </div>
  )
};

export const Small = {
  args: {
    name: 'small',
    label: 'Small',
    size: 'small'
  },
  render: (args: SegmentedControlProps) => (
    <div className='w-32'>
      <SegmentedControl {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedControl>
    </div>
  )
};

export const Medium = {
  args: {
    name: 'medium',
    label: 'Medium (default)'
  },
  render: (args: SegmentedControlProps) => (
    <div className='w-72'>
      <SegmentedControl {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedControl>
    </div>
  )
};

export const NoLabel = {
  args: {
    name: 'no-label'
  },
  render: (args: SegmentedControlProps) => (
    <div className='w-72'>
      <SegmentedControl {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedControl>
    </div>
  )
};

export const Description = {
  args: {
    name: 'description',
    label: 'Label',
    description: '(required)'
  },
  render: (args: SegmentedControlProps) => (
    <div className='w-72'>
      <SegmentedControl {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedControl>
    </div>
  )
};

export const Highlights = {
  args: {
    name: 'Highlights',
    label: 'Label'
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
