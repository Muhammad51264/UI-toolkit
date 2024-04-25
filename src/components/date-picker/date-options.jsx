import React from 'react';
import styles from './styles.module.css';
import useDateContext from './hook';

function DateOptions() {
  const { onCancel, onAccept, setIsCalenderVisible, date, variant } =
    useDateContext();

  return (
    <div className={styles['options-container']}>
      <button
        className={styles['option-btn']}
        onClick={() => {
          if (onCancel) onCancel();
          if (variant === 'docked') setIsCalenderVisible(false);
        }}
      >
        Cancel
      </button>
      <button
        className={styles['option-btn']}
        onClick={() => {
          if (onAccept) onAccept(date);
          if (variant === 'docked') setIsCalenderVisible(false);
        }}
      >
        OK
      </button>
    </div>
  );
}

export default DateOptions;
