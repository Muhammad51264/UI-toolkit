import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Ripple from '../ripple';

function Snackbar({
  action,
  actionClickEvent,
  animationDuration,
  closeButton,
  closeButtonClickEvent,
  text,
  textMaxWidth,
  minWidth,
  secondText,
  ...props
}) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!animationDuration) return;
    setIsClosing(true);

    setTimeout(() => {
      setIsVisible(false);
    }, animationDuration);
  }, [animationDuration]);

  return (
    <>
      {isVisible && (
        <div
          data-testid="snackbar"
          id="snackbar"
          className={`${styles.container} ${isClosing ? styles.closed : styles.visible} ${secondText && styles.secondText}`}
          {...props}
          style={{
            minWidth,
            transition: `opacity ${animationDuration / 1000}s ease-out`,
          }}
        >
          <div
            className={styles.textContainer}
            style={{ maxWidth: textMaxWidth }}
          >
            <div className={styles.text}>{text}</div>
            {secondText && <div className={styles.text}>{secondText}</div>}
          </div>

          <div className={styles['btn-container']}>
            {action && (
              <button className={styles.action} onClick={actionClickEvent}>
                <Ripple />

                {action}
              </button>
            )}

            {closeButton && (
              <button
                className={styles.close}
                onClick={() => {
                  setIsVisible(false);
                  if (closeButtonClickEvent) closeButtonClickEvent();
                }}
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
        </div>
      )}
    </>
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
   * animationDuration: animation duration
   */
  animationDuration: PropTypes.number,
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
  text: PropTypes.node,
  /**
   * textMaxWidth: max width of the text container
   */
  textMaxWidth: PropTypes.string,
  /**
   * minWidth: minWidth width of the snackbar container
   */
  minWidth: PropTypes.string,
};

Snackbar.defaultProps = {
  action: '',
  actionClickEvent: undefined,
  animationDuration: 3000,
  closeButton: false,
  closeButtonClickEvent: undefined,
  text: 'default text',
  textMaxWidth: 'auto',
  secondText: '',
  minWidth: 'auto',
};

export default Snackbar;
