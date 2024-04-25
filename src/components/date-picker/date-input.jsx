import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import useDateContext from './hook';
import { isValidDateString } from './utils';

function DateInput() {
  const {
    disabled,
    label,
    supportingText,
    date,
    setDate,
    setMove,
    setIsCalenderVisible,
    isCalenderVisible,
  } = useDateContext();

  const updateDate = (newValue) => {
    setDate((prevDate) => {
      if (!isValidDateString(newValue)) {
        return prevDate;
      }
      return newValue;
    });
  };

  useEffect(() => {
    setMove((prev) => ({ ...prev, direction: 'up' }));
  }, [isCalenderVisible, setMove]);

  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <fieldset
        className={`${styles['date-input']} ${isCalenderVisible || isSelected ? styles.selected : ''} ${disabled ? styles.disabled : ''}`}
      >
        <legend
          className={`${isCalenderVisible || isSelected ? styles['label-selected'] : ''} ${disabled ? styles.disabled : ''}`}
        >
          {label}
        </legend>
        <input
          disabled={disabled}
          type="date"
          value={date}
          onChange={(e) => updateDate(e.target.value)}
          onFocus={() => setIsSelected(true)}
          onBlur={() => setIsSelected(false)}
        />

        <div
          className={`${styles.icon} ${disabled ? styles.disabled : ''}`}
          tabIndex={!disabled ? 0 : -1}
          onClick={() => {
            if (!disabled) setIsCalenderVisible((prev) => !prev);
          }}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
              setIsCalenderVisible((prev) => !prev);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
          </svg>
        </div>
      </fieldset>
      <span
        className={`${styles['supporting-text']} ${disabled ? styles.disabled : ''}`}
      >
        {supportingText}
      </span>
    </div>
  );
}

export default DateInput;
