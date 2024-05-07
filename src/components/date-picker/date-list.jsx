import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { MONTHS_NAMES } from './constants';
import useDateContext from './hook';
import { changeDate } from './utils';

function DateList({ dateType }) {
  const { date, setDate, setListOption } = useDateContext();

  const getInitialValues = () => {
    if (dateType === 'month')
      return {
        list: MONTHS_NAMES,
        initialValue: MONTHS_NAMES[new Date(date).getMonth()].name,
      };
    const currentYear = new Date(date).getFullYear();
    const yearsList = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      name: currentYear + index - 1,
    }));

    return {
      list: yearsList,
      initialValue: currentYear,
    };
  };

  const listItems = [...getInitialValues().list];

  return (
    <ul className={styles.list}>
      {listItems.map((item) => (
        <li
          tabIndex={0}
          key={item.id}
          className={`${styles['list-item']} ${getInitialValues().initialValue === item.name ? styles['item-selected'] : ''}`}
          onClick={() => {
            setDate((prev) => changeDate(prev, item.name, 0, dateType[0]));
            setListOption((prev) => ({ ...prev, isOpen: false }));
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setDate((prev) => changeDate(prev, item.name, 0, dateType[0]));
              setListOption((prev) => ({ ...prev, isOpen: false }));
            }
          }}
        >
          {getInitialValues().initialValue === item.name && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className={styles.check}
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          )}
          <span
            className={`${getInitialValues().initialValue !== item.name ? styles['list-item-padding-left'] : ''}`}
          >
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

DateList.propTypes = {
  /**
   * dateType: Determines if the list contains months or years
   */
  dateType: PropTypes.string.isRequired,
};

export default DateList;
