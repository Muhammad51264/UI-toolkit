import React from 'react';
import Progress from '../components/progress';

export default {
  title: 'progress',
  component: Progress,
};

const Template = (args) => <Progress {...args}></Progress>;

export const Circular = Template.bind({});
Circular.args = {
  variant: 'circular',
};

export const Bar = Template.bind({});
Bar.args = {
  variant: 'linear',
};
