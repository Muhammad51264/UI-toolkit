import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import TimeSelectorContainer from './time-selector-container.jsx';
import ClockContainer from './clock-container.jsx';
import OptionsContainer from './options-container.jsx';

function TimePicker({ headline, twentyFourHourMode, ...props }) {
  const [time, setTime] = useState({ hour: '01', min: '00' });
  const [isPm, setIsPm] = useState(false);
  const [isClockHidden, setIsClockHidden] = useState(false);

  return (
    <>
      <div data-testid="time-picker" {...props} className={styles.container}>
        <span className={styles.headline}>{headline}</span>
        <div className={styles['time-clock-container']}>
          <TimeSelectorContainer
            time={time}
            setTime={setTime}
            twentyFourHourMode={twentyFourHourMode}
          />
          <ClockContainer />
        </div>
        <OptionsContainer />
      </div>
    </>
  );
}

TimePicker.propTypes = {
  /**
   * The headline of the time picker
   */
  headline: PropTypes.string,
  /**
   * The time mode of the time picker
   */
  twentyFourHourMode: PropTypes.bool,
};

TimePicker.defaultProps = {
  headline: 'default headline',
  twentyFourHourMode: false,
};

export default TimePicker;
