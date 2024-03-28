import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Select from './select';
import { deepQuerySelector, screen } from 'shadow-dom-testing-library';
import { expect } from '@storybook/test';

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

  it('It renders successfully', () => {
    renderSelect();
  });

  it('Filled select renders successfully', () => {
    renderSelect({ isFilled: true });

    const filledSelect = document.querySelector('md-filled-select');

    expect(filledSelect).toBeInTheDocument();
  });

  it('Select renders with icon', () => {
    renderSelect({ icon: <div>icon</div> });

    const filledSelect = document.querySelector('md-icon');

    expect(filledSelect).toBeInTheDocument();
  });

  it('Select options are rendered', () => {
    renderSelect();

    const mdSelectElements = screen.getAllByRole('presentation');

    const mdSelectOptions = mdSelectElements.slice(1, 4);

    mdSelectOptions.forEach((option) => {
      expect(option).toBeVisible();
    });
  });

  it('Select label is appearing', async () => {
    renderSelect({ label: 'test' });

    let selectContainer = await getSelectContainer();

    const label = await deepQuerySelector(selectContainer, '.label');

    expect(label).toHaveTextContent('test');
  });

  it('Select supporting text is visible', async () => {
    renderSelect({ supportingText: 'test' });

    let selectContainer = await getSelectContainer();

    expect(selectContainer).toHaveAttribute('supporting-text', 'test');
  });

  it('Select error text is visible', async () => {
    renderSelect({ error: true, errorText: 'test' });

    let selectContainer = await getSelectContainer();

    expect(selectContainer).toHaveAttribute('error-text', 'test');
  });

  it.only('Select is disabled', async () => {
    renderSelect({ disabled: true });

    let selectContainer = await getSelectContainer();

    expect(selectContainer).toHaveAttribute('disabled');

});

  it('Selecting an option will display it in the select input', async () => {
    renderSelect();

    const shadowElement = await screen.findAllByShadowRole('option');

    await fireEvent(shadowElement[0], new MouseEvent('click'));

    await expect(shadowElement[0]).toHaveClass('list-item selected');
  });

  it('Select menu events are triggered correctly - open, close, opening, closing, input, change', async () => {
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
