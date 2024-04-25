import { render, screen } from '@testing-library/react';
import React from 'react';
import ToolTip from './tooltip.jsx';
import Button from '../button/button.jsx';

const renderTooltip = (props) => render(<ToolTip {...props} />);

describe('Tooltip Component', () => {
  it('renders the component properly', () => {
    renderTooltip();

    const tooltip = screen.getByTestId('tooltipContainer');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveClass('tooltipContainer');
  });

  it('renders the passed text', () => {
    renderTooltip({ text: 'tooltipText' });

    const tooltipText = screen.getByText('tooltipText');
    expect(tooltipText).toBeInTheDocument();
  });

  it('renders the passed buttons', () => {
    renderTooltip({
      firstActionButton: <Button variant="text">Text</Button>,
      secondActionButton: <Button variant="text">Text</Button>,
      text: 'rich tooltip text',
    });

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('renders the component with the passed subhead', () => {
    renderTooltip({
      subhead: 'rich tooltip subhead',
    });

    const tooltip = screen.getByTestId('tooltipContainer');
    const tooltipSubHeadContainer = screen.getByText('rich tooltip subhead');
    expect(tooltip).toBeInTheDocument();
    expect(tooltipSubHeadContainer).toBeInTheDocument();
  });
});
