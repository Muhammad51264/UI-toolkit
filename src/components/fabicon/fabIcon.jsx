import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Ripple from '../ripple';

const FabIcon = ({ ariaLabel, children, label, size, variant, ...props }) => {
  const sizeClass = size !== 'medium' ? styles[size] : '';
  const labelClass = label ? styles.extended : '';
  const variantClass = variant !== 'surface' ? styles[variant] : '';

  return (
    <button
      className={`${styles.fab} ${sizeClass} ${labelClass} ${variantClass}`}
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
  label: '',
  size: 'medium',
  variant: 'surface',
};

FabIcon.propTypes = {
  children: PropTypes.element,
  label: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['surface', 'primary', 'secondary', 'tertiary']),
};

export default FabIcon;
