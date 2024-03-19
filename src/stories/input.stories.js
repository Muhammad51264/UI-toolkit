import React, { useRef, useState } from 'react';
import { Input } from '../components/input';
import * as Icon from '@storybook/icons';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => {
  const inputRef = useRef();

  const [value, setValue] = useState('');

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <Input ref={inputRef} value={value} {...args} onChange={changeHandler} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'input',
  placeHolder: 'input',
};

export const Disabled = () => (
  <Input label="input" placeHolder="input" disabled />
);
Disabled.parameters = {
  controls: { disable: true },
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'input',
  placeHolder: 'input',
  error: 'please enter a valid input value',
  value: 'invalid value',
};
WithError.parameters = {
  controls: { disable: true },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'input',
  placeHolder: 'input',
  leftIcon: <Icon.EyeIcon color="#A5A5A5" />,
};
WithIcon.parameters = {
  controls: { disable: true },
};
