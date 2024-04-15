import React from 'react';
import TimePicker from '../components/time-picker';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Time picker',
  component: TimePicker,
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
    --md-sys-color-surface-container-highest:#E6E0E9;
    --md-sys-color-surface-container-high :#ECE6F0;
    --md-sys-shape-corner-extra-large: 28px;
    --md-sys-color-on-surface-variant :#49454F;
    --md-sys-typescale-label-medium-font:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --md-sys-typescale-label-medium-line-height:16pt;  
    --md-sys-typescale-label-medium-size :10pt;
    --md-sys-typescale-display-large-font :system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --md-sys-typescale-label-medium-weight: 500;
    --md-sys-typescale-display-large-line-height: 64pt;
    --md-sys-typescale-label-medium-tracking: 0.5pt;
    --md-sys-typescale-display-large-size: 57pt;
    --md-sys-shape-corner-small: 8px;
    --md-sys-color-surface-container-highest:#E6E0E9;
    --md-sys-color-primary-container:#EADDFF;
    --md-sys-color-tertiary-container:#FFD8E4;
    --md-sys-color-outline: #79747E;
    --md-sys-typescale-display-large-weight:400;
    --md-sys-color-on-primary-container:#21005D;
    --md-sys-color-on-surface :#1D1B20;
    --md-sys-typescale-display-large-tracking: -0.25pt;
    }
   `}
    </style>

    <TimePicker {...args} />
  </>
);

const primary = {
  headline: 'Select time',
};

export const Default = Template.bind({});
Default.args = {
  ...primary,
};
