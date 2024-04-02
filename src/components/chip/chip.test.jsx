import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Chip from './chip';
import { deepQuerySelector, screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';
import { Ripple } from '@material/web/ripple/internal/ripple';
import { expect, queries } from '@storybook/test';

Ripple.prototype.startPressAnimation = jest.fn(async () => {
  const mdRippleHost = document.querySelector('md-ripple');
  const shadowRoot = mdRippleHost.shadowRoot;
  const rippleSurface = deepQuerySelector(shadowRoot, '.surface');

  rippleSurface.classList += ' pressed';
});

describe('Chip component', () => {
  it('It renders successfully', () => {
    render(<Chip />);
  });

  it('Elevated chip component renders successfully', () => {
    render(<Chip elevated={true} />);

    const chipContainer = screen.getByTestId('chip');

    expect(chipContainer).toHaveClass('elevated');
  });

  it('disabled chip component has no ribble effect', async () => {
    render(<Chip disabled={true} />);
    const chipContainer = screen.getByTestId('chip');

    expect(chipContainer).toHaveClass('disabled');

    let rippleContainer;
    await waitFor(() => {
      rippleContainer = document.querySelector('md-ripple');
    });

    expect(rippleContainer).toBeNull();
  });

  it('Drags a draggable chip', () => {
    render(<Chip draggable={true} />);

    const chipContainer = screen.getByTestId('chip');

    expect(chipContainer).toHaveAttribute('draggable', 'true');

    fireEvent.dragStart(chipContainer);

    expect(chipContainer).toHaveClass('dragged');

    fireEvent.dragEnd(chipContainer);

    expect(chipContainer).not.toHaveClass('dragged');
  });

  it('Chip component shows ribble effects when clicking on it', async () => {
    render(<Chip />);

    const chipContainer = screen.getByTestId('chip');
    let rippleContainer;
    await waitFor(() => {
      rippleContainer = document.querySelector('md-ripple');
    });
    const ripple = deepQuerySelector(rippleContainer, '.surface');

    await userEvent.click(chipContainer);

    expect(ripple).toHaveClass('surface hovered pressed');
  });

  it('Filter chip component renders successfully', () => {
    render(<Chip chipType={'filter'} />);

    const chipContainer = screen.getByTestId('chip');

    expect(chipContainer).toHaveClass('filter');
  });

  it('Filter chip component can be selected successfully', () => {
    render(<Chip chipType={'filter'} selected={true} />);

    const chipContainer = screen.getByTestId('chip');

    expect(chipContainer).toHaveClass('selected');
  });

  it('All Icons render successfully', () => {
    render(
      <Chip
        chipType={'input'}
        avatarIcon={'close'}
        trailingIcon={'close'}
        leadingIcon={'close'}
      />
    );

    const icons = document.querySelectorAll('md-icon');

    expect(icons.length).toBe(4);
  });

  it('All Icons can not be selected when chip is disabled', () => {
    render(
      <Chip
        chipType={'input'}
        avatarIcon={'close'}
        trailingIcon={'close'}
        leadingIcon={'close'}
        disabled={true}
      />
    );

    const icons = document.querySelectorAll('md-icon');

    icons.forEach((icon) => {
      expect(icon).toHaveAttribute('tabIndex', '-1');
    });
  });
});
