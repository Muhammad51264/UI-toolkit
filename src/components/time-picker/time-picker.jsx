import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import TimeSelectorContainer from './time-selector-container.jsx';
import ClockContainer from './clock-container.jsx';
import OptionsContainer from './options-container.jsx';
import TimeContext from './context';

function TimePicker({
  disabledTimeSelector,
  headline,
  isHorizontal,
  twentyFourHourMode,
  onTimeChange,
  onAccept,
  children,
  ...props
}) {
  const [time, setTime] = useState({ hour: '01', min: '00' });
  const [period, setPeriod] = useState('AM');
  const [isClockHidden, setIsClockHidden] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    const timeValue = `${time.hour}:${time.min}${!twentyFourHourMode ? ` ${period}` : ''}`;
    onTimeChange(timeValue);
  }, [time, onTimeChange, period, setPeriod, twentyFourHourMode]);

  return (
    <>
      <div
        onClick={() => {
          setIsClosed(false);
        }}
        data-testid="open"
      >
        {children}
      </div>
      {!isClosed && (
        <TimeContext.Provider
          value={{
            isClockHidden,
            setIsClockHidden,
            period,
            setPeriod,
            time,
            setTime,
            twentyFourHourMode,
            isHorizontal,
            disabledTimeSelector,
            onAccept,
            setIsClosed,
          }}
        >
          <div
            data-testid="time-picker"
            className={styles.container}
            {...props}
          >
            <span
              className={`${styles.headline} ${isHorizontal && !isClockHidden ? styles['headline-horizontal'] : ''}`}
            >
              {headline}
            </span>
            <div
              className={`${styles['time-clock-container']} ${isHorizontal && !isClockHidden ? styles['time-clock-container-horizontal'] : ''}`}
            >
              <TimeSelectorContainer />
              <ClockContainer />
            </div>
            <OptionsContainer />
          </div>
        </TimeContext.Provider>
      )}
    </>
  );
}

TimePicker.propTypes = {
  /**
   *  children: element that will open the time picker
   */
  children: PropTypes.node,
  /**
   *  disabledTimeSelector: disable time selector
   */
  disabledTimeSelector: PropTypes.bool,
  /**
   * The headline of the time picker
   */
  headline: PropTypes.string,
  /**
   * isHorizontal: Determines the shape of time picker
   */
  isHorizontal: PropTypes.bool,
  /**
   * The time mode of the time picker
   */
  twentyFourHourMode: PropTypes.bool,
  /**
   * onTimeChange : determines what happen when time value changes
   */
  onTimeChange: PropTypes.func,
  /**
   * onAccept : determines what happen when OK is pressed
   */
  onAccept: PropTypes.func,
};

TimePicker.defaultProps = {
  children: '',
  disabledTimeSelector: false,
  headline: 'default headline',
  isHorizontal: false,
  twentyFourHourMode: false,
  onTimeChange: () => {},
  onAccept: undefined,
};

export default TimePicker;
