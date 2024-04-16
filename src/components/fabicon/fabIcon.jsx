import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Ripple from '../ripple';

const FabIcon = ({
  ariaLabel,
  children,
  className,
  label,
  size,
  variant,
  ...props
}) => {
  const sizeClass = size !== 'medium' ? styles[size] : '';
  const labelClass = label ? styles.extended : '';
  const variantClass = variant !== 'surface' ? styles[variant] : '';

  return (
    <button
      className={`${styles.fab} ${sizeClass} ${labelClass} ${variantClass} ${styles[className]}`}
      aria-label={ariaLabel}
      role="button"
      {...props}
    >
      <Ripple />
      <span className={`${styles.icon} ${variantClass}`}>
        <slot name="icon" aria-hidden={ariaLabel || label ? 'true' : 'false'}>
          <span>{children}</span>
        </slot>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};

FabIcon.defaultProps = {
  ariaLabel: '',
  children: null,
  className: '',
  label: '',
  size: 'medium',
  variant: 'surface',
};

FabIcon.propTypes = {
  /**
   * Aria label for accessibility
   */
  ariaLabel: PropTypes.string,
  /**
   * Icon elements
   */
  children: PropTypes.element,
  /**
   * Styles classname
   */
  className: PropTypes.string,
  /**
   * Text label for the FAB icon.
   */

  label: PropTypes.string,
  /**
   * Size variant of the FAB icon.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   *  Variant style of the FAB icon.
   */
  variant: PropTypes.oneOf(['surface', 'primary', 'secondary', 'tertiary']),
};

export default FabIcon;
