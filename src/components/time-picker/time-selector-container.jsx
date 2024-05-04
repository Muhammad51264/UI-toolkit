import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import PeriodSelector from './period-selector.jsx';
import Ripple from '../ripple';
import { TIME_SELECTORS } from './constants';
import useTimeContext from './hook';

function TimeSelectorContainer() {
  const {
    isClockHidden,
    isHorizontal,
    disabledTimeSelector,
    time,
    twentyFourHourMode,
    setTime,
  } = useTimeContext();
  const [defaultTime, setDefaultTime] = useState({ ...time });
  useEffect(() => {
    setDefaultTime({ ...time });
  }, [time, setTime]);
  const handleInputChange = (e, timeInput) => {
    const value = parseInt(e.target.value, 10);
    if (value > 99) return;
    setDefaultTime((prev) => ({ ...prev, [timeInput]: padInput(value) }));
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
    <div
      className={`${styles['selector-container']} ${isHorizontal && !isClockHidden ? styles['selector-container-horizontal'] : ''}`}
    >
      <div
        className={`${styles['time-container']}
`}
      >
        {TIME_SELECTORS.map((timeSelector) => (
          <React.Fragment key={timeSelector.id}>
            <div>
              <div
                className={`${styles['time-selector-container']}
                 ${isClockHidden ? styles['time-selector-container-margin-bottom'] : ''}
                 ${twentyFourHourMode ? styles['twenty-four-hour-mode'] : ''}
                 `}
              >
                <input
                  type="number"
                  name={timeSelector.type}
                  id={timeSelector.type}
                  data-testid={timeSelector.label}
                  className={`${styles['time-selector']} ${twentyFourHourMode ? styles['twenty-four-hour-mode'] : ''}
                   ${isClockHidden ? styles['input-hidden'] : ''}`}
                  value={defaultTime[timeSelector.type]}
                  onChange={(e) => handleInputChange(e, timeSelector.type)}
                  onBlur={(e) =>
                    handleInputBlur(
                      e,
                      timeSelector.type,
                      timeSelector.min,
                      timeSelector.max + (twentyFourHourMode ? 12 : 0)
                    )
                  }
                  maxLength={2}
                  disabled={disabledTimeSelector}
                />
                {disabledTimeSelector && <Ripple />}
              </div>
              <label
                htmlFor={timeSelector.type}
                className={`${styles['time-label']} ${!isClockHidden ? styles['time-label-hidden'] : ''} 
                `}
              >
                {timeSelector.label}
              </label>
            </div>
            {!timeSelector.id && <span className={styles.seperator}>:</span>}
          </React.Fragment>
        ))}
      </div>
      {!twentyFourHourMode && <PeriodSelector />}
    </div>
  );
}

export default TimeSelectorContainer;
