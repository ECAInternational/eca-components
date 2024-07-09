import React from 'react';
import { Meta } from '@storybook/react';
import { ActionableAlert, ActionableAlertProps } from './ActionableAlert.tsx';
import { Button } from '../Button/Button.tsx';

interface StoryProps extends ActionableAlertProps {
  messageText: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
}

const componentMeta: Meta = {
  title: 'Components/ActionableAlert',
  component: ActionableAlert,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'error', 'success']
      }
    }
  }
};

export default componentMeta;

function TemplateOneButton({ messageText, primaryButtonText, ...args }: StoryProps) {
  return (
    <ActionableAlert {...args}>
      <div className='inline-flex w-full items-center gap-2 rounded py-3 pl-4 pr-3 leading-[1.125rem] paragraph-sm-mid'>
        <span className='w-full'>{messageText}</span>
        <Button name='primaryButton' variant='ghost'>
          {primaryButtonText}
        </Button>
      </div>
    </ActionableAlert>
  );
}

function TemplateTwoButtons({ messageText, primaryButtonText, secondaryButtonText, ...args }: StoryProps) {
  return (
    <ActionableAlert {...args}>
      <div className='inline-flex w-full items-center gap-2 rounded py-3 pl-4 pr-3 leading-[1.125rem] paragraph-sm-mid'>
        <span className='w-full'>{messageText}</span>
        <Button name='primaryButton' variant='ghost'>
          {primaryButtonText}
        </Button>
        <Button name='secondaryButton' variant='outline'>
          {secondaryButtonText}
        </Button>
      </div>
    </ActionableAlert>
  );
}

export const InfoOneButton = {
  render: TemplateOneButton,
  args: {
    status: 'info',
    messageText: 'I am an info with an action',
    primaryButtonText: 'Accept'
  }
};

export const SuccessOneButton = {
  render: TemplateOneButton,
  args: {
    status: 'success',
    messageText: 'I am a success with an action',
    primaryButtonText: 'Accept'
  }
};

export const WarningOneButton = {
  render: TemplateOneButton,
  args: {
    status: 'warning',
    messageText: 'I am a warning with an action',
    primaryButtonText: 'Undo'
  }
};

export const ErrorOneButton = {
  render: TemplateOneButton,
  args: {
    status: 'error',
    messageText: 'I am an error with an action',
    primaryButtonText: 'Undo'
  }
};

export const InfoTwoButtons = {
  render: TemplateTwoButtons,
  args: {
    status: 'info',
    messageText: 'I am an info with an action',
    primaryButtonText: 'Deny',
    secondaryButtonText: 'Accept'
  }
};

export const SuccessTwoButtons = {
  render: TemplateTwoButtons,
  args: {
    status: 'success',
    messageText: 'I am a success with an action',
    primaryButtonText: 'Deny',
    secondaryButtonText: 'Accept'
  }
};

export const WarningTwoButtons = {
  render: TemplateTwoButtons,
  args: {
    status: 'warning',
    messageText: 'I am a warning with an action',
    primaryButtonText: 'Deny',
    secondaryButtonText: 'Accept'
  }
};

export const ErrorTwoButtons = {
  render: TemplateTwoButtons,
  args: {
    status: 'error',
    messageText: 'I am an error with an action',
    primaryButtonText: 'Deny',
    secondaryButtonText: 'Accept'
  }
};
