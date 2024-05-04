import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Divider from '../divider';
import Ripple from '../ripple';
import styles from './styles.module.css';

const Tab = ({
  active,
  hasIcon,
  icon,
  iconOnly,
  inlineIcon,
  text,
  variant,
  ...tabProps
}) => {
  const isStacked = inlineIcon ? '' : styles.stacked;
  const withIcon = hasIcon ? styles.hasIcon : '';
  const withIconOnly = iconOnly ? '' : styles.hasLabel;
  const isActive = active ? styles.active : '';
  const variantClass = variant !== 'primary' ? styles[variant] : '';

  return (
    <div
      className={`${styles.button} ${isActive} `}
      role="tab"
      aria-selected={active}
      {...tabProps}
    >
      <Ripple />
      <div
        role="presentation"
        className={`${styles.content} ${isStacked} ${withIcon} ${withIconOnly} ${variantClass}`}
      >
        {icon && (
          <slot className={`${styles.icon} ${variantClass}`}>{icon}</slot>
        )}
        <slot>{text}</slot>
        <div className={styles.indicator} />
      </div>
    </div>
  );
};

const Tabs = ({
  activeTabIndex,
  ariaLabel,
  className,
  iconOnly,
  inlineIcon,
  onChange,
  tabsContent,
  variant,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    onChange();
  };

  useEffect(() => {
    if (activeTabIndex > tabsContent.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeTabIndex);
    }
  }, [tabsContent, activeTabIndex]);

  return (
    <>
      <div
        className={`${styles.tabs} ${styles[className]}`}
        aria-label={ariaLabel}
      >
        <slot>
          {tabsContent.map((tab, index) => (
            <Tab
              active={activeIndex === index}
              hasIcon={!!tab.icon}
              icon={tab.icon ? tab.icon : null}
              iconOnly={iconOnly}
              inlineIcon={variant !== 'primary' ? true : inlineIcon}
              key={index}
              onClick={() => handleTabClick(index)}
              text={tab.text}
              variant={variant}
              {...tab}
              {...props}
            />
          ))}
        </slot>
      </div>
      <Divider />
      {tabsContent.map((tabContent, index) => (
        <div
          key={index}
          role="tabpanel"
          aria-labelledby={tabContent.id}
          id={tabContent['aria-controls']}
          hidden={activeIndex !== index}
        >
          {tabContent.content}
        </div>
      ))}
    </>
  );
};

Tabs.defaultProps = {
  activeTabIndex: 0,
  ariaLabel: '',
  className: '',
  iconOnly: false,
  inlineIcon: false,
  onChange: () => {},
  selected: false,
  tabsContent: [],
  variant: 'primary',
};

Tabs.propTypes = {
  /**
   * The index of the tab to be marked as active by default
   */
  activeTabIndex: PropTypes.number,
  /**
   * Tabs aria label
   */
  ariaLabel: PropTypes.string,
  /**
   * ClassName
   */
  className: PropTypes.string,
  /**
   * whether the tabs contain text with the icon or not
   */
  iconOnly: PropTypes.bool,
  /**
   * Whether the icon should be displayed next to the text or not
   */
  inlineIcon: PropTypes.bool,
  /**
   * Function to be excuted when the active tab changes
   */
  onChange: PropTypes.func,
  /**
   * Tab Content
   */
  tabsContent: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Tab aria controls used to display the content of the tab
       */
      'aria-controls': PropTypes.string.isRequired,
      /**
       * Tab icon
       */
      icon: PropTypes.element,
      /**
       * Tab id used to correctly display the content of the tab
       */
      id: PropTypes.string.isRequired,
      /**
       * Tab text
       */
      text: PropTypes.string,
      /**
       * Tab content to be displayed when the tab is active
       */
      content: PropTypes.node,
    })
  ),
  /**
   * If true the tab will be marked as active
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Tab.defaultProps = {
  active: false,
  hasIcon: false,
  icon: false,
  iconOnly: false,
  inlineIcon: false,
  text: '',
  variant: 'primary',
};

Tab.propTypes = {
  /**
   * If true the tab will be marked as active
   */
  active: PropTypes.bool,
  /**
   * Whether a tab has an icon or not
   */
  hasIcon: PropTypes.bool,
  /**
   * Icon to display
   */
  icon: PropTypes.element,
  /**
   * Whether the tab contains text with the icon or not
   */
  iconOnly: PropTypes.bool,
  /**
   * Whether the icon should be displayed next to the text or not
   */
  inlineIcon: PropTypes.bool,
  /**
   * Tab text
   */
  text: PropTypes.string,
  /**
   * Tab variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
};
export default Tabs;
