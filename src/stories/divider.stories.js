import React from 'react';

import Divider from '../components/divider';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (props) => (
  <>
    <style>
      {`
        :root{
          --md-sys-color-outline-variant-light: #CAC4D0;
        }
      `}
    </style>
    <Divider {...props} />
  </>
);

export const Default = Template.bind({});

export const Inset = Template.bind({});
Inset.args = {
  inset: true,
};

export const InsetStart = Template.bind({});
InsetStart.args = {
  insetStart: true,
};

export const InsetEnd = Template.bind({});
InsetEnd.args = {
  insetEnd: true,
};
