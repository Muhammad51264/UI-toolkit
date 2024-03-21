import { SearchIcon, ClearIcon } from '@storybook/icons';
import React, { useRef, useState } from 'react';
import Input from '../components/input';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const primary = {
  label: 'label',
};

const Template = (args) => {
  const inputRef = useRef();
  const [value, setValue] = useState('input');
  return (
    <Input
      {...args}
      ref={inputRef}
      onInput={() => {
        setValue(inputRef.current.value);
      }}
      value={value}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  ...primary,
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  ...primary,
  maxLength: 100,
};

export const Filled = Template.bind({});
Filled.args = {
  ...primary,
  isFilled: true,
};

export const TextArea = Template.bind({});
TextArea.args = {
  ...primary,
  type: 'textarea',
  rows: 5,
};

export const WithSuffixText = Template.bind({});
WithSuffixText.args = {
  ...primary,
  suffixText: '$',
};

export const WithPrefixText = Template.bind({});
WithPrefixText.args = {
  ...primary,
  prefixText: '$',
};

export const Required = () => {
  const inputRef = useRef();

  return (
    <form>
      <Input
        required={true}
        label="input"
        ref={inputRef}
        onBlur={() => {
          inputRef.current.reportValidity();
        }}
      />
    </form>
  );
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  placeholder: 'search for messages',
  leadingIcon: <SearchIcon />,
  hasLeadingIcon: true,
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  placeholder: 'clear input',
  trailingIcon: <ClearIcon />,
  hasTrailingIcon: true,
};

export const WithSupportingText = Template.bind({});
WithSupportingText.args = {
  ...primary,
  supportingText: 'this is a supporting text',
};

export const Disbaled = Template.bind({});
Disbaled.args = {
  ...primary,
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...primary,
  ReadOnly: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...primary,
  error: true,
  errorText: 'invalid input value',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  ...primary,
  customStyles: {
    width: '100%',
  },
};
