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
  argTypes: {},
  args: {},
  render: (args) => (
    <Stepper {...args}>
      <Step>Label</Step>
      <Step state='completed'>Label</Step>
      <Step state='error'>Label</Step>
    </Stepper>
  )
} satisfies Meta<StepperProps>;

export const Default = {};
