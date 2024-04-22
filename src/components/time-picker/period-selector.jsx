import React from 'react';
import styles from './styles.module.css';
import Ripple from '../ripple';
import { TIME_PERIODS } from './constants';
import useTimeContext from './hook';

function PeriodSelector() {
  const { isClockHidden, isHorizontal, period, setPeriod } = useTimeContext();
  return (
    <div
      className={`${styles['period-container']} 
      ${isHorizontal && !isClockHidden ? styles['period-container-horizontal'] : ''}
      ${isClockHidden ? styles['period-container-horizontal-hidden'] : ''}
      `}
    >
      {TIME_PERIODS.map((timePeriod) => (
        <button
          className={`${styles['period-selector']} ${period === timePeriod.type && styles.selected} 
          ${isHorizontal && !isClockHidden ? styles['period-selector-horizontal'] : ''}`}
          key={timePeriod.id}
          onClick={() => setPeriod(timePeriod.type)}
        >
          {timePeriod.type}
          <Ripple />
        </button>
      ))}
    </div>
  );
}

export default PeriodSelector;
