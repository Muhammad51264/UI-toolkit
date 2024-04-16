import React from 'react';
import { SearchIcon, ClearIcon } from '@storybook/icons';
import Tabs from '../components/tabs';

export default {
  title: 'tabs',
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
      icon: <SearchIcon />,
      id: 'firsttab',
      text: 'tab1',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: <ClearIcon />,
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
      icon: <SearchIcon />,
      id: 'firsttab',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: <ClearIcon />,
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
      icon: <SearchIcon />,
      id: 'firsttab',
      text: 'label1',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: <ClearIcon />,
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
      icon: <SearchIcon />,
      id: 'firsttab',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: <ClearIcon />,
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
      icon: <SearchIcon />,
      id: 'firsttab',
      text: 'tab1',
    },
    {
      'aria-controls': 'tab2',
      content: <div>tab 2</div>,
      icon: <ClearIcon />,
      id: 'secondtab',
      text: 'tab2',
    },
    {
      'aria-controls': 'tab3',
      content: <div>tab 3</div>,
      icon: <ClearIcon />,
      id: 'thirdtab',
      text: 'tab3',
    },
  ],
};
