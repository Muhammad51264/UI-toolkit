import '@material/web/icon/icon.js';
import { render, fireEvent, screen } from '@testing-library/react';
import FabIcon from './fabIcon.jsx';
import React from 'react';

const renderFabIcon = (props) => {
  return render(
    <FabIcon {...props}>
      <svg data-testid="test svg">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v6h-4v-6z" />
      </svg>
    </FabIcon>
  );
};

describe('Input component', () => {
  it('renders with default props and functionality', async () => {
    renderFabIcon({
      size: 'large',
      variant: 'primary',
    });
    const fabButton = screen.getByRole('button');

    expect(fabButton).toBeInTheDocument();
    expect(fabButton).toHaveClass('fab');
    expect(fabButton).toHaveClass('large');
    expect(fabButton).toHaveClass('primary');

    const slot = fabButton.querySelector('slot[name="icon"]');
    expect(slot).toHaveAttribute('aria-hidden', 'false');

    const icon = screen.getByTestId('test svg');
    expect(icon).toBeInTheDocument();
  });

  it('renders with a label when a label prop is passed', async () => {
    renderFabIcon({ ariaLabel: 'fabIcon test', label: 'fab icon' });
    const fabButton = screen.getByLabelText('fabIcon test');

    expect(fabButton).toBeInTheDocument();
    expect(fabButton).toHaveClass('fab');

    const slot = fabButton.querySelector('slot[name="icon"]');
    expect(slot).toHaveAttribute('aria-hidden', 'true');

    const labelSpan = screen.getByText('fab icon');
    expect(labelSpan).toBeInTheDocument();

    const icon = screen.getByTestId('test svg');
    expect(icon).toBeInTheDocument();
  });

  it('renders with as small if the size prop is small', async () => {
    renderFabIcon({ ariaLabel: 'fabIcon test', size: 'small' });
    const fabButton = screen.getByRole('button');

    expect(fabButton).toBeInTheDocument();
    expect(fabButton).toHaveClass('small');
  });

  it('renders with as primary if the variant prop is primary', async () => {
    renderFabIcon({ ariaLabel: 'fabIcon test', variant: 'primary' });
    const fabButton = screen.getByRole('button');

    expect(fabButton).toBeInTheDocument();
    expect(fabButton).toHaveClass('primary');
  });
});
