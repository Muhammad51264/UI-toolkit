import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Card from './card';
import { deepQuerySelector, screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';
import { expect } from '@storybook/test';
import { Ripple } from '@material/web/ripple/internal/ripple';

// Mock the startPressAnimation method
Ripple.prototype.startPressAnimation = jest.fn(async () => {
  const mdRippleHost = document.querySelector('md-ripple');
  const shadowRoot = mdRippleHost.shadowRoot;
  const rippleSurface = deepQuerySelector(shadowRoot, '.surface');

  rippleSurface.classList += ' pressed';
});

describe('Card component', () => {
  const displayCard = (props) => {
    render(
      <Card {...props}>
        <h1>test</h1>
      </Card>
    );
  };
  const getElementInShadowRoot = async (hostSelector, elementSelector) => {
    const host = await document.querySelector(hostSelector);
    const shadowRoot = host.shadowRoot;
    const elementInShadowRoot = deepQuerySelector(shadowRoot, elementSelector);
    return elementInShadowRoot;
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

  it('Card shows ribble effects when clicking on it', async () => {
    displayCard();

    const card = screen.getByTestId('card');

    const rippleSurface = await getElementInShadowRoot('md-ripple', '.surface');
    await userEvent.click(card);

    expect(rippleSurface).toHaveClass('surface hovered pressed');
  });

  it('Card has elevation effect', async () => {
    displayCard();

    const rippleSurface = await getElementInShadowRoot(
      'md-elevation',
      '.shadow'
    );

    expect(rippleSurface).toBeInTheDocument();
  });

  it('Card shows ribble effects when hovering over it', async () => {
    displayCard();

    const card = screen.getByTestId('card');

    const rippleSurface = await getElementInShadowRoot('md-ripple', '.surface');
    await userEvent.hover(card);

    expect(rippleSurface).toHaveClass('surface hovered');
  });

  it('Disabled card has no ribble effect', () => {
    displayCard({ disabled: true });

    const mdRippleHost = document.querySelector('md-ripple');
    expect(mdRippleHost).toBeNull();
  });

  it('Renders a draggable card', () => {
    displayCard({ draggable: true });

    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('draggable', 'true');
  });

  it('Drags a draggable card', () => {
    render(<Card draggable={true} />)
  
    const card = screen.getByTestId('card');
  
    fireEvent.dragStart(card);
    expect(card).toHaveClass('draggable');
  
    fireEvent.dragEnd(card);
    expect(card).not.toHaveClass('draggable');
  });
});
