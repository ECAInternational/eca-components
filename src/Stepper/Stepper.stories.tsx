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
      // prettier-ignore
      description: 'Defines how the stepper control\'s layout, horizontal is the default'
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

export const DefaultState = {
  render: (args: StepperProps) => (
    <Stepper {...args}>
      <Step selected>Label</Step>
      <Step>Label</Step>
      <Step>Label</Step>
    </Stepper>
  )
};

export const CompletedState = {
  render: (args: StepperProps) => (
    <Stepper {...args}>
      <Step selected state='completed'>
        Label
      </Step>
      <Step state='completed'>Label</Step>
      <Step state='completed'>Label</Step>
    </Stepper>
  )
};

export const ErrorState = {
  render: (args: StepperProps) => (
    <Stepper {...args}>
      <Step selected state='error'>
        Label
      </Step>
      <Step state='error'>Label</Step>
      <Step state='error'>Label</Step>
    </Stepper>
  )
};

export const HorizontalLayout = {
  args: { layout: 'horizontal' },
  render: (args: StepperProps) => (
    <Stepper {...args}>
      <Step selected>Label</Step>
      <Step>Label</Step>
      <Step>Label</Step>
      <Step>Label</Step>
    </Stepper>
  )
};

export const VerticalLayout = {
  args: { layout: 'vertical' },
  render: (args: StepperProps) => (
    <Stepper {...args}>
      <Step selected>Label</Step>
      <Step>Label</Step>
      <Step>Label</Step>
      <Step>Label</Step>
    </Stepper>
  )
};

export const NonLinearFlow = {
  render: (args: StepperProps) => (
    <>
      <Stepper {...args}>
        <Step>Label</Step>
        <Step>Label</Step>
        <Step selected>Step label</Step>
        <Step>Label</Step>
      </Stepper>
      <br />
      <Stepper {...args}>
        <Step>Label</Step>
        <Step state='error'>Label</Step>
        <Step selected>Step label</Step>
        <Step>Label</Step>
      </Stepper>
    </>
  )
};

export const LinearFlow = {
  render: (args: StepperProps) => (
    <>
      <Stepper {...args}>
        <Step state='completed'>Label</Step>
        <Step state='completed'>Label</Step>
        <Step selected>Step label</Step>
        <Step disabled>Label</Step>
      </Stepper>
      <br />
      <Stepper {...args}>
        <Step state='completed'>Label</Step>
        <Step state='completed'>Label</Step>
        <Step state='error' selected>
          Step label
        </Step>
        <Step disabled>Label</Step>
      </Stepper>
    </>
  )
};
