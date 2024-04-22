import React from 'react';
import styles from './styles.module.css';
import Ripple from '../ripple';
import useTimeContext from './hook';

function OptionsContainer() {
  const {
    isClockHidden,
    setIsClockHidden,
    onAccept,
    time,
    twentyFourHourMode,
    period,
    setIsClosed,
  } = useTimeContext();

  const handleOkClick = () => {
    const timeValue = `${time.hour}:${time.min} ${!twentyFourHourMode ? period : ''}`;
    if (onAccept) {
      onAccept(timeValue);
    }
  };
  return (
    <div className={styles['options-container']}>
      <button
        className={styles.icon}
        onClick={() => setIsClockHidden((prev) => !prev)}
        data-testid="clock"
      >
        {isClockHidden ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-280v-400 400Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
          </svg>
        )}
      </button>

      <div className={styles['btn-container']}>
        <button className={styles.btn} onClick={() => setIsClosed(true)}>
          <span>cancel</span>
          <Ripple />
        </button>
        <button className={styles.btn} onClick={handleOkClick}>
          <span>OK</span>
          <Ripple />
        </button>
      </div>
    </div>
  );
}

export default OptionsContainer;
