import '@material/web/icon/icon.js';
import { render, fireEvent } from '@testing-library/react';
import { screen, deepQuerySelector } from 'shadow-dom-testing-library';
import Input from './input.jsx';
import React from 'react';

const renderInput = (props) => {
  return render(<Input {...props} />);
};

describe('Input component', () => {
  it('renders with default props and functionality', async () => {
    const inputHandler = jest.fn();

    renderInput({ ariaLabel: 'Test Switch', onInput: inputHandler });

    const mdInput = await screen.findByShadowRole('presentation');
    const inputElement = deepQuerySelector(mdInput, 'input');

    expect(inputElement).toBeInTheDocument();

    fireEvent.input(inputElement, { target: { value: 'New Value' } });

    expect(inputHandler).toBeCalledTimes(1);
    expect(inputElement.value).toBe('New Value');
  });

  it('renders a filled input if isFilled prop is passed', async () => {
    renderInput({ ariaLabel: 'Test Switch', isFilled: true });

    const filledInput = deepQuerySelector(document, 'md-filled-text-field');
    expect(filledInput).toBeInTheDocument();
  });

  it('renders a leading Icon if provided ', async () => {
    renderInput({
      ariaLabel: 'Test Switch',
      hasLeadingIcon: true,
      leadingIcon: <md-icon>settings</md-icon>,
    });

    const iconElement = deepQuerySelector(document, 'md-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('slot', 'leading-icon');
  });

  it('renders a trailing Icon if provided ', async () => {
    renderInput({
      ariaLabel: 'Test Switch',
      hasTrailingIcon: true,
      trailingIcon: <md-icon slot="icon">settings</md-icon>,
    });
    const iconElement = deepQuerySelector(document, 'md-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('slot', 'trailing-icon');
  });
});
