import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
// import { runAllTimers } from '@jest/';
import ToolTip from './tooltip.jsx';
import Button from '../button/button.jsx';

const renderTooltip = (props) => render(<ToolTip {...props} />);

jest.useFakeTimers();

describe('Tooltip Component', () => {
  it('renders the component properly', () => {
    renderTooltip();

    const tooltip = screen.getByTestId('tooltipContainer');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveClass('tooltipContainer');
  });

  it('renders the passed text', () => {
    renderTooltip({ text: 'tooltipText' });

    const tooltip = screen.getByTestId('tooltipContainer');
    fireEvent.mouseOver(tooltip);

    const tooltipText = screen.getByText('tooltipText');
    expect(tooltipText).toBeInTheDocument();
  });

  it('renders the passed buttons', () => {
    renderTooltip({
      firstActionButton: (
        <Button name="button1" variant="textType" text="button" />
      ),
      secondActionButton: (
        <Button name="button2" variant="textType" text="button" />
      ),
      text: 'rich tooltip text',
      variant: 'rich',
    });

    const tooltip = screen.getByTestId('tooltipContainer');
    fireEvent.mouseOver(tooltip);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('renders the component with the passed subhead', () => {
    renderTooltip({
      subhead: 'rich tooltip subhead',
      variant: 'rich',
    });

    const tooltip = screen.getByTestId('tooltipContainer');
    fireEvent.mouseOver(tooltip);

    const tooltipSubHeadContainer = screen.getByText('rich tooltip subhead');
    expect(tooltip).toBeInTheDocument();
    expect(tooltipSubHeadContainer).toBeInTheDocument();
  });

  it('shows the tooltip when the user hover', () => {
    renderTooltip({
      subhead: 'rich tooltip subhead',
      text: 'tooltip texting',
      variant: 'rich',
    });

    const tooltip = screen.getByTestId('tooltipContainer');
    fireEvent.mouseOver(tooltip);

    const tooltipContentWrapper = screen.getByTestId('tooltipContentWrapper');
    expect(tooltipContentWrapper).toBeVisible();
  });

  it("hides the tooltip 1.9s after the user's mouse leaves the component", async () => {
    renderTooltip({
      subhead: 'rich tooltip subhead',
      text: 'tooltip texting',
      variant: 'rich',
    });

    const tooltip = screen.getByTestId('tooltipContainer');
    fireEvent.mouseOver(tooltip);

    const tooltipContentWrapper = screen.getByTestId('tooltipContentWrapper');
    fireEvent.mouseLeave(tooltip);

    act(() => {
      jest.runAllTimers();
    });

    expect(tooltipContentWrapper).not.toBeVisible();
  });

  it("doesn't hide the tooltip 1.9s after the user hover on tooltip the component", () => {
    renderTooltip({
      subhead: 'rich tooltip subhead',
      text: 'tooltip texting',
      variant: 'rich',
    });

    const tooltip = screen.getByTestId('tooltipContainer');
    fireEvent.mouseOver(tooltip);

    const tooltipContentWrapper = screen.getByTestId('tooltipContentWrapper');
    fireEvent.mouseLeave(tooltip);
    fireEvent.mouseOver(tooltipContentWrapper);

    expect(tooltipContentWrapper).toBeVisible();
  });

  it("hides the tooltip 1.9s after the user's mouse leaves the tooltip", async () => {
    renderTooltip({
      subhead: 'rich tooltip subhead',
      text: 'tooltip texting',
      variant: 'rich',
    });

    const tooltip = screen.getByTestId('tooltipContainer');
    fireEvent.mouseOver(tooltip);

    const tooltipContentWrapper = screen.getByTestId('tooltipContentWrapper');
    fireEvent.mouseLeave(tooltip);

    fireEvent.mouseOver(tooltipContentWrapper);
    fireEvent.mouseLeave(tooltipContentWrapper);

    act(() => {
      jest.runAllTimers();
    });

    expect(tooltipContentWrapper).not.toBeVisible();
  });

  it("keeps the tooltip if 'persistent' is true, even when the user leaves", async () => {
    renderTooltip({
      persistent: true,
      subhead: 'rich tooltip subhead',
      text: 'tooltip texting',
      variant: 'rich',
    });

    const tooltip = screen.getByTestId('tooltipContainer');
    fireEvent.mouseOver(tooltip);

    const tooltipContentWrapper = screen.getByTestId('tooltipContentWrapper');
    // fireEvent.mouseLeave(tooltip);

    fireEvent.mouseOver(tooltipContentWrapper);

    fireEvent.mouseLeave(tooltipContentWrapper);
    act(() => {
      jest.runAllTimers();
    });

    expect(tooltipContentWrapper).toBeVisible();
  });

  it('hides the tooltip when the user clicks outside the component', () => {
    // Render the tooltip component
    renderTooltip({
      subhead: 'rich tooltip subhead',
      text: 'tooltip texting',
      variant: 'rich',
    });

    // Simulate mouse over the tooltip container to show the tooltip
    const tooltip = screen.getByTestId('tooltipContainer');
    fireEvent.mouseOver(tooltip);

    // Check that the tooltip content is visible
    const tooltipContentWrapper = screen.getByTestId('tooltipContentWrapper');
    expect(tooltipContentWrapper).toBeVisible();

    // Create a mock element outside the tooltip
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    // Simulate a click on the outside element
    fireEvent.click(outsideElement);

    // Since the tooltip hides after a delay, we need to advance the timers
    act(() => {
      jest.runAllTimers();
    });

    // Check that the tooltip content is no longer visible
    expect(tooltipContentWrapper).not.toBeVisible();

    // Cleanup: remove the outside element from the document
    document.body.removeChild(outsideElement);
  });
});
