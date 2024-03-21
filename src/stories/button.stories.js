import React from 'react';
import Button from '../components/button';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Button',
  component: Button,
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
          --md-sys-color-on-primary: #FFFFFF;
          --md-sys-color-primary: #6750A4;
          --md-sys-color-outline: #79747E;
          --md-sys-color-secondary-container: #E8DEF8;
          --md-sys-color-on-secondary-container: #1D192B;
          --md-sys-color-secondary: #625B71;
          --md-sys-state-focus-indicator-thickness: 3px;
          --md-sys-state-focus-indicator-outer-offset: 2px;
          --md-sys-color-on-surface: 29, 27, 32;
          --md-sys-typescale-label-large-tracking: 0.5pt;
          --md-sys-shape-corner-full: 20px;
          --md-sys-color-surface-container-low: #F7F2FA;
          --md-sys-typescale-label-large-font: 20pt;
          --md-sys-typescale-label-large-weight: 500;
          --md-sys-typescale-label-large-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      `}
    </style>
    <Button {...args} />
  </>
);

const primary = {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M439.5-440H201.869v-81H439.5v-237.631h81V-521h237.631v81H520.5v237.631h-81V-440Z" />
    </svg>
  ),
  disabled: false,
  disabled: false,
  variant: 'filled',
  text: 'Button',
};

export const Filled = Template.bind({});
Filled.args = {
  ...primary,
  onClick: () => {
    console.log('Filled clicked');
  },
};

export const Elevated = Template.bind({});
Elevated.args = {
  ...primary,
  variant: 'elevated',
  onClick: () => {
    console.log('Elevated clicked');
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...primary,
  variant: 'outlined',
  onClick: () => {
    console.log('Outlined clicked');
  },
};

export const FilledTonal = Template.bind({});
FilledTonal.args = {
  ...primary,
  variant: 'tonal',
  onClick: () => {
    console.log('Tonal clicked');
  },
};

export const TextButton = Template.bind({});
TextButton.args = {
  ...primary,
  variant: 'textType',
  onClick: () => {
    console.log('Text button clicked');
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...primary,
  disabled: true,
};

export const Draggable = Template.bind({});
Draggable.args = {
  ...primary,
  draggable: true,
};

export const WithoutIcon = Template.bind({});
Draggable.args = {
  ...primary,
  icon: '',
};
