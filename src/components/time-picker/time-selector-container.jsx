import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function TimeSelectorContainer({ time, twentyFourHourMode, setTime }) {
  const handleInputChange = (e, timeInput) => {
    const value = parseInt(e.target.value, 10);
    if (value > 99) return;
    setTime((prev) => ({ ...prev, [timeInput]: value }));
  };

  const padInput = (input) => input.toString().padStart(2, '0');

  const handleInputBlur = (e, timeInput, min, max) => {
    const value = parseInt(e.target.value, 10);
    if (value < min || !value) {
      setTime((prev) => ({ ...prev, [timeInput]: padInput(min) }));
    } else if (value > max) {
      setTime((prev) => ({ ...prev, [timeInput]: padInput(max) }));
    } else {
      const paddedInput = padInput(value);
      setTime((prev) => ({ ...prev, [timeInput]: paddedInput }));
    }
  };

  return (
    <div className={styles['selector-container']}>
      <div className={styles['time-container']}>
        <input
          type="number"
          name="hour"
          id="hour"
          className={`${styles['time-selector']} ${twentyFourHourMode && styles['twenty-four-hour-mode']}`}
          value={time.hour}
          onChange={(e) => handleInputChange(e, 'hour')}
          onBlur={(e) => handleInputBlur(e, 'hour', 1, 24)}
          maxLength={2}
        />
        <span className={styles.seperator}>:</span>
        <input
          type="number"
          name="min"
          id="min"
          className={`${styles['time-selector']} ${twentyFourHourMode && styles['twenty-four-hour-mode']}`}
          value={time.min}
          onChange={(e) => handleInputChange(e, 'min')}
          onBlur={(e) => handleInputBlur(e, 'min', 0, 59)}
          maxLength={2}
        />
      </div>
    </div>
  );
}

TimeSelectorContainer.propTypes = {
  /**
   * The time of the time selector
   */
  time: PropTypes.shape({
    hour: PropTypes.string,
    min: PropTypes.string,
  }),
  /**
   *  Set time of the time selector
   */
  setTime: PropTypes.func,
  /**
   *  Decides if time is in 24hour formal or not
   */
  twentyFourHourMode: PropTypes.bool,
};

TimeSelectorContainer.defaultProps = {
  time: { hour: '01', min: '00' },
  setTime: undefined,
  twentyFourHourMode: false,
};

export default TimeSelectorContainer;
