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
  --md-sys-state-focus-indicator-thickness: 0.1875rem;
  --md-sys-typescale-label-large-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --md-sys-typescale-label-large-line-height: 20pt;
  --md-sys-typescale-label-large-size: 0.8125rem;
  --md-sys-typescale-label-large-weight: 500;
  --md-ripple-hover-color: rgba(29, 27, 32, 0.15);;
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
  leadingIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18"
      viewBox="0 -960 960 960"
      width="18"
    >
      <path d="M171.783-149.782q-42.242 0-71.622-29.379-29.38-29.38-29.38-71.622v-458.434q0-42.242 29.38-71.622 29.38-29.379 71.622-29.379h616.434q42.242 0 71.622 29.379 29.379 29.38 29.379 71.622v458.434q0 42.242-29.379 71.622-29.38 29.379-71.622 29.379H171.783Zm0-101.001h616.434v-380.434H171.783v380.434ZM300-284.5 247.5-337l103-104-104-104 53.5-52.5L456.5-441 300-284.5Zm182.5 1v-75h235v75h-235Z" />
    </svg>
  ),
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  ...primary,
  trailingIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18"
      viewBox="0 -960 960 960"
      width="18"
    >
      <path d="M110.782-110.782v-341.001h101.001v168.847l465.281-465.281H508.217v-101.001h341.001v341.001H748.217v-168.847L282.936-211.783h168.847v101.001H110.782Z" />
    </svg>
  ),
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  ...primary,
  leadingIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18"
      viewBox="0 -960 960 960"
      width="18"
    >
      <path d="M171.783-149.782q-42.242 0-71.622-29.379-29.38-29.38-29.38-71.622v-458.434q0-42.242 29.38-71.622 29.38-29.379 71.622-29.379h616.434q42.242 0 71.622 29.379 29.379 29.38 29.379 71.622v458.434q0 42.242-29.379 71.622-29.38 29.379-71.622 29.379H171.783Zm0-101.001h616.434v-380.434H171.783v380.434ZM300-284.5 247.5-337l103-104-104-104 53.5-52.5L456.5-441 300-284.5Zm182.5 1v-75h235v75h-235Z" />
    </svg>
  ),
  trailingIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18"
      viewBox="0 -960 960 960"
      width="18"
    >
      <path d="M110.782-110.782v-341.001h101.001v168.847l465.281-465.281H508.217v-101.001h341.001v341.001H748.217v-168.847L282.936-211.783h168.847v101.001H110.782Z" />
    </svg>
  ),
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
  avatarIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M480-488.609q-72.979 0-123.599-50.62-50.619-50.62-50.619-123.599 0-72.978 50.619-123.315 50.62-50.338 123.599-50.338 72.979 0 123.599 50.338 50.619 50.337 50.619 123.315 0 72.979-50.619 123.599-50.62 50.62-123.599 50.62ZM149.782-144.172v-126.349q0-38.258 19.686-69.915 19.687-31.658 53.075-48.488 62.674-30.555 127.162-46.37Q414.192-451.109 480-451.109q66.891 0 131.402 15.532 64.511 15.533 126.055 46.087 33.388 16.749 53.075 48.25 19.686 31.501 19.686 70.688v126.38H149.782Zm101.001-101.002h458.434v-22.521q0-10.641-5.5-19.347-5.5-8.707-15-13.457-50.108-24.239-102.087-36.924-51.979-12.685-106.63-12.685-53.87 0-106.804 12.685-52.935 12.685-101.913 36.924-9.5 4.75-15 13.457-5.5 8.706-5.5 19.347v22.521ZM479.98-589.611q30.194 0 51.715-21.501 21.522-21.502 21.522-51.696 0-30.193-21.502-51.432-21.501-21.239-51.695-21.239t-51.715 21.341q-21.522 21.342-21.522 51.31 0 30.202 21.502 51.71 21.501 21.507 51.695 21.507Zm.02-73.217Zm0 417.654Z" />
    </svg>
  ),
};

export const Suggestion = Template.bind({});
Suggestion.args = {
  ...primary,
  chipType: 'suggestion',
  leadingIcon: 'emoji_objects',
};
