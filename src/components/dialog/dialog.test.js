import '@material/web/button/text-button';
import { render, fireEvent } from '@testing-library/react';
import { screen, deepQuerySelector } from 'shadow-dom-testing-library';
import React, { useRef } from 'react';
import Dialog from './dialog.jsx';

HTMLDialogElement.prototype.showModal = jest.fn(function mock() {
  this.open = true;
});

HTMLDialogElement.prototype.close = jest.fn(function mock() {
  this.open = false;
});

const closeHandler = jest.fn();

const TestingComponent = () => {
  const dialogRef = useRef();

  return (
    <Dialog
      ref={dialogRef}
      onClose={closeHandler}
      open
      aria-label="Test"
      headlineElement={<p data-testid="dialogHeadline">test dialog</p>}
      actionElement={
        <>
          <button
            form="form"
            value="close"
            id="closeButton"
            onClick={(e) => {
              dialogRef.current.close();
            }}
            type="submit"
          >
            CLOSE
          </button>
        </>
      }
    >
      <form
        id="form"
        method="dialog"
        role="form"
        onSubmit={() => {
          dialogRef.current.close();
        }}
      >
        <p>this is a testing gialog with action buttons</p>
      </form>
    </Dialog>
  );
};

describe('Dialog component', () => {
  it('renders with default props and functionality', async () => {
    render(<TestingComponent />);

    const dialogContainer = await screen.getByShadowRole('presentation');
    expect(dialogContainer).toBeInTheDocument();
    expect(dialogContainer.open).toBe(true);

    const headlineElement = await screen.getByShadowTestId('dialogHeadline');
    expect(headlineElement).toBeInTheDocument();

    const closeButton = deepQuerySelector(dialogContainer, '#closeButton');
    expect(closeButton).toBeInTheDocument();

    const form = await screen.getByShadowRole('form');

    await fireEvent.submit(form);

    expect(closeHandler).toBeCalledTimes(1);
  });
});
