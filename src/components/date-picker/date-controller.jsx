import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import useDateContext from './hook';
import { changeYearOrMonth } from './utils';
import Ripple from '../ripple';

function DateController({ controllerDate }) {
  const { date, setDate, setListOption, listOption, setMove, variant } =
    useDateContext();

  const formattedMonth = new Date(date);
  const dateUpDownFuncs = () => {
    if (controllerDate === 'month' || variant === 'modal') {
      const month = formattedMonth.toLocaleString('default', {
        month: variant === 'docked' ? 'short' : 'long',
      });
      return {
        dec: changeYearOrMonth(date, false),
        inc: changeYearOrMonth(date),
        date: month,
      };
    }
    return {
      dec: changeYearOrMonth(date, false, false),
      inc: changeYearOrMonth(date, true, false),
      date: formattedMonth.getFullYear(),
    };
  };

  const calenderNavigation = (direction) => {
    if (direction === 'left') {
      setDate(dateUpDownFuncs().dec);
      setMove({ direction: 'right', isMove: true });
    } else if (direction === 'right') {
      setDate(dateUpDownFuncs().inc);
      setMove({ direction: 'left', isMove: true });
    } else {
      setListOption((prev) => ({
        isOpen: !prev.isOpen,
        listType: prev.isOpen ? 'none' : controllerDate,
      }));
      setMove((prev) => ({ ...prev, direction: 'up' }));
    }
  };

  return (
    <div
      className={`${styles.controller} ${variant === 'modal' ? styles['controller-modal'] : ''}`}
    >
      {!(controllerDate === 'month' && variant === 'modal') && (
        <span
          className={`${styles.navigation} ${styles.left} ${listOption.isOpen ? styles['list-open'] : ''} ${variant !== 'docked' ? styles['modal-icons'] : ''}`}
          onClick={() => {
            calenderNavigation('left');
          }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              calenderNavigation('left');
            }
          }}
        >
          <Ripple />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
            </g>
          </svg>
        </span>
      )}

      {(controllerDate !== 'year' || variant === 'docked') && (
        <div
          className={`${styles['dropdown-container']} ${listOption.listType !== controllerDate && listOption.isOpen ? styles['dropdown-container-disabled'] : ''} `}
          onClick={() => {
            calenderNavigation();
          }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              calenderNavigation();
            }
          }}
        >
          <Ripple />
          <span className={styles['controller-name']}>
            {dateUpDownFuncs().date}
            {controllerDate === 'month' && variant === 'modal'
              ? ` ${formattedMonth.getFullYear()}`
              : ''}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`${styles.dropdown} ${listOption.isOpen ? styles['dropdown-open'] : ''}`}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      )}

      {!(controllerDate === 'month' && variant === 'modal') && (
        <span
          className={`${styles.navigation} ${listOption.isOpen ? styles['list-open'] : ''} ${variant !== 'docked' ? styles['modal-icons'] : ''}`}
          onClick={() => {
            calenderNavigation('right');
          }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              calenderNavigation('right');
            }
          }}
        >
          <Ripple />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
            </g>
          </svg>
        </span>
      )}
    </div>
  );
}
export default DateController;

DateController.defaultProps = {
  controllerDate: 'month',
};

DateController.propTypes = {
  /**
   * controllerDate: Determines if the controller is changing months or years
   */
  controllerDate: PropTypes.oneOf(['month', 'year']),
};
