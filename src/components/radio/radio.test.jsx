import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { deepQuerySelector, screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';
import Radio from './radio.jsx';

describe('Radio component', () => {
  beforeAll(() => {
    ElementInternals.prototype.setValidity = jest.fn();
  });

  const renderRadio = (props) => {
    render(<Radio {...props} />);
    return waitFor(() => screen.getByShadowRole('radio'));
  };

  const getRadioInput = (mdRadioHost) =>
    deepQuerySelector(mdRadioHost, 'input[type="radio"]');

  it('renders successfully', async () => {
    await renderRadio();
  });

  it('selects radio button on click', async () => {
    const mdRadioHost = await renderRadio();
    const radioInput = getRadioInput(mdRadioHost);

    fireEvent.click(radioInput);

    expect(radioInput).toBeChecked();
  });

  it('does not select disabled radio button on click', async () => {
    const mdRadioHost = await renderRadio({ disabled: true });
    const radioInput = getRadioInput(mdRadioHost);

    await userEvent.click(radioInput);

    expect(radioInput).not.toBeChecked();
  });

  it('does not deselect already selected radio button on click', async () => {
    const mdRadioHost = await renderRadio({ checked: true });
    const radioInput = getRadioInput(mdRadioHost);
    fireEvent.click(radioInput);

    expect(radioInput).toBeChecked();
  });
});
