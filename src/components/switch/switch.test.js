import { render, fireEvent, waitFor } from '@testing-library/react';
import { screen } from 'shadow-dom-testing-library';
import React from 'react';
import Switch from './switch.jsx';

const renderSwitch = (props) => render(<Switch {...props} />);

describe('Switch component', () => {
  it('renders with default props and functionality', async () => {
    const changeHandler = jest.fn();

    renderSwitch({ ariaLabel: 'Test Switch', change: changeHandler });

    const switchElement = await screen.findByShadowRole('switch');

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute('aria-label', 'Test Switch');
    expect(switchElement).not.toBeChecked('show-only-selected-icon');

    fireEvent.click(switchElement);
    expect(changeHandler).toBeCalledTimes(1);
    expect(switchElement).toBeChecked();
  });

  it('renders with label', async () => {
    renderSwitch({
      ariaLabel: 'Test Switch',
      label: 'Test Switch Label',
      showOnlySelectedIcon: false,
    });

    const labelInput = await screen.getByShadowText('Test Switch Label');
    expect(labelInput).toBeInTheDocument();
    expect(labelInput).toHaveAttribute('for', 'Test Switch Label');

    const switchElement = await screen.findByShadowRole('switch');
    expect(switchElement).not.toHaveAttribute('show-only-selected-icon');
  });

  it('renders with label and with selected icon only if passed', async () => {
    renderSwitch({
      ariaLabel: 'Test Switch',
      label: 'Test Switch Label',
      showOnlySelectedIcon: true,
    });

    const labelInput = await screen.getByShadowText('Test Switch Label');
    expect(labelInput).toBeInTheDocument();
    expect(labelInput).toHaveAttribute('for', 'Test Switch Label');

    let switchElement;
    await waitFor(() => {
      switchElement = document.querySelector('md-switch');
    });
    expect(switchElement).toHaveAttribute('show-only-selected-icon', 'true');
  });

  it('shows the selected icon only when passed as a prop', async () => {
    renderSwitch({ ariaLabel: 'Test Switch', showOnlySelectedIcon: true });
    let switchElement;
    await waitFor(() => {
      switchElement = document.querySelector('md-switch');
    });
    expect(switchElement).toHaveAttribute('show-only-selected-icon', 'true');
    const ShadowRoot = switchElement.shadowRoot;
    const selectedIcon = ShadowRoot.querySelector('.icon--on');
    expect(selectedIcon).toBeInTheDocument();
  });
});
