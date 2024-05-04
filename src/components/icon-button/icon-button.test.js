import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import IconButton from './icon-button.jsx';

const renderIconButton = (props) =>
  render(
    <IconButton
      icon={
        <svg data-testid="test svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v6h-4v-6z" />
        </svg>
      }
      {...props}
    ></IconButton>
  );

describe('Icon-button component', () => {
  it('renders with default props and functionality', () => {
    renderIconButton({ ariaLabel: 'test icon button' });
    const button = screen.getByLabelText('test icon button');

    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).not.toHaveClass('standard');

    const iconWrapper = screen.getByTestId('iconWrapper');
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');

    const icon = screen.getByTestId('test svg');

    expect(icon).toBeInTheDocument();
  });

  it('renders as toggleable if passed as a prop', () => {
    renderIconButton({
      toggle: true,
      selectedIcon: (
        <svg data-testid="selected svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v6h-4v-6z" />
        </svg>
      ),
      ariaLabel: 'test icon button',
    });
    const button = screen.getByLabelText('test icon button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('toggleable');

    const icon = screen.getByTestId('test svg');

    expect(icon).toBeInTheDocument();

    fireEvent.click(button);

    const selectedIcon = screen.getByTestId('selected svg');

    expect(selectedIcon).toBeInTheDocument();
  });

  it('renders as an anchor tag if an href is passed as a prop', () => {
    renderIconButton({
      href: 'https://google.com',
      target: '_blank',
      ariaLabel: 'test icon button',
    });
    const anchorElement = screen.getByRole('button');

    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement.tagName).toBe('A');

    const iconWrapper = screen.getByTestId('iconWrapper');
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders as an anchor tag if an href is passed as a prop with an iconWrapper element', () => {
    renderIconButton({
      href: 'https://google.com',
      target: '_blank',
    });
    const anchorElement = screen.getByRole('button');

    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement.tagName).toBe('A');

    const iconWrapper = screen.getByTestId('iconWrapper');
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'false');
  });

  it('renders as outlined if passed as a prop', () => {
    renderIconButton({ variant: 'outlined', ariaLabel: 'test icon button' });
    const button = screen.getByLabelText('test icon button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('outlined');
  });

  it('renders with iconWrapper if the aria label is not passed', () => {
    renderIconButton();

    const iconWrapper = screen.getByTestId('iconWrapper');
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'false');
  });
});
