import React from 'react';
import FabIcon from '../components/fabicon';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';
import Fabicon from '../components/fabicon';
import { SearchIcon, ClearIcon } from '@storybook/icons';

export default {
  title: 'fabIcon',
  component: FabIcon,
};

const Template = (args) => (
  <>
    <style>
      {`
        :root{
          --md-ripple-pressed-color:#EADDFF;
          --md-sys-color-on-primary-container-light: #21005D;
          --md-sys-color-on-primary-light: #FFFFFF;
          --md-sys-color-on-secondary-container-light: #1D192B;
          --md-sys-color-on-secondary-light: #FFFFFF;
          --md-sys-color-on-surface-light: #1C1B1F;
          --md-sys-color-on-tertiary-container-light: #31111D;
          --md-sys-color-on-tertiary-container-light: #31111D;
          --md-sys-color-on-tertiary-light: #FFFFFF;
          --md-sys-color-primary-container-light: #EADDFF;
          --md-sys-color-secondary-container-light: #E8DEF8;
          --md-sys-color-surface-light:#FFFBFE;
          --md-sys-color-tertiary-container-light: #FFD8E4;
          --md-sys-typescale-body-small-font-family-name: Roboto;
          --md-sys-typescale-body-small-font-size: 12px;
          --md-sys-typescale-body-small-font-weight: 400px;
          --md-sys-typescale-label-large-font-family-name: Roboto;
          --md-sys-typescale-label-large-font-size: 14px;
          --md-sys-typescale-label-large-font-weight: 500px;
          --md-sys-typescale-label-medium-font-family-name: Roboto;
          --md-sys-typescale-label-medium-font-size: 12px;
          --md-sys-typescale-label-medium-font-weight: 500px;
      `}
    </style>
    <Fabicon {...args}></Fabicon>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: <SearchIcon />,
};

export const ExtendedWithLabel = Template.bind({});
ExtendedWithLabel.args = {
  label: 'Fab Icon',
  children: <SearchIcon />,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: <SearchIcon />,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: <SearchIcon />,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: <SearchIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: <SearchIcon />,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: <SearchIcon />,
};
