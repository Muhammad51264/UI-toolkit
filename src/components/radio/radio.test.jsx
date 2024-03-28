import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Radio from './radio';
import { deepQuerySelector, screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';

describe('Radio component', () => {
  beforeAll(() => {
    ElementInternals.prototype.setValidity = jest.fn();
  });

  const renderRadio = (props) => {
    render(<Radio {...props} />);
    return waitFor(() => screen.getByShadowRole('radio'));
  };

  const getRadioInput = (mdRadioHost) => {
    return deepQuerySelector(mdRadioHost, 'input[type="radio"]');
  };

  it('It renders successfully', async () => {
    await renderRadio();
  });

  it('Clicking on a radio button should select it', async () => {
    const mdRadioHost = await renderRadio();
    const radioInput = getRadioInput(mdRadioHost);

    fireEvent.click(radioInput);

    expect(radioInput).toBeChecked();
  });

  it('Clicking on a disabled radio button should not select it', async () => {
    const mdRadioHost = await renderRadio({ disabled: true });
    const radioInput = getRadioInput(mdRadioHost);

    await userEvent.click(radioInput);

    expect(radioInput).not.toBeChecked();
  });

  it('Clicking on a selected radio button should not deselect it', async () => {
    const mdRadioHost = await renderRadio({ checked: true });
    const radioInput = getRadioInput(mdRadioHost);
    fireEvent.click(radioInput);

    expect(radioInput).toBeChecked();
  });
});
