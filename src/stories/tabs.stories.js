import React from 'react';
import Tabs from '../components/tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const Template = (args) => (
  <>
    <style>
      {`
        :root{
          --md-ripple-pressed-color:#6750A4;
          --md-sys-color-on-surface-light: #1C1B1F;
          --md-sys-color-on-surface-variant-light: #49454F;
          --md-sys-color-outline-variant-light: #CAC4D0;
          --md-sys-color-primary-light: #6750A4;
          --md-sys-color-surface-light: #FFFBFE;
          --md-sys-typescale-title-small-font-family-name: Roboto;
          --md-sys-typescale-title-small-font-family-style: Medium;
          --md-sys-typescale-title-small-font-size: 14px;
          --md-sys-typescale-title-small-font-weight: 500px;
          --md-sys-typescale-title-small-line-height: 20px;
        }
      `}
    </style>
    <Tabs {...args}></Tabs>
  </>
);

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'tabs',
  tabsContent: [
    {
      'aria-controls': 'tab1',
      content: <div>tab 1</div>,
      icon: (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"
          />
        </svg>
      ),
      id: 'firsttab',
      text: 'tab1',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
        </svg>
      ),
      id: 'secondtab',
      text: 'tab2',
    },
  ],
};

export const WithIconsOnly = Template.bind({});
WithIconsOnly.args = {
  ariaLabel: 'tabs',
  iconOnly: true,
  tabsContent: [
    {
      'aria-controls': 'tab1',
      content: <div>tab 1</div>,
      icon: (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"
          />
        </svg>
      ),
      id: 'firsttab',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
        </svg>
      ),
      id: 'secondtab',
    },
  ],
};

export const InlineIcons = Template.bind({});
InlineIcons.args = {
  ariaLabel: 'tabs',
  inlineIcon: true,
  tabsContent: [
    {
      'aria-controls': 'tab1',
      content: <div>tab 1</div>,
      icon: (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"
          />
        </svg>
      ),
      id: 'firsttab',
      text: 'label1',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
        </svg>
      ),
      id: 'secondtab',
      text: 'label2',
    },
  ],
};

export const CustomActiveIndex = Template.bind({});
CustomActiveIndex.args = {
  activeTabIndex: 1,
  ariaLabel: 'tabs',
  iconOnly: true,
  tabsContent: [
    {
      'aria-controls': 'tab1',
      content: <div>tab 1</div>,
      icon: (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"
          />
        </svg>
      ),
      id: 'firsttab',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
        </svg>
      ),
      id: 'secondtab',
    },
  ],
};

export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  ariaLabel: 'tabs',
  tabsContent: [
    {
      'aria-controls': 'tab1',
      content: <div>tab 1</div>,
      id: 'firsttab',
      text: 'tab1',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      id: 'secondtab',
      text: 'tab2',
    },
  ],
};

export const SecondaryTabs = Template.bind({});
SecondaryTabs.args = {
  ariaLabel: 'tabs',
  iconOnly: true,
  variant: 'secondary',
  tabsContent: [
    {
      'aria-controls': 'tab1',
      content: <div>tab 1</div>,
      icon: (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"
          />
        </svg>
      ),
      id: 'firsttab',
      text: 'tab1',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
        </svg>
      ),
      id: 'secondtab',
      text: 'tab2',
    },
    {
      'aria-controls': 'tab3',
      content: <div>tab 3</div>,
      icon: (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 6h8M6 10h12M8 14h8M6 18h12"
          />
        </svg>
      ),

      id: 'thirdtab',
      text: 'tab3',
    },
  ],
};
