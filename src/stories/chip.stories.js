import React from 'react';
import Chip from '../components/chip';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Chip',
  component: Chip,
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
:root {
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-secondary-container: #1D192B;
  --md-sys-color-on-surface: #1D1B20;
  --md-sys-color-on-surface-variant: #49454F;
  --md-sys-color-outline: #79747E;
  --md-sys-color-secondary: #625B71;
  --md-sys-color-secondary-container: #E8DEF8;
  --md-sys-color-shadow: #000000;
  --md-sys-color-surface-container-low: #F7F2FA;
  --md-sys-shape-corner-small: 0.5rem;
  --md-sys-state-focus-indicator-thickness: 3px;
  --md-sys-typescale-label-large-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --md-sys-typescale-label-large-line-height: 20pt;
  --md-sys-typescale-label-large-size: 14pt;
  --md-sys-typescale-label-large-weight: 500;
  --md-ripple-hover-color: var(--md-sys-color-on-surface);
  --md-ripple-pressed-color: var(--md-sys-color-on-surface);
 }
 
 *{
  margin: 0;
  padding:0;
 }

 `}
    </style>
    <Chip {...args}></Chip>
  </>
);

const primary = {
  chipType: 'assist',
  elevated: false,
  disabled: false,
  draggable: false,
  label: 'label chip',
  onClick: () => {
    console.log('click');
  },
};

export const Default = Template.bind({});
Default.args = {
  ...primary,
};

export const Filter = Template.bind({});
Filter.args = {
  ...primary,
  chipType: 'filter',
};

export const Input = Template.bind({});
Input.args = {
  ...primary,
  chipType: 'input',
};

export const Suggestion = Template.bind({});
Suggestion.args = {
  ...primary,
  chipType: 'suggestion',
};
