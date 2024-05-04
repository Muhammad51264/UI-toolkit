import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Tabs from './tabs.jsx';

const renderTabs = (props) => render(<Tabs {...props}></Tabs>);

describe('Tabs component', () => {
  const tabsContent = [
    {
      'aria-controls': 'tab1',
      content: <div>tab 1</div>,
      icon: (
        <svg data-testid="test svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v6h-4v-6z" />
        </svg>
      ),
      text: 'tab1',
      id: 'firsttab',
    },
    {
      'aria-controls': 'tab',
      content: <div>tab 2</div>,
      icon: (
        <svg data-testid="test svg 2">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v6h-4v-6z" />
        </svg>
      ),
      text: 'tab2',
      id: 'secondtab',
    },
  ];

  it('renders with default props and functionality', async () => {
    renderTabs({
      ariaLabel: 'tabs',
      tabsContent,
    });

    const tabsWrapper = screen.getByLabelText('tabs');
    expect(tabsWrapper).toBeInTheDocument();

    const tabWrappers = screen.getAllByRole('presentation');
    tabWrappers.forEach((wrapper) => {
      expect(wrapper).toHaveClass('stacked');
      expect(wrapper).toHaveClass('hasLabel');
      expect(wrapper).toHaveClass('hasIcon');
    });

    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();

    const tabs = screen.getAllByRole('tab');
    const [firstTab, secondTab] = tabs;

    expect(tabs).toHaveLength(tabsContent.length);
    expect(firstTab).toHaveClass('active');

    const firstTabPanel = screen.getByRole('tabpanel', { name: 'tab1' });

    expect(firstTabPanel).toBeInTheDocument();

    fireEvent.click(secondTab);

    expect(secondTab).toHaveClass('active');

    const secondTabPanel = screen.getByRole('tabpanel', {
      name: 'tab2',
      hidden: true,
    });

    expect(secondTabPanel).toBeInTheDocument();
  });

  it('renders with inline Icon when passed as a prop', () => {
    renderTabs({
      ariaLabel: 'tabs',
      tabsContent,
      inlineIcon: true,
    });

    const tabsWrapper = screen.getByLabelText('tabs');
    expect(tabsWrapper).toBeInTheDocument();

    const tabWrappers = screen.getAllByRole('presentation');
    tabWrappers.forEach((wrapper) => {
      expect(wrapper).not.toHaveClass('stacked');
    });
  });

  it('renders with Icon only when passed as a prop', async () => {
    renderTabs({
      ariaLabel: 'tabs',
      iconOnly: true,
      tabsContent: [
        {
          'aria-controls': 'tab1',
          content: <div>tab 1</div>,
          icon: (
            <svg data-testid="test svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v6h-4v-6z" />
            </svg>
          ),
          id: 'firsttab',
        },
        {
          'aria-controls': 'tab',
          content: <div>tab 2</div>,
          icon: (
            <svg data-testid="test svg 2">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v6h-4v-6z" />
            </svg>
          ),
          id: 'secondtab',
        },
      ],
    });

    const tabsWrapper = screen.getByLabelText('tabs');
    expect(tabsWrapper).toBeInTheDocument();

    const tabWrappers = screen.getAllByRole('presentation');
    tabWrappers.forEach((wrapper) => {
      expect(wrapper).not.toHaveClass('hasLabel');
    });
  });

  it('renders without an icon when not passed as a prop', () => {
    renderTabs({
      ariaLabel: 'tabs',
      tabsContent: [
        {
          'aria-controls': 'tab1',
          content: <div>tab 1</div>,
          id: 'firsttab',
        },
        {
          'aria-controls': 'tab',
          content: <div>tab 2</div>,
          id: 'secondtab',
        },
      ],
      inlineIcon: true,
    });

    const tabsWrapper = screen.getByLabelText('tabs');
    expect(tabsWrapper).toBeInTheDocument();

    const tabWrappers = screen.getAllByRole('presentation');
    tabWrappers.forEach((wrapper) => {
      expect(wrapper).not.toHaveClass('hasIcon');
    });
  });

  it('renders with the an active tab when passed as a prop', async () => {
    const activeTabIndex = 1;
    renderTabs({
      ariaLabel: 'tabs',
      activeTabIndex,
      tabsContent,
    });

    const tabsWrapper = screen.getByLabelText('tabs');
    expect(tabsWrapper).toBeInTheDocument();

    const tabs = screen.getAllByRole('tab');

    expect(tabs[activeTabIndex]).toHaveClass('active');
  });

  it('renders with the first tab as active if the passed activeindextab prop is not valid', async () => {
    const activeTabIndex = 3;
    renderTabs({
      ariaLabel: 'tabs',
      activeTabIndex,
      tabsContent,
    });

    const tabsWrapper = screen.getByLabelText('tabs');
    expect(tabsWrapper).toBeInTheDocument();

    const tabs = screen.getAllByRole('tab');

    expect(tabs[0]).toHaveClass('active');
  });

  it('renders with the secondary variant when passed as a prop', async () => {
    renderTabs({
      ariaLabel: 'tabs',
      tabsContent,
      variant: 'secondary',
    });

    const tabsWrapper = screen.getByLabelText('tabs');
    expect(tabsWrapper).toBeInTheDocument();

    const tabWrappers = screen.getAllByRole('presentation');

    tabWrappers.forEach((wrapper) => {
      expect(wrapper).toHaveClass('secondary');
    });
  });
});
