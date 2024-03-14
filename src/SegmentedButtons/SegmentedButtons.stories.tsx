import React from 'react';
import { SegmentedButtons, SegmentedButtonsProps } from './SegmentedButtons.tsx';

export default {
  component: SegmentedButtons,
  title: 'Components/SegmentedButtons',
  parameters: {
    componentSubtitle: 'Basic Segmented Buttons Control'
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the entire segmented button control'
    },
    size: {
      control: 'select',
      description: 'Defines the size of the segmented button control, medium is the default size'
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
  render: (args: SegmentedButtonsProps) => (
    <div className='w-72'>
      <SegmentedButtons {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedButtons>
    </div>
  )
};

export const OneDisabled = {
  args: {
    name: 'one-disabled',
    label: 'One disabled option'
  },
  render: (args: SegmentedButtonsProps) => (
    <div className='w-72'>
      <SegmentedButtons {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' disabled />
      </SegmentedButtons>
    </div>
  )
};

export const AllDisabled = {
  args: {
    name: 'all-disabled',
    label: 'All disabled'
  },
  render: (args: SegmentedButtonsProps) => (
    <div className='w-96'>
      <SegmentedButtons {...args} disabled>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedButtons>
    </div>
  )
};

export const Small = {
  args: {
    name: 'small',
    label: 'Small',
    size: 'small'
  },
  render: (args: SegmentedButtonsProps) => (
    <div className='w-32'>
      <SegmentedButtons {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedButtons>
    </div>
  )
};

export const Medium = {
  args: {
    name: 'medium',
    label: 'Medium (default)'
  },
  render: (args: SegmentedButtonsProps) => (
    <div className='w-72'>
      <SegmentedButtons {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedButtons>
    </div>
  )
};

export const NoLabel = {
  args: {
    name: 'no-label'
  },
  render: (args: SegmentedButtonsProps) => (
    <div className='w-72'>
      <SegmentedButtons {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedButtons>
    </div>
  )
};

export const Description = {
  args: {
    name: 'description',
    label: 'Label',
    description: '(required)'
  },
  render: (args: SegmentedButtonsProps) => (
    <div className='w-72'>
      <SegmentedButtons {...args}>
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
        <input type='radio' aria-label='Option' />
      </SegmentedButtons>
    </div>
  )
};
