import React from 'react';
import CheckBox from '../components/checkbox';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'checkbox',
};

export const Required = () => (
  <form>
    <CheckBox required />
    <button type="submit">Submit</button>
  </form>
);
