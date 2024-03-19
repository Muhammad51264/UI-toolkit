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
    isDisabled: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  text: 'Filled',
  isDisabled: false,
  variant: 'filled',
  onChange: () => {console.log('Filled clicked')},
};

export const Elevated = Template.bind({});
Elevated.args = {
    text: 'Elevated',
    isDisabled: false,
    variant: 'elevated',
    onChange: () => {console.log('Elevated clicked')},
}

export const Outlined = Template.bind({});
Outlined.args = {
    text: 'Outlined',
    isDisabled: false,
    variant: 'outlined',
    onChange: () => {console.log('Outlined clicked')},
}

export const FilledTonal = Template.bind({});
FilledTonal.args = {
    text: 'Tonal',
    isDisabled: false,
    variant: 'tonal',
    onChange: () => {console.log('Tonal clicked')},
}
