import React, { useRef } from 'react';
import '@material/web/button/text-button';
import { CloseIcon } from '@storybook/icons';
import Dialog from '../components/dialog';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Dialog',
  component: Dialog,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (args) => <Dialog {...args}></Dialog>;

export const Default = Template.bind({});
Default.args = {
  open: true,
  headlineElement: <p>dialog</p>,
  children: (
    <form id="form" method="dialog">
      <div>
        <p>this is a simple dialog with action buttons</p>
      </div>
    </form>
  ),
  actionElement: (
    <>
      <md-text-button form="form" value="close">
        Close
      </md-text-button>
      <md-text-button form="form" value="ok" autofocus>
        OK
      </md-text-button>
    </>
  ),
};

export const WithoutActionButtons = () => {
  const dialogRef = useRef();
  return (
    <Dialog
      open
      ref={dialogRef}
      headlineElement={
        <>
          <span style={{ flex: 1 }}>Dialog</span>
          <CloseIcon
            onClick={() => {
              dialogRef.current.close();
            }}
            form="closingform"
          ></CloseIcon>
        </>
      }
    >
      <form id="closingform" method="dialog">
        <p>
          this is floating sheets offer no action buttons at the bottom, but
          there is a close icon button at the top right.
        </p>
      </form>
    </Dialog>
  );
};

export const OpenWithButton = () => {
  const dialogRef = useRef();
  return (
    <>
      <button
        onClick={() => {
          dialogRef.current.show();
        }}
      >
        Open Dialog
      </button>
      <Dialog
        ref={dialogRef}
        headlineElement={
          <>
            <span style={{ flex: 1 }}>Dialog</span>
            <CloseIcon
              onClick={() => {
                dialogRef.current.close();
              }}
              form="opeiningform"
            ></CloseIcon>
          </>
        }
        actionElement={
          <>
            <md-text-button form="opeiningform" value="close">
              Close
            </md-text-button>
            <md-text-button form="opeiningform" value="ok" autofocus>
              OK
            </md-text-button>
          </>
        }
      >
        <form id="opeiningform" method="dialog">
          <p>
            this is floating sheets offer no action buttons at the bottom, but
            there is a close icon button at the top right.
          </p>
        </form>
      </Dialog>
    </>
  );
};
