import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Ripple from '../ripple/ripple';

function Snackbar({
  action,
  actionClickEvent,
  closeButton,
  closeButtonClickEvent,
  text,
  secondText,
  ...props
}) {
  return (
    <div
      data-testid="snackbar"
      className={`${styles.container} ${secondText && styles.secondText}`}
      {...props}
    >
      <div className={styles.textContainer}>
        <div className={styles.text}>{text}</div>
        {secondText && <div className={styles.text}>{secondText}</div>}
      </div>
      {action && (
        <button className={styles.action} onClick={actionClickEvent}>
          <Ripple />

          {action}
        </button>
      )}

      {closeButton && (
        <button
          className={styles.close}
          onClick={closeButtonClickEvent}
          data-testid="close"
        >
          <Ripple />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className={styles.icon}
          >
            <path d="M259-198.348 199.348-259l220-221-220-221L259-761.652l221 221 221-221L760.652-701l-220 221 220 221L701-198.348l-221-221-221 221Z" />
          </svg>
        </button>
      )}
    </div>
  );
}

Snackbar.propTypes = {
  /**
   * action: action button text
   */
  action: PropTypes.string,
  /**
   * action: action button click event
   */
  actionClickEvent: PropTypes.func,
  /**
   * closeButton: close button
   */
  closeButton: PropTypes.bool,
  /**
   * closeButtonClickEvent: close button event
   */
  closeButtonClickEvent: PropTypes.func,
  /**
   * secondText: snackbar second text
   */
  secondText: PropTypes.string,
  /**
   * text: snackbar text
   */
  text: PropTypes.string,
};

Snackbar.defaultProps = {
  action: '',
  actionClickEvent: undefined,
  closeButton: false,
  closeButtonClickEvent: undefined,
  secondText: '',
  text: 'default text',
};

export default Snackbar;
