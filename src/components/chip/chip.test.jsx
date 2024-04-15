import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Chip from './chip';
import { screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';
import { expect } from '@storybook/test';

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

    const ripple = screen.queryByTestId('ripple');

    expect(ripple).toBeNull();
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

    const ripple = screen.getByTestId('ripple');

    expect(ripple).toBeEmptyDOMElement();

    await userEvent.dblClick(ripple);

    expect(ripple).not.toBeEmptyDOMElement();
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

    const icons = document.querySelectorAll('span');

    expect(icons.length).toBe(5);
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

    const icons = document.querySelectorAll('span');

    icons.forEach((icon, index) => {
      // this is label container
      if (index === 2) return;
      expect(icon).toHaveAttribute('tabIndex', '-1');
    });
  });
});
