import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';
import { expect } from '@storybook/test';
import Chip from './chip.jsx';

describe('Chip component', () => {
  it('renders successfully', () => {
    render(<Chip />);
  });

  it('renders elevated chip successfully', () => {
    render(<Chip elevated={true} />);
    const chipContainer = screen.getByTestId('chip');
    expect(chipContainer).toHaveClass('elevated');
  });

  it('renders disabled chip without ripple effect', async () => {
    render(<Chip disabled={true} />);
    const ripple = screen.queryByTestId('ripple');
    expect(ripple).toBeNull();
  });

  it('drags a draggable chip', () => {
    render(<Chip draggable={true} />);
    const chipContainer = screen.getByTestId('chip');
    expect(chipContainer).toHaveAttribute('draggable', 'true');
    fireEvent.dragStart(chipContainer);
    expect(chipContainer).toHaveClass('dragged');
    fireEvent.dragEnd(chipContainer);
    expect(chipContainer).not.toHaveClass('dragged');
  });

  it('shows ripple effect when clicking on chip', async () => {
    render(<Chip />);
    const ripple = screen.getByTestId('ripple');
    expect(ripple).toBeEmptyDOMElement();
    await userEvent.dblClick(ripple);
    expect(ripple).not.toBeEmptyDOMElement();
  });

  it('renders filter chip successfully', () => {
    render(<Chip chipType={'filter'} />);
    const chipContainer = screen.getByTestId('chip');
    expect(chipContainer).toHaveClass('filter');
  });

  it('selects filter chip successfully', () => {
    render(<Chip chipType={'filter'} selected={true} />);
    const chipContainer = screen.getByTestId('chip');
    expect(chipContainer).toHaveClass('selected');
  });

  it('renders all icons successfully', () => {
    render(
      <Chip
        chipType={'input'}
        avatarIcon={'close'}
        trailingIcon={'close'}
        leadingIcon={'close'}
      />
    );
    const icons = document.querySelectorAll('span');
    expect(icons.length).toBe(5);
  });

  it('does not allow selecting icons when chip is disabled', () => {
    render(
      <Chip
        chipType={'input'}
        avatarIcon={'close'}
        trailingIcon={'close'}
        leadingIcon={'close'}
        disabled={true}
      />
    );
    const icons = document.querySelectorAll('span');
    icons.forEach((icon, index) => {
      if (index === 2) return; // this is label container
      expect(icon).toHaveAttribute('tabIndex', '-1');
    });
  });
});
