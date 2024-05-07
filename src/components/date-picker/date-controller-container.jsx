import React from 'react';
import styles from './styles.module.css';
import DateController from './date-controller.jsx';
import useDateContext from './hook';

function DateControllerContainer() {
  const { variant } = useDateContext();
  return (
    <div
      className={`${styles['controller-container']} ${variant === 'modal' ? styles['controller-container-modal'] : ''}`}
    >
      <DateController controllerDate={'month'} />
      <DateController controllerDate={'year'} />
    </div>
  );
}

export default DateControllerContainer;
