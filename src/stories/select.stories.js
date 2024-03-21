import React from 'react';
import { StorybookIcon } from '@storybook/icons';
import Select from '../components/select';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'select',
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
      border: '1px solid black',
      width: '100%',
      padding: '10px',
      position: 'relative',
      display: 'flex',
      height: ' 100px',
    }}
  >
    <Select {...args} />
  </form>
);

const primary = {
  label: 'select',
  isFilled: false,
  quick: false,
  isDisabled: false,
  isRequired: false,
  error: false,
  errorText: 'Please select an option.',
  supportingText: '',
  icon: undefined,
  options: [
    { id: 0, content: 'option - 1', value: 'option1' },
    { id: 1, content: 'option - 2', value: 'option2' },
    { id: 2, content: 'option - 3', value: 'option3' },
  ],
  onChange: () => console.log('change'),
  onInput: () => console.log('input'),
  onOpened: () => console.log('opened'),
  onOpening: () => console.log('opening'),
  onClosed: () => console.log('closed'),
  onClosing: () => console.log('closing'),
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
