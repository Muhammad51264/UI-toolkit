import React, { useEffect, useState } from 'react';
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
  const [addedSnackbar, setAddedSnackbars] = useState(false);

  useEffect(() => {
    let enableButton;
    if (addedSnackbar) {
      enableButton = setTimeout(
        () => setAddedSnackbars(false),
        args.animationDuration ?? 3000
      );
    }
    return () => clearTimeout(enableButton);
  }, [addedSnackbar]);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <Snackbar {...args} animationDuration={0} />
        <button
          onClick={() => setAddedSnackbars(true)}
          disabled={addedSnackbar}
        >
          Add Snackbar
        </button>
        <div
          style={{
            position: 'fixed',
            bottom: '10%',
            width: '30vw',
            left: '5%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.625rem',
          }}
        >
          {addedSnackbar && (
            <Snackbar
              {...args}
              closeButtonClickEvent={() => setAddedSnackbars(false)}
            />
          )}
        </div>
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

export const CustomMinWidth = Template.bind({});
CustomMinWidth.args = {
  ...primary,
  minWidth: '18.75rem',
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
  text: 'first line',
  secondText: 'second line',
  actionClickEvent: () => console.log('action'),
  closeButton: true,
  closeButtonClickEvent: () => console.log('close'),
};

export const WithCustomTextMaxWidth = Template.bind({});
WithCustomTextMaxWidth.args = {
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

export const WithCustomAnimationDuration = Template.bind({});
WithCustomAnimationDuration.args = {
  ...primary,
  ...primary,
  action: 'Action',
  text: 'first line',
  closeButton: true,
  closeButtonClickEvent: () => console.log('close'),
  animationDuration: 7000,
};
