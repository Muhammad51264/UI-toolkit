import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Card from './card';
import { screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';
import { expect } from '@storybook/test';


describe('Card component', () => {
  const displayCard = (props) => {
    render(
      <Card {...props}>
        <h1>test</h1>
      </Card>
    );
  };

  it('It renders successfully', () => {
    displayCard();
  });

  it('Renders filled Card', () => {
    displayCard({ cardType: 'filled' });

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('filled');
  });

  it('Renders outlined Card', () => {
    displayCard({ cardType: 'outlined' });

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('outlined');
  });

  it('Card Displays Its children', () => {
    displayCard();

    const header = screen.getByText('test');
    expect(header).toBeVisible();
  });

  it('Card shows ripple effects when clicking on it', async () => {
    displayCard();

    const ripple = screen.getByTestId('ripple');

    expect(ripple).toBeEmptyDOMElement();
    
    await userEvent.dblClick(ripple);

    expect(ripple).not.toBeEmptyDOMElement();
  });

  it('Card has elevation effect', async () => {
    displayCard();

    const card = screen.getByTestId('card');

    expect(card).toHaveClass('elevated');
  });

  it('Disabled card has no ripple effect', () => {
    displayCard({ disabled: true });

    const ripple = screen.queryByTestId('ripple');
    expect(ripple).toBeNull();
  });

  it('Renders a draggable card', () => {
    displayCard({ draggable: true });

    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('draggable', 'true');
  });

  it('Drags a draggable card', () => {
    displayCard({ draggable: true });
  
    const card = screen.getByTestId('card');
  
    fireEvent.dragStart(card);
    expect(card).toHaveClass('draggable');
  
    fireEvent.dragEnd(card);
    expect(card).not.toHaveClass('draggable');
  });
});
