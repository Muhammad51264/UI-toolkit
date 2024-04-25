import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Ripple from '../ripple';

const Button = ({ icon, text, variant, ...props }) => (
  <button
    {...props}
    className={`${styles.button} ${styles[variant]}`}
    {...props}
  >
    {icon && <span className={styles.icon}>{icon}</span>}
    <span
      className={`${styles.text} ${icon && styles['text-no-padding-left']}`}
    >
      {text}
    </span>
    <Ripple />
  </button>
);

Button.defaultProps = {
  draggable: false,
  disabled: false,
  type: 'button',
  name: '',
  onClick: undefined,
  onReset: undefined,
  onSubmit: undefined,
  icon: '',
  variant: 'filled',
};

Button.propTypes = {
  /**
   * Whether the button is disabled
   */
  draggable: PropTypes.bool,
  /**
   * Whether the button is disabled
   */
  disabled: PropTypes.bool,
  /**
   * The icon element to be displayed alongside the button text
   */
  icon: PropTypes.node,
  /**
   * The name attribute of the button
   */
  name: PropTypes.string,
  /**
   * Function called when the button is clicked
   */
  onClick: PropTypes.func,
  /**
   * Function called when the button's form is reset (if the button is in a form)
   */
  onReset: PropTypes.func,
  /**
   * Function called when the button's form is submitted (if the button is in a form)
   */
  onSubmit: PropTypes.func,
  /**
   * The text inside the button
   */
  text: PropTypes.string.isRequired,
  /**
   * The type attribute of the button
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * The variant style of the button
   */
  variant: PropTypes.oneOf([
    'filled',
    'outlined',
    'elevated',
    'tonal',
    'textType',
  ]),
};

export default Button;
