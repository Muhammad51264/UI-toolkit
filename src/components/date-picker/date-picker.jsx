import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import DateContext from './context';
import { getStringDate } from './utils';
import Calender from './calender.jsx';
import DateInput from './date-input.jsx';

function DatePicker({
  variant,
  disabled,
  label,
  onAccept,
  onCancel,
  onDateChange,
  maxWidth,
  minWidth,
  supportingText,
  ...props
}) {
  const [date, setDate] = useState(getStringDate());
  const [listOption, setListOption] = useState({
    isOpen: false,
    listType: 'none',
  });
  const [isCalenderVisible, setIsCalenderVisible] = useState(false);
  const [move, setMove] = useState({ direction: 'up', isMove: false });

  useEffect(() => {
    onDateChange(date);
  }, [date, onDateChange, setDate]);

  useEffect(() => {
    const checkCalendarClick = (e) => {
      if (isCalenderVisible) {
        const calenderSelector = document.querySelector(`.${styles.container}`);
        if (calenderSelector && !calenderSelector.contains(e.target))
          setIsCalenderVisible(false);
      }
    };

    window.addEventListener('click', checkCalendarClick);

    return () => {
      window.removeEventListener('click', checkCalendarClick);
    };
  }, [isCalenderVisible, setIsCalenderVisible]);

  return (
    <DateContext.Provider
      value={{
        disabled,
        label,
        onAccept,
        onCancel,
        maxWidth,
        minWidth,
        move,
        setMove,
        supportingText,
        date,
        setDate,
        isCalenderVisible,
        setIsCalenderVisible,
        listOption,
        setListOption,
        variant,
        ...props,
      }}
    >
      <>
        {variant === 'docked' && (
          <div className={styles.container} style={{ maxWidth, minWidth }}>
            <DateInput />
            {isCalenderVisible && <Calender />}
          </div>
        )}

        {variant === 'modal' && (
          <div>
            <Calender />
          </div>
        )}
      </>
    </DateContext.Provider>
  );
}

DatePicker.propTypes = {
  /**
   * variant: determines type of date picker
   */
  variant: PropTypes.oneOf(['docked', 'modal']),
  /**
   * disabled: determines if the date picker input is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * supportingText: text below the input
   */
  supportingText: PropTypes.string,
  /**
   * label: elevated, input label
   */
  label: PropTypes.string,
  /**
   * onDateChange : determines what happen when date value changes
   */
  onDateChange: PropTypes.func,
  /**
   * onAccept : determines what happen when OK is pressed
   */
  onAccept: PropTypes.func,
  /**
   * onCancel : determines what happen when cancel is pressed
   */
  onCancel: PropTypes.func,
  /**
   * maxWidth: max width of input
   */
  maxWidth: PropTypes.string,
  /**
   * minWidth: min width of input
   */
  minWidth: PropTypes.string,
  /**
   * name: input name
   */
  name: PropTypes.string,
};

DatePicker.defaultProps = {
  variant: 'docked',
  disabled: false,
  supportingText: 'DD/MM/YYYY',
  label: 'Date',
  onDateChange: () => {},
  onAccept: undefined,
  onCancel: undefined,
  maxWidth: '280px',
  minWidth: '280px',
  name: 'date-picker',
};

export default DatePicker;
