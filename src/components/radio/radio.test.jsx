import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Radio from './radio';
import { deepQuerySelector, screen } from 'shadow-dom-testing-library';


describe('Radio component', () => {
  beforeAll(() => {
    ElementInternals.prototype.setValidity = function (flags, message) {
      flags = 'mockedFlags';
      message = 'mockedMessage';
    };
  });
  it('It renders successfully', async () => {
    render(<Radio />);

    const inputRadio = await screen.findByShadowRole('radio');
    expect(inputRadio).toBeInTheDocument();
  });

  it('clicking on a radio button should select it', async () => {
    render(<Radio />);

    await waitFor(() => {
      const mdRadioHost = document.querySelector('md-radio');
      expect(mdRadioHost).toBeInTheDocument();
    });

    const shadowRoot = document.querySelector('md-radio').shadowRoot;
    const radioInput = deepQuerySelector(shadowRoot, 'input[type="radio"]');

    expect(radioInput).toBeInTheDocument();
    
    fireEvent.click(radioInput);
    
    expect(radioInput).toBeChecked();
  });

  it('clicking on a disabled radio button should not select it', async () => {
    render(<Radio disabled={true} />);

    screen.debug(document.documentElement, undefined, { indent: 4 });

    await waitFor(() => {
      const mdRadioHost = document.querySelector('md-radio');
      expect(mdRadioHost).toBeInTheDocument();
    });

    const shadowRoot = document.querySelector('md-radio').shadowRoot;
    const radioInput = deepQuerySelector(shadowRoot, 'input[type="radio"]');
    console.log(radioInput);
    fireEvent.click(radioInput);

    expect(radioInput).not.toBeChecked();
  });
});
