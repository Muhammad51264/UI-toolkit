import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { userEvent } from '@storybook/test';
import Snackbar from '.';

describe('Snackbar component', () => {
  it('Snackbar renders successfully', () => {
    render(<Snackbar />);
    const snackbar = screen.getByTestId('snackbar');
    expect(snackbar).toBeInTheDocument();
  });

  it('Snackbar renders with close and action button', () => {
    render(<Snackbar closeButton={true} action={'action'} />);
    const actionButton = screen.getByText('action');
    const closeButton = screen.getByTestId('close');

    expect(actionButton).toBeVisible();
    expect(closeButton).toBeVisible();
  });

  it('close and action buttons are clickable', async () => {
    const actionButtonEventFunction = jest.fn();
    const closeButtonEventFunction = jest.fn();

    render(
      <Snackbar
        closeButton={true}
        action={'action'}
        actionClickEvent={actionButtonEventFunction}
        closeButtonClickEvent={closeButtonEventFunction}
      />
    );
    const actionButton = screen.getByText('action');
    const closeButton = screen.getByTestId('close');

    await act(async () => {
      await userEvent.click(actionButton);
      await userEvent.click(closeButton);
    });

    expect(actionButtonEventFunction).toHaveBeenCalled();

    await waitFor(() => {
      expect(closeButtonEventFunction).toHaveBeenCalled();
    });
  });

  it('Snackbar renders with one supporting text', () => {
    render(<Snackbar text="test" />);
    const supportingText = screen.getByText('test');

    expect(supportingText).toBeVisible();
  });

  it('Snackbar renders with two supporting texts', () => {
    render(<Snackbar text="test" secondText={'second-text'} />);

    const supportingText = screen.getByText('test');
    const secondSupportingText = screen.getByText('second-text');
    const snackbar = screen.getByTestId('snackbar');

    expect(supportingText).toBeVisible();
    expect(secondSupportingText).toBeVisible();
    expect(snackbar).toHaveClass('secondText');
  });

  it('Snackbar has closed class when clicking on the close button', async () => {
    render(<Snackbar closeButton={true} animationDuration={0} />);
    const snackbar = screen.getByTestId('snackbar');

    const closeButton = await screen.findByRole('button');

    await act(async () => {
      await userEvent.click(closeButton);
    });

    await waitFor(() => {
      expect(snackbar).not.toBeVisible();
    });
  });

  it('Snackbar disappears after few seconds', async () => {
    render(<Snackbar closeButton={true} animationDuration={1000} />);
    const snackbar = screen.getByTestId('snackbar');

    await waitFor(
      () => {
        expect(snackbar).not.toBeVisible();
      },
      { timeout: 1500 }
    );
  });
});
