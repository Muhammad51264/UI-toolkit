import React from 'react';
import styles from './styles.module.css';
import { CLOCK_HOURS, CLOCK_24_HOURS } from './constants';
import useTimeContext from './hook';

function ClockContainer() {
  const { isClockHidden, isHorizontal, time, twentyFourHourMode, setTime } =
    useTimeContext();

  const hours = twentyFourHourMode ? CLOCK_24_HOURS : CLOCK_HOURS;

  return (
    <div
      className={`${styles['clock-container']} 
      ${isClockHidden && !isHorizontal ? styles['hidden-clock'] : ''} 
      ${isHorizontal ? styles['clock-container-horizontal'] : ''}
      ${isClockHidden && isHorizontal ? styles['hidden-clock-horizontal'] : ''}
      `}
    >
      <div
        className={`${styles.clock}`}
        style={{
          transform: isClockHidden && 'scale(0.75)',
          opacity: isClockHidden && '0',
        }}
      >
        {hours.map((hour) => {
          const angle = (hour.value - 3) * (Math.PI / 6);
          let radius;
          if (twentyFourHourMode) radius = hour.value < 12 ? 40 : 26;
          else radius = 40;
          const top = `${50 + radius * Math.sin(angle)}%`;
          const left = `${50 + radius * Math.cos(angle)}%`;
          return (
            <React.Fragment key={hour.id}>
              <label
                key={hour.id}
                style={{
                  '--i': hour.value,
                  top,
                  left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span
                  className={`${hour.value === parseInt(time.hour, 10) && styles['clock-chosen']}`}
                  onClick={() =>
                    setTime((prev) => ({
                      ...prev,
                      hour: hour.value.toString().padStart(2, '0'),
                    }))
                  }
                >
                  {hour.value}
                </span>
              </label>
            </React.Fragment>
          );
        })}

        <div className={styles['clock-center']}></div>
        <div
          className={styles['clock-track']}
          style={{
            transform: `rotate(${30 * parseInt(time.hour, 10)}deg)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ClockContainer;
