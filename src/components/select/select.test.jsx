import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { deepQuerySelector, screen } from 'shadow-dom-testing-library';
import { expect } from '@storybook/test';
import Select from './select.jsx';

describe('Select component', () => {
  const openMenu = jest.fn();
  const closeMenu = jest.fn();
  const openingMenu = jest.fn();
  const closingMenu = jest.fn();
  const changeMenu = jest.fn();
  const inputMenu = jest.fn();

  const events = [
    {
      eventFunction: openMenu,
      eventName: 'opened',
    },
    {
      eventFunction: closeMenu,
      eventName: 'closed',
    },
    {
      eventFunction: openingMenu,
      eventName: 'opening',
    },
    {
      eventFunction: closingMenu,
      eventName: 'closing',
    },
    {
      eventFunction: changeMenu,
      eventName: 'change',
    },
    {
      eventFunction: inputMenu,
      eventName: 'input',
    },
  ];

  const renderSelect = (props) => {
    render(
      <Select
        {...props}
        options={[
          { content: 'option - 1', id: 0, value: 'option1' },
          { content: 'option - 2', id: 1, value: 'option2' },
          { content: 'option - 3', id: 2, value: 'option3' },
        ]}
      />
    );
  };

  const getSelectContainer = async () => {
    let selectContainer;
    await waitFor(() => {
      selectContainer = screen.getAllByRole('presentation')[0];
    });

    return selectContainer;
  };

  it('renders successfully', () => {
    renderSelect();
  });

  it('renders filled select successfully', () => {
    renderSelect({ isFilled: true });

    const filledSelect = document.querySelector('md-filled-select');

    expect(filledSelect).toBeInTheDocument();
  });

  it('renders select with icon', () => {
    renderSelect({ icon: <div>icon</div> });

    const filledSelect = document.querySelector('md-icon');

    expect(filledSelect).toBeInTheDocument();
  });

  it('renders select options', () => {
    renderSelect();

    const mdSelectElements = screen.getAllByRole('presentation');

    const mdSelectOptions = mdSelectElements.slice(1, 4);

    mdSelectOptions.forEach((option) => {
      expect(option).toBeVisible();
    });
  });

  it('displays select label', async () => {
    renderSelect({ label: 'test' });

    const selectContainer = await getSelectContainer();

    const label = await deepQuerySelector(selectContainer, '.label');

    expect(label).toHaveTextContent('test');
  });

  it('displays select supporting text', async () => {
    renderSelect({ 'supporting-text': 'test' });

    const selectContainer = await getSelectContainer();

    expect(selectContainer).toHaveAttribute('supporting-text', 'test');
  });

  it('displays select error text', async () => {
    renderSelect({ error: true, 'error-text': 'test' });

    const selectContainer = await getSelectContainer();

    expect(selectContainer).toHaveAttribute('error-text', 'test');
  });

  it('is disabled', async () => {
    renderSelect({ disabled: true });

    const selectContainer = await getSelectContainer();

    expect(selectContainer).toHaveAttribute('disabled');
  });

  it('is required', async () => {
    renderSelect({ required: true });

    const selectContainer = await getSelectContainer();

    const fieldContainer = await deepQuerySelector(
      selectContainer,
      '.with-end'
    );

    expect(fieldContainer).toHaveClass('required');
  });

  it('displays selected option in the select input', async () => {
    renderSelect();

    const shadowElement = await screen.findAllByShadowRole('option');

    await fireEvent(shadowElement[0], new MouseEvent('click'));

    await expect(shadowElement[0]).toHaveClass('list-item selected');
  });

  it('triggers select menu events correctly (open, close, opening, closing, input, change)', async () => {
    renderSelect({
      onOpened: openMenu,
      onClosed: closeMenu,
      onOpening: openingMenu,
      onClosing: closingMenu,
      onInput: inputMenu,
      onChange: changeMenu,
    });

    let host;
    await waitFor(() => {
      host = screen.getAllByRole('presentation')[0];
    });

    events.forEach((event) => {
      fireEvent(host, new MouseEvent(event.eventName));
      expect(event.eventFunction).toHaveBeenCalledOnce();
    });
  });
});
