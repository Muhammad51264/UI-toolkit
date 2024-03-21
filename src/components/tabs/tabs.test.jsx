import React from 'react';
import { render, screen } from '@testing-library/react';
import Tabs from './tabs.jsx';

HTMLElement.prototype.scrollTo = jest.fn();

describe('Tabs Component', () => {
  const renderTabs = (props) => {
    const utils = render(<Tabs variant="primary" {...props} />);
    return utils;
  };

  const tabsContent = [
    {
      text: 'tab1',
      icon: (
        <svg slot="icon" viewBox="0 0 48 48">
          <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
        </svg>
      ),
      hasIcon: true,
      iconOnly: true,
    },
    {
      text: 'tab2',
      icon: (
        <svg slot="icon" viewBox="0 0 48 48">
          <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
        </svg>
      ),
      hasIcon: true,
      iconOnly: true,
    },
  ];

  it('renders primary tabs by default', () => {
    renderTabs({ tabsContent });
    const tabs = screen.getByRole('tablist');
    expect(tabs).toBeInTheDocument();
  });
});
