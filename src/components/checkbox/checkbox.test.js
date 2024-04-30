import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen, deepQuerySelector } from 'shadow-dom-testing-library';
import CheckBox from './checkbox.jsx';

const renderCheckbox = (props) => render(<CheckBox {...props} />);

describe('Checkbox component', () => {
  it('renders with default props and functionality', async () => {
    renderCheckbox({ ariaLabel: 'Test' });

    const mdCheckbox = await screen.getByShadowRole('presentation');

    const CheckboxContainer = deepQuerySelector(mdCheckbox, '.container');
    const CheckboxInput = deepQuerySelector(
      mdCheckbox,
      'input[type="checkbox"]'
    );

    expect(CheckboxContainer).toBeInTheDocument();
    expect(CheckboxContainer).toHaveClass('unselected');

    fireEvent(CheckboxInput, new MouseEvent('click'));
    const mdCheckboxAfterClick = await screen.getByShadowRole('presentation');

    const CheckboxContainerAfterClick = deepQuerySelector(
      mdCheckboxAfterClick,
      '.container'
    );

    expect(CheckboxContainerAfterClick).toHaveClass('selected');
  });

  it('renders with label', async () => {
    renderCheckbox({ ariaLabel: 'Test', label: 'Test Checkbox Label' });

    const labelInput = await screen.getByShadowText('Test Checkbox Label');
    expect(labelInput).toBeInTheDocument();
    expect(labelInput).toHaveAttribute('for', 'Test Checkbox Label');
  });
});
