import React from 'react';
import { Button } from '../components/Button/button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'outlined', 'elevated', 'tonal', 'text'],
      },
    },
    name: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    trailingIcon: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Button {...args}> Hello </Button>;

export const Filled = Template.bind({});
Filled.args = {
  hasIcon: true,
  icon: (
    <svg slot="icon" viewBox="0 0 48 48">
      <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />
    </svg>
  ),
  isDisabled: false,
  variant: 'filled',
  onClick: () => {
    console.log('Filled clicked');
  },
  trailingIcon: true,
};

export const Elevated = Template.bind({});
Elevated.args = {
  isDisabled: false,
  variant: 'elevated',
  onClick: () => {
    console.log('Elevated clicked');
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  icon: (
    <svg slot="icon" viewBox="0 0 48 48">
      <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
    </svg>
  ),
  isDisabled: false,
  variant: 'outlined',
  onClick: () => {
    console.log('Outlined clicked');
  },
};

export const FilledTonal = Template.bind({});
FilledTonal.args = {
  isDisabled: false,
  hasIcon: true,
  variant: 'tonal',
  onClick: () => {
    console.log('Tonal clicked');
  },
};

export const TextButton = Template.bind({});
TextButton.args = {
  isDisabled: false,
  hasIcon: true,
  href: 'www.google.com',
  target: '_blank',
  variant: 'text',
  type: 'submit',
  onClick: () => {
    console.log('Text button clicked');
  },
};
