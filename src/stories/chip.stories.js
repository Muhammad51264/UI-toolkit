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
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
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
  --md-sys-state-focus-indicator-thickness: 0.1875rem;
  --md-sys-typescale-label-large-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --md-sys-typescale-label-large-line-height: 20pt;
  --md-sys-typescale-label-large-size: 0.8125rem;
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
  selected: false,
};

export const Default = Template.bind({});
Default.args = {
  ...primary,
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

export const Elivated = Template.bind({});
Elivated.args = {
  ...primary,
  elevated: true,
};

export const ElviatedDisabled = Template.bind({});
ElviatedDisabled.args = {
  ...primary,
  elevated: true,
  disabled: true,
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  ...primary,
  leadingIcon: 'rocket_launch',
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  ...primary,
  trailingIcon: 'public',
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  ...primary,
  leadingIcon: 'rocket_launch',
  trailingIcon: 'public',
};

export const Filter = Template.bind({});
Filter.args = {
  ...primary,
  chipType: 'filter',
};

export const FilterSelected = Template.bind({});
FilterSelected.args = {
  ...primary,
  chipType: 'filter',
  selected: true,
};

export const Input = Template.bind({});
Input.args = {
  ...primary,
  chipType: 'input',
};

export const InputWithAvatar = Template.bind({});
InputWithAvatar.args = {
  ...primary,
  chipType: 'input',
  avatarIcon: 'person',
};

export const Suggestion = Template.bind({});
Suggestion.args = {
  ...primary,
  chipType: 'suggestion',
  leadingIcon: 'emoji_objects',
};
