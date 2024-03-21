import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from '@lit/react';
import { MdPrimaryTab } from '@material/web/tabs/primary-tab';
import { MdSecondaryTab } from '@material/web/tabs/secondary-tab';
import { MdTabs } from '@material/web/tabs/tabs';

const sharedKeys = {
  react: React,
  events: {
    onChange: 'change',
  },
};

export const TabsComponent = createComponent({
  ...sharedKeys,
  tagName: 'md-tabs',
  elementClass: MdTabs,
});

export const PrimaryTab = createComponent({
  ...sharedKeys,
  tagName: 'md-primary-tab',
  elementClass: MdPrimaryTab,
});

export const SecondaryTab = createComponent({
  ...sharedKeys,
  tagName: 'md-secondary-tab',
  elementClass: MdSecondaryTab,
});

const tabVariant = {
  primary: PrimaryTab,
  secondary: SecondaryTab,
};

const Tabs = ({ variant, tabsContent, ...props }) => (
  <TabsComponent {...props}>
    {tabsContent.map((tab, index) => {
      const TabComponent = tabVariant[variant];
      return (
        <TabComponent key={index} {...props}>
          {tab.hasIcon && tab.icon}
          {!tab.iconOnly && tab.text}
        </TabComponent>
      );
    })}
  </TabsComponent>
);

Tabs.defaultProps = {
  selected: false,
  iconOnly: false,
  hasIcon: false,
  active: false,
  inlineIcon: false,
  onChange: () => {},
  tabsContent: [],
  variant: 'primary',
};

Tabs.propTypes = {
  selected: PropTypes.bool,
  iconOnly: PropTypes.bool,
  hasIcon: PropTypes.bool,
  active: PropTypes.bool,
  inlineIcon: PropTypes.bool,
  onChange: PropTypes.func,
  tabsContent: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      icon: PropTypes.element,
      text: PropTypes.string.isRequired,
    })
  ),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Tabs;
