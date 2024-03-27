import React from 'react';
import { Meta } from '@storybook/react';
import { Stepper, StepperProps } from './Stepper.tsx';
import { Step } from './Step.tsx';

export default {
  component: Stepper,
  title: 'Components/Stepper',
  parameters: {
    componentSubtitle: 'Stepper Component'
  },
  argTypes: {
    layout: {
      control: 'select',
      description: "Defines how the stepper control's layout, horizontal is the default"
    }
  },
  args: {},
  render: (args: StepperProps) => (
    <Stepper {...args}>
      <Step selected>Selected</Step>
      <Step>Label</Step>
      <Step state='completed'>Completed</Step>
      <Step state='error'>Error</Step>
      <Step disabled>Disabled</Step>
    </Stepper>
  )
} satisfies Meta<StepperProps>;

export const Default = {};
