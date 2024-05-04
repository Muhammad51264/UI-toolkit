/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { expect, userEvent } from '@storybook/test';
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

  it('clicking OK will excecute the passed function with time as it parameter successfully', async () => {
    const mockOnAcceptFunction = jest.fn((time) => time);
    renderTimePicker({ onAccept: mockOnAcceptFunction });
    await openTimePicker();

    const okButton = screen.getByText('OK');

    await act(async () => {
      await userEvent.click(okButton);
    });

    expect(mockOnAcceptFunction).toHaveReturnedWith('01:00 AM');
  });

  it('clicking OK in twenty-four hour mode will excecute the passed function with time as it parameter successfully', async () => {
    const mockOnAcceptFunction = jest.fn((time) => time);
    renderTimePicker({
      onAccept: mockOnAcceptFunction,
      twentyFourHourMode: true,
    });
    await openTimePicker();

    const okButton = screen.getByText('OK');

    await act(async () => {
      await userEvent.click(okButton);
    });

    expect(mockOnAcceptFunction).toHaveReturnedWith('01:00');
  });

  it('clicking on the clock Icon will remove the analog clock input', async () => {
    renderTimePicker();
    await openTimePicker();

    const clockButton = screen.getByTestId('clock');

    const analogClock = screen.getByTestId('analog-clock');

    await act(async () => {
      await userEvent.click(clockButton);
    });

    expect(analogClock).toHaveClass('hidden-clock');
  });

  it('clicking on the clock Icon will remove the analog clock input in horizontal mode', async () => {
    renderTimePicker({ isHorizontal: true });
    await openTimePicker();

    const clockButton = screen.getByTestId('clock');

    const analogClock = screen.getByTestId('analog-clock');

    await act(async () => {
      await userEvent.click(clockButton);
    });

    expect(analogClock).toHaveClass('hidden-clock-horizontal');
  });

  it('renders in twelve hour mode successfully', async () => {
    renderTimePicker({});
    await openTimePicker();

    const analogClockLabels = screen.getAllByTestId('analog-clock-label');

    expect(analogClockLabels.length).toBe(12);
  });

  it('renders in twenty-four hour mode successfully', async () => {
    renderTimePicker({ twentyFourHourMode: true });
    await openTimePicker();

    const analogClockLabels = screen.getAllByTestId('analog-clock-label');

    expect(analogClockLabels.length).toBe(24);
  });

  it('renders in horizontal mode successfully', async () => {
    renderTimePicker({ isHorizontal: true });
    await openTimePicker();

    const analogClock = screen.getByTestId('analog-clock');

    expect(analogClock).toHaveClass('clock-container-horizontal');
  });

  it('clicking on any hour on the analog clock input will set the time hour value', async () => {
    const mockOnTimeChangeFunction = jest.fn((time) => time);

    renderTimePicker({ onTimeChange: mockOnTimeChangeFunction });
    await openTimePicker();

    const hourInput = screen.getByText('9');

    await act(async () => {
      await userEvent.click(hourInput);
    });

    expect(hourInput).toHaveClass('clock-chosen');
    expect(mockOnTimeChangeFunction).toHaveReturnedWith('09:00 AM');
  });

  it('clicking on Period buttons will change the time period to AM or PM', async () => {
    const mockOnTimeChangeFunction = jest.fn((time) => time);

    renderTimePicker({ onTimeChange: mockOnTimeChangeFunction });
    await openTimePicker();

    const pmButton = screen.getByText('PM');

    await act(async () => {
      await userEvent.click(pmButton);
    });

    expect(pmButton).toHaveClass('selected');
    expect(mockOnTimeChangeFunction).toHaveReturnedWith('01:00 PM');
  });

  it('inputing a value in the time selector inputs will change the time', async () => {
    const mockOnTimeChangeFunction = jest.fn((time) => time);

    renderTimePicker({ onTimeChange: mockOnTimeChangeFunction });
    await openTimePicker();

    const hourInput = screen.getByTestId('Hour');
    const minInput = screen.getByTestId('Minute');

    await act(async () => {
      await userEvent.type(hourInput, '1');
      fireEvent.blur(hourInput);
    });
    expect(mockOnTimeChangeFunction).toHaveReturnedWith('11:00 AM');

    await act(async () => {
      await userEvent.type(minInput, '10');
      fireEvent.blur(minInput);
    });
    expect(mockOnTimeChangeFunction).toHaveReturnedWith('11:10 AM');
  });

  it('inputing hour,min values more than the maximum values will reset them to the maximum values', async () => {
    const mockOnTimeChangeFunction = jest.fn((time) => time);

    renderTimePicker({ onTimeChange: mockOnTimeChangeFunction });
    await openTimePicker();

    const hourInput = screen.getByTestId('Hour');
    const minInput = screen.getByTestId('Minute');

    await act(async () => {
      await userEvent.type(hourInput, '8');
      fireEvent.blur(hourInput);
    });
    expect(mockOnTimeChangeFunction).toHaveReturnedWith('12:00 AM');

    await act(async () => {
      await userEvent.type(minInput, '99');
      fireEvent.blur(minInput);
    });
    expect(mockOnTimeChangeFunction).toHaveReturnedWith('12:59 AM');
  });

  it('inputing hour,min values less than than the minimum values or empty string will reset them to the minimum values', async () => {
    const mockOnTimeChangeFunction = jest.fn((time) => time);

    renderTimePicker({ onTimeChange: mockOnTimeChangeFunction });
    await openTimePicker();

    const hourInput = screen.getByTestId('Hour');
    const minInput = screen.getByTestId('Minute');

    await act(async () => {
      await userEvent.type(hourInput, '{backspace}');
      fireEvent.blur(hourInput);
    });
    expect(mockOnTimeChangeFunction).toHaveReturnedWith('01:00 AM');

    await act(async () => {
      await userEvent.type(minInput, '{backspace}');
      fireEvent.blur(minInput);
    });
    expect(mockOnTimeChangeFunction).toHaveReturnedWith('01:00 AM');
  });

  it('inputing hour values in tweny four hour mode more than 12 will not reset it to 12', async () => {
    const mockOnTimeChangeFunction = jest.fn((time) => time);

    renderTimePicker({
      onTimeChange: mockOnTimeChangeFunction,
      twentyFourHourMode: true,
    });
    await openTimePicker();

    const hourInput = screen.getByTestId('Hour');

    await act(async () => {
      await userEvent.type(hourInput, '8');
      fireEvent.blur(hourInput);
    });
    expect(mockOnTimeChangeFunction).toHaveReturnedWith('18:00');
  });

  it('can not input more than 2 digit in hour and minute inputs', async () => {
    const mockOnTimeChangeFunction = jest.fn((time) => time);

    renderTimePicker({
      onTimeChange: mockOnTimeChangeFunction,
      twentyFourHourMode: true,
    });
    await openTimePicker();

    const hourInput = screen.getByTestId('Hour');
    const minInput = screen.getByTestId('Minute');

    await act(async () => {
      await userEvent.type(hourInput, '999');
      fireEvent.blur(hourInput);
    });
    expect(mockOnTimeChangeFunction).toHaveBeenCalledTimes(2);

    await act(async () => {
      await userEvent.type(minInput, '999');
      fireEvent.blur(minInput);
    });
    expect(mockOnTimeChangeFunction).toHaveBeenCalledTimes(4);
  });

  it('can not input disabled time inputs', async () => {
    renderTimePicker({ disabledTimeSelector: true });
    await openTimePicker();

    const hourInput = screen.getByTestId('Hour');

    expect(hourInput).toHaveAttribute('disabled');
  });
});
