import { render, screen } from '@testing-library/react';
import React from 'react';
import Progress from './progress.jsx';

const renderProgress = (props) => render(<Progress {...props} />);

describe('Progress Component', () => {
  it('renders the default props properly', () => {
    renderProgress();

    const circularProgress = screen.getByTestId('progress');
    expect(circularProgress).toBeInTheDocument();
    expect(circularProgress).toHaveClass('loader');
  });

  it('renders linear progress properly', () => {
    renderProgress({ variant: 'linear' });

    const linearProgress = screen.getByTestId('progress');
    expect(linearProgress).toBeInTheDocument();
    expect(linearProgress).toHaveClass('loader');
  });
});
