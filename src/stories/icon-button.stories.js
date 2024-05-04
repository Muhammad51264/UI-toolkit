import React from 'react';
import '@material/web/button/text-button';
import MdIconButton from '@material/web/iconbutton/icon-button';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';
import '@material/web/icon/icon';
import IconButton from '../components/icon-button/icon-button.jsx';

export default {
  title: 'Icon Button',
  component: MdIconButton,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (args) => (
  <>
    <style>
      {`
        :root{
            --md-sys-color-on-surface-variant-light: #49454F;
            --md-ripple-pressed-color:#49454F;
            --md-ripple-pressed-opacity:0.12;
            --md-sys-color-primary-light: #6750A4;
            --md-sys-color-on-surface-light: #1C1B1F;
            --md-sys-color-outline-light: #79747E;
            --md-sys-color-on-primary-light: #FFFFFF;
            --md-sys-color-inverse-surface-light: #313033;
            --md-sys-color-inverse-on-surface-light: #F4EFF4;
            --md-sys-color-surface-variant-light: #E7E0EC;
            --md-sys-color-on-secondary-container-light: #1D192B;
            --md-sys-color-secondary-container-light: #E8DEF8;
          }
      `}
    </style>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
      rel="stylesheet"
    />
    <IconButton {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  icon: <md-icon>search</md-icon>,
  ariaLabel: 'icon',
};

export const Toggleable = Template.bind({});
Toggleable.args = {
  icon: <md-icon>search</md-icon>,
  toggle: true,
  selectedIcon: <md-icon>settings</md-icon>,
  ariaLabel: 'icon',
};

export const Linked = Template.bind({});
Linked.args = {
  icon: <md-icon>search</md-icon>,
  ariaLabel: 'icon',
  href: 'https://google.com',
  target: '_blank',
};

export const Outlined = Template.bind({});
Outlined.args = {
  icon: <md-icon>search</md-icon>,
  variant: 'outlined',
};

export const Filled = Template.bind({});
Filled.args = {
  icon: <md-icon>search</md-icon>,
  variant: 'filled',
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <md-icon>search</md-icon>,
  disabled: true,
};
