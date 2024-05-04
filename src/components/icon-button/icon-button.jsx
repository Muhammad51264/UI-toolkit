import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Ripple from '../ripple';

const IconButton = ({
  ariaLabel,
  href,
  icon,
  selectedIcon,
  target,
  toggle,
  variant,
  ...props
}) => {
  const [isToggleable, setIsToggleable] = useState(false);
  const selectedClass = isToggleable ? styles.selected : '';
  const variantClass = variant !== 'standard' ? styles[variant] : '';
  const toggleableClass = toggle ? styles.toggleable : '';

  const handleClick = toggle
    ? () => setIsToggleable((prev) => !prev)
    : undefined;

  return (
    <>
      {href ? (
        <a
          href={href}
          target={target}
          className={`${styles.button} ${variantClass} ${selectedClass} ${toggleableClass}`}
          aria-label={ariaLabel}
          role="button"
          {...props}
        >
          <Ripple />
          <span
            aria-hidden={ariaLabel ? 'true' : 'false'}
            className={styles.iconWrapper}
            data-testid="iconWrapper"
          >
            {icon}
          </span>
        </a>
      ) : (
        <button
          onClick={handleClick}
          className={`${styles.button} ${variantClass} ${selectedClass} ${toggleableClass}`}
          aria-label={ariaLabel}
          {...props}
        >
          <Ripple />
          <span
            aria-hidden={ariaLabel ? 'true' : 'false'}
            className={styles.iconWrapper}
            data-testid="iconWrapper"
          >
            {isToggleable ? selectedIcon : icon}
          </span>
        </button>
      )}
    </>
  );
};

IconButton.defaultProps = {
  ariaLabel: '',
  disabled: false,
  href: '',
  name: undefined,
  target: '',
  toggle: false,
  type: 'button',
  value: '',
  variant: 'standard',
  selectedIcon: null,
};

IconButton.propTypes = {
  /**
   * Component aria label
   */
  ariaLabel: PropTypes.string,
  /**
   * If true the component will be disabled
   */
  disabled: PropTypes.bool,
  /**
   * Navigation href
   */
  href: PropTypes.string,
  /**
   * Component name
   */
  name: PropTypes.string,
  /**
   * Component target
   */
  target: PropTypes.string,
  /**
   * If true the component will be toggleable
   */
  toggle: PropTypes.bool,
  /**
   * Component type
   */
  type: PropTypes.string,
  /**
   * Compnent value
   */
  value: PropTypes.string,
  /**
   * Component variant
   */
  variant: PropTypes.oneOf(['standard', 'filled', 'tonal', 'outlined']),
  /**
   * Icon to be rendered inside the component
   */
  icon: PropTypes.node.isRequired,
  /**
   * Icon to be rendered inside the component when toggled to selected
   */
  selectedIcon: PropTypes.node,
};

export default IconButton;
