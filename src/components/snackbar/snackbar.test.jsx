import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Snackbar from '.';
import { userEvent } from '@storybook/test';

describe('Snackbar component', () => {
  it('Snackbar renders successfully', async () => {
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

    await userEvent.click(actionButton);
    await userEvent.click(closeButton);

    expect(actionButtonEventFunction).toHaveBeenCalled();
    expect(closeButtonEventFunction).toHaveBeenCalled();
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
});
