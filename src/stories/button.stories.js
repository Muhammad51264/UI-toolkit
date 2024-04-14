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
          --md-sys-shape-corner-full: 20px;
      `}
    </style>
    <Button {...args} />
  </>
);

export const Filled = Template.bind({});
Filled.args = {
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
  variant: 'filled',
  onClick: () => {
    console.log('Filled clicked');
  },
};

export const Elevated = Template.bind({});
Elevated.args = {
  disabled: false,
  variant: 'elevated',
  onClick: () => {
    console.log('Elevated clicked');
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  icon: (
    <svg slot="icon" viewBox="0 0 48 48">
      <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
    </svg>
  ),
  disabled: false,
  variant: 'outlined',
  onClick: () => {
    console.log('Outlined clicked');
  },
};

export const FilledTonal = Template.bind({});
FilledTonal.args = {
  disabled: false,
  hasIcon: true,
  variant: 'tonal',
  onClick: () => {
    console.log('Tonal clicked');
  },
};

export const TextButton = Template.bind({});
TextButton.args = {
  disabled: false,
  variant: 'text',
  type: 'submit',
  onClick: () => {
    console.log('Text button clicked');
  },
};
