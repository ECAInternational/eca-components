import React from 'react';
import { Meta } from '@storybook/react';
import { Card, CardProps } from './Card.tsx';
import { CardHeader } from './CardHeader.tsx';
import { CardBody } from './CardBody.tsx';
import { CardFooter } from './CardFooter.tsx';

export default {
  component: Card,
  title: 'Components/Card',
  parameters: {
    componentSubtitle: 'Card'
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>Get Started for Free</CardHeader>
      <CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  ),
  argTypes: {
    className: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    }
  },
  args: {}
} satisfies Meta<CardProps>;

export const Default = {
  args: {
    raised: true
  }
};
