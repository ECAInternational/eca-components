import React from 'react';
import { SegmentedButtons } from './SegmentedButtons';

export default {
  component: SegmentedButtons,
  title: 'Components/SegmentedButtons',
  parameters: {
    componentSubtitle: 'Basic Segmented Buttons Control'
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the segmented button control'
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
    },
    label: {
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
  },
  render: (args) => (
    <SegmentedButtons {...args}>
      <input type='radio' name='options' aria-label='Radio 1' />
      <input type='radio' name='options' aria-label='Radio 2' />
      <input type='radio' name='options' aria-label='Radio 3' />
    </SegmentedButtons>
  )
};
