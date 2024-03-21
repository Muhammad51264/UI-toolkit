import React from 'react';
import Radio from '../components/radio';

export default {
  title: 'Radio',
  component: Radio,
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
    <Radio {...args} />
  </form>
);

const primary = {
  isChecked: false,
  isDisabled: false,
  onChange: () => console.log('change'),
  onInput: () => console.log('input'),
  size: '',
};

export const Default = Template.bind({});
Default.args = {
  ...primary,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...primary,
  isDisabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  ...primary,
  isChecked: true,
};
