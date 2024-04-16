import React from 'react';
import Progress from '../components/progress';

export default {
  title: 'progress',
  component: Progress,
};

const Template = (args) => (
  <>
    <style>
      {`
        :root{
          --md-sys-color-surface-tint-light: #6750A4;
          --md-sys-color-primary-container-light: #EADDFF;
      `}
    </style>
    <Progress {...args}></Progress>
  </>
);

export const Circular = Template.bind({});
Circular.args = {
  variant: 'circular',
};

export const Bar = Template.bind({});
Bar.args = {
  variant: 'linear',
};
