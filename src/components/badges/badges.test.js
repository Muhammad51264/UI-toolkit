import { render, screen } from '@testing-library/react';
import React from 'react';
import Badges from './badges.jsx';

const renderBadges = (props) => render(<Badges {...props} />);

describe('Badges Component', () => {
  it('renders the default component properly', () => {
    renderBadges();

    const badges = screen.getByTestId('badges');
    expect(badges).toBeInTheDocument();
    expect(badges).toHaveClass('badges');
  });

  it('renders large badges properly', () => {
    renderBadges({ size: 'large', label: 55 });

    const badges = screen.getByTestId('badges');
    expect(badges).toBeInTheDocument();
    expect(badges).toHaveClass('large');
  });

  it('renders the small badges when no label is passed', () => {
    renderBadges();

    const badges = screen.getByTestId('badges');
    expect(badges).toBeInTheDocument();
    expect(badges).toHaveClass('small');
  });

  it('renders the badges with "multipleDigits" class name when the label is more that 1 digit', () => {
    renderBadges({ label: 22, size: 'large' });

    const badges = screen.getByTestId('badges');
    expect(badges).toBeInTheDocument();
    expect(badges).toHaveClass('multipleDigits');
  });

  it('adds "+" when the label number is larger than the maxNumber', () => {
    renderBadges({ size: 'large', maxNumber: 99, label: 100 });

    const badges = screen.getByTestId('badges');
    expect(badges).toHaveTextContent('99+');
    expect(badges).toBeInTheDocument();
  });
});
