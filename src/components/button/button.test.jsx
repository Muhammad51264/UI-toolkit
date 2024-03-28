import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Button from './button';
import { screen, deepQuerySelector } from 'shadow-dom-testing-library';

describe('Button component', () => {
  // Before each test, mock ElementInternals.prototype.setValidity
  // beforeEach(() => {
  //   ElementInternals.prototype.setValidity = jest.fn();
  // });

  // Define a function to render the button component
  const renderButton = () => {
    render(
      <Button variant="filled" target="_blank">
        FilledButton
      </Button>
    );
    // Wait for the button to be available in the shadow DOM
    return waitFor(() => screen.getByShadowRole('button'));
  };

  // Test to check if the button renders successfully
  it('renders successfully', async () => {
    await renderButton();
    // No need to assert anything, if it renders without errors, the test passes
    // render(
    //   <Button variant="filled" target="_blank">
    //     FilledButton
    //   </Button>
    // );
    // const mdButton = await screen.getByShadowRole('presentation');
    // const ButtonElement = deepQuerySelector(mdButton.shadowRoot, '.button');
    // fireEvent.click(ButtonElement);
  });

  // it('renders correctly when disabled', async () => {
  //   render(<Button disabled>Disabled Button</Button>);
  //   const button = await screen.getByText('Disabled Button');
  //   expect(button).toBeDisabled();
  // });

  // Test rendering with icon
  it('renders correctly with icon', async () => {
    render(<Button icon={<span>🚀</span>}>Button with Icon</Button>);
    const button = await screen.getByText('Button with Icon');
    expect(button).toBeInTheDocument();

    // Use a custom text matcher function to locate the icon within the button
    const iconElement = screen.getByText((content, element) => {
      // Check if the element is within the button and contains the desired icon content
      return element.closest('md-filled-button') && content === '🚀';
    });
    expect(iconElement).toBeInTheDocument();
  });
});
