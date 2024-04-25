import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
  const renderButton = (props) => {
    render(<Button {...props} icon={<div>icon</div>} text={'test'} />);
  };
  it('renders successfully', () => {
    renderButton();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders filled button with filled styles', () => {
    renderButton({ variant: 'filled' });

    const button = screen.getByRole('button');
    expect(button).toHaveClass('filled');
  });

  it('renders elevated button with elevated styles', () => {
    renderButton({ variant: 'elevated' });

    const button = screen.getByRole('button');
    expect(button).toHaveClass('elevated');
  });

  it('renders outlined button with outlined styles', () => {
    renderButton({ variant: 'outlined' });

    const button = screen.getByRole('button');
    expect(button).toHaveClass('outlined');
  });

  it('renders tonal button with tonal styles', () => {
    renderButton({ variant: 'tonal' });

    const button = screen.getByRole('button');
    expect(button).toHaveClass('tonal');
  });

  it('renders textType button with textType styles', () => {
    renderButton({ variant: 'textType' });

    const button = screen.getByRole('button');
    expect(button).toHaveClass('textType');
  });

  it('Disabled buttons should be disabled', () => {
    renderButton({ disabled: true });

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('disabled');
  });

  it('Draggable buttons should have draggable attribute', () => {
    renderButton({ draggable: true });

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('draggable');
  });
});
