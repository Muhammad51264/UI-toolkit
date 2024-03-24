import React from 'react';
import Switch from '../components/switch';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Switch',
  component: Switch,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  icons: true,
};

export const WithSelectedIconOnly = Template.bind({});
WithSelectedIconOnly.args = {
  showOnlySelectedIcon: true,
};

export const Required = () => (
  <form>
    <Switch required />
    <button type="submit" style={{ marginLeft: '1rem' }}>
      submit
    </button>
  </form>
);

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'switch',
};
