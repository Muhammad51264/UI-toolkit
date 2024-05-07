import React from 'react';
import styles from './styles.module.css';
import useDateContext from './hook';

function ModalInput() {
  const { supportingText, date, isCalenderVisible, setIsCalenderVisible } =
    useDateContext();
  const currentDate = new Date(date);
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
  });
  return (
    <div className={styles['modal-input']}>
      <span className={styles['modal-input-supporting-text']}>
        {supportingText}
      </span>
      <div className={styles['modal-input-date-container']}>
        <span className={styles['modal-input-date']}>{formattedDate}</span>
        <span
          tabIndex={0}
          className={styles['modal-input-icon']}
          onClick={() => setIsCalenderVisible((prev) => !prev)}
          onKeyDown={(event) => {
            if (event.key === ' ' || event.key === 'Enter') {
              setIsCalenderVisible((prev) => !prev);
            }
          }}
        >
          {isCalenderVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
}

export default ModalInput;
