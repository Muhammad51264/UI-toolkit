import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { changeDate, checkDayMatch, getCalenderDays } from './utils';
import useDateContext from './hook';
import { WEEK_DAYS } from './constants';
import DateOptions from './date-options.jsx';
import DateControllerContainer from './date-controller-container.jsx';
import DateList from './date-list.jsx';
import ModalInput from './modal-input.jsx';

function Calender() {
  const {
    date,
    setDate,
    listOption,
    move,
    setMove,
    variant,
    isCalenderVisible,
  } = useDateContext();
  const [calenderDays, setCalenderDays] = useState([
    ...getCalenderDays(new Date(date)),
  ]);

  useEffect(() => {
    setCalenderDays(() => [...getCalenderDays(new Date(date))]);
  }, [date]);

  useEffect(() => {
    if (move.isMove) {
      const clearAnimation = setTimeout(() => {
        setMove((prev) => ({ ...prev, isMove: false }));
      }, 100);

      return () => clearTimeout(clearAnimation);
    }
    return undefined;
  }, [move, setMove]);

  const getCalenderDirectionClass = () => {
    if (move.direction === 'left')
      return `${move.isMove ? styles['next-month'] : styles['new-month']}`;
    if (move.direction === 'right') {
      return `${move.isMove ? styles['previous-month'] : styles['old-month']}`;
    }
    return `${move.direction === 'up' ? styles['calender-open'] : ''}`;
  };
  return (
    <div
      className={`${styles.calender} ${variant === 'modal' ? styles['calender-modal'] : ''}`}
    >
      {variant === 'modal' && <ModalInput />}

      {((isCalenderVisible && variant === 'modal') || variant === 'docked') && (
        <>
          <DateControllerContainer />

          {listOption.isOpen ? (
            <DateList dateType={listOption.listType} />
          ) : (
            <div
              className={`${styles['calender-day-container']} 
          ${getCalenderDirectionClass()}
        `}
            >
              <div className={styles['weekdays-container']}>
                {WEEK_DAYS.map((weekDay) => (
                  <span className={styles['day-name']} key={weekDay.id}>
                    {weekDay.day}
                    <div className={styles.tooltip}>{weekDay.fullDay}</div>
                  </span>
                ))}
              </div>

              <div className={styles['days-container']}>
                {calenderDays.map((day) =>
                  variant === 'docked' || !day.month ? (
                    <span
                      tabIndex={0}
                      className={`${styles['calender-day']} ${checkDayMatch(date, day) ? styles['today-date'] : ''} 
            ${checkDayMatch(date, day, date) ? styles['selected-date'] : ''}
            ${day.month ? styles['outside-month-day'] : ''}
            `}
                      key={day.id}
                      onClick={() => {
                        setDate((prevDate) =>
                          changeDate(prevDate, day.day, day.month)
                        );
                      }}
                      onKeyDown={(event) => {
                        if (event.key === ' ' || event.key === 'Enter') {
                          setDate((prevDate) =>
                            changeDate(prevDate, day.day, day.month)
                          );
                        }
                      }}
                    >
                      {day.day}
                    </span>
                  ) : (
                    <span
                      tabIndex={0}
                      className={`${styles['calender-day']} ${styles['outside-month-modal']}`}
                      key={day.id}
                    ></span>
                  )
                )}
              </div>
            </div>
          )}
          <DateOptions />
        </>
      )}
    </div>
  );
}

export default Calender;
