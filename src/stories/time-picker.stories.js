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
    --md-sys-typescale-title-medium-font:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --md-sys-typescale-display-large-font :system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --md-sys-typescale-body-large-font :system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --md-sys-typescale-body-small-font :system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --md-sys-typescale-label-medium-line-height:16pt;
    --md-sys-typescale-body-large-line-height:24pt;
    --md-sys-typescale-body-large-size: 16pt;
    --md-sys-typescale-body-large-weight:400;
    --md-sys-typescale-label-medium-size :10pt;
    --md-sys-typescale-label-medium-weight: 500;
    --md-sys-typescale-display-large-line-height: 64pt;
    --md-sys-typescale-label-medium-tracking: 0.5pt;
    --md-sys-typescale-body-small-size: 12pt;
    --md-sys-typescale-display-large-size: 57pt;
    --md-sys-typescale-title-medium-line-height: 24pt;
    --md-sys-typescale-body-small-line-height :16pt;
    --md-sys-typescale-title-medium-size:16pt;
    --md-sys-shape-corner-small: 8px;
    --md-sys-typescale-title-medium-weight: 500;
    --md-sys-typescale-body-small-weight:400;
    --md-sys-color-primary-container: #EADDFF;
    --md-sys-color-primary:#6750A4;
    --md-sys-color-tertiary-container:#FFD8E4;
    --md-sys-color-outline: #79747E;
    --md-sys-typescale-display-large-weight:400;
    --md-sys-color-on-primary-container:#21005D;
    --md-sys-color-on-surface :#1D1B20;
    --md-sys-color-on-primary :#FFFFFF;
    --md-sys-typescale-title-medium-tracking:0.15pt;
    --md-sys-typescale-body-small-tracking:0.4pt;
    --md-sys-color-on-tertiary-container:#31111D;
    --md-sys-typescale-display-large-tracking: -0.25pt;
    --md-ripple-pressed-color: var(--md-sys-color-on-primary-container)
    }
   `}
    </style>

    <TimePicker
      {...args}
      onTimeChange={(time) => console.log(time)}
      onAccept={(time) => console.log(time)}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <button>Open Time Picker</button>
    </TimePicker>
  </>
);

const primary = {
  headline: 'Select time',
};

export const Default = Template.bind({});
Default.args = {
  ...primary,
};

export const DisabledTimeSelector = Template.bind({});
DisabledTimeSelector.args = {
  ...primary,
  disabledTimeSelector: true,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...primary,
  isHorizontal: true,
};

export const TwentyFourHourMode = Template.bind({});
TwentyFourHourMode.args = {
  ...primary,
  twentyFourHourMode: true,
};
