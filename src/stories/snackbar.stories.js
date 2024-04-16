import React, { useState } from 'react';
import Snackbar from '../components/snackbar';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Snackbar',
  component: Snackbar,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (args) => {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <>
      <style>
        {`
        :root{
            --md-sys-color-inverse-surface: #322F35;
            --md-sys-shape-corner-extra-small: 0.25rem;
            --md-sys-typescale-label-large-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            --md-sys-typescale-body-medium-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            --md-sys-typescale-label-large-weight: 500;
            --md-sys-typescale-body-medium-weight: 400;
            --md-sys-typescale-label-large-size: 1rem;
            --md-sys-typescale-body-medium-size: 1rem;
            --md-sys-color-inverse-primary: #D0BCFF;
            --md-sys-color-inverse-on-surface: #F5EFF7;
            --md-ripple-pressed-color: transparent;
        }

        `}
      </style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <Snackbar {...args} isClosed={isClosed} />
        <button onClick={() => setIsClosed((prev) => !prev)}>
          show Snackbar
        </button>
      </div>
    </>
  );
};

const primary = {
  action: '',
  text: 'default text',
};

export const Default = Template.bind({});
Default.args = {
  ...primary,
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  ...primary,
  action: 'Action',
  actionClickEvent: () => console.log('action'),
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  ...primary,
  closeButton: true,
  closeButtonClickEvent: () => console.log('close'),
};

export const WithActionAndCloseButton = Template.bind({});
WithActionAndCloseButton.args = {
  ...primary,
  action: 'Action',
  actionClickEvent: () => console.log('action'),
  closeButton: true,
  closeButtonClickEvent: () => console.log('close'),
};

export const TwoLineSnackBar = Template.bind({});
TwoLineSnackBar.args = {
  ...primary,
  action: 'Action',
  textMaxWidth: '25rem',
  text: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        margin: '5px 0',
      }}
    >
      <div>First line</div>
      <div>Second line</div>
    </div>
  ),
  actionClickEvent: () => console.log('action'),
  closeButton: true,
  closeButtonClickEvent: () => console.log('close'),
};
