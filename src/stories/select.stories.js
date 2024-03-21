import React from 'react';
import { StorybookIcon } from '@storybook/icons';
import Select from '../components/select';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Select',
  component: Select,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (args) => (
  <form
    style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      margin: '2rem',
    }}
  >
    <Select {...args} />
  </form>
);

const primary = {
  error: false,
  errorText: 'Please select an option.',
  icon: undefined,
  isDisabled: false,
  isFilled: false,
  isRequired: false,
  label: 'select',
  onChange: () => console.log('change'),
  onClosing: () => console.log('closing'),
  onClosed: () => console.log('closed'),
  onInput: () => console.log('input'),
  onOpened: () => console.log('opened'),
  onOpening: () => console.log('opening'),
  options: [
    { content: 'option - 1', id: 0, value: 'option1' },
    { content: 'option - 2', id: 1, value: 'option2' },
    { content: 'option - 3', id: 2, value: 'option3' },
  ],
  quick: false,
  supportingText: '',
};

export const Default = Template.bind({});
Default.args = {
  ...primary,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...primary,
  icon: <StorybookIcon />,
};

export const Filled = Template.bind({});
Filled.args = {
  ...primary,
  isFilled: true,
};

export const NoAnimation = Template.bind({});
NoAnimation.args = {
  ...primary,
  quick: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...primary,
  isDisabled: true,
};

export const isRequired = Template.bind({});
isRequired.args = {
  ...primary,
  isRequired: true,
};

export const IsInvalid = Template.bind({});
IsInvalid.args = {
  ...primary,
  error: true,
  errorText: 'Please select an option.',
};

export const WithSupportingText = Template.bind({});
WithSupportingText.args = {
  ...primary,
  supportingText: 'please enter a valid option',
};
