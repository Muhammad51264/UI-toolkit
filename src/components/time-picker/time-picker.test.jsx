import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/test';
import TimePicker from '.';

describe('Time Picker component', () => {
  const renderTimePicker = (props) =>
    render(
      <TimePicker {...props}>
        <button>Test</button>
      </TimePicker>
    );

  const openTimePicker = async () => {
    const openButton = screen.getByTestId('open');
    await act(async () => {
      await userEvent.click(openButton);
    });
  };

  it('opens and renders successfully', async () => {
    renderTimePicker();
    await openTimePicker();

    const timePicker = screen.getByTestId('time-picker');

    expect(timePicker).toBeVisible();
  });

  it('closes successfully', async () => {
    renderTimePicker();
    await openTimePicker();

    const timePicker = screen.getByTestId('time-picker');
    const cancelButton = screen.getByText('cancel');

    await act(async () => {
      await userEvent.click(cancelButton);
    });

    expect(timePicker).not.toBeVisible();
  });

  it('clicking OK will excecute the passed function successfully', async () => {
    const mockOnAcceptFunction = jest.fn();
    renderTimePicker({ onAccept: mockOnAcceptFunction });
    await openTimePicker();

    // const timePicker = screen.getByTestId('time-picker');
    const okButton = screen.getByText('OK');

    await act(async () => {
      await userEvent.click(okButton);
    });

    expect(mockOnAcceptFunction).toHaveBeenCalled();
  });
});
