import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

const Badges = ({ className, size, label, maxNumber }) => {
  const labelNumber = label > maxNumber ? `${maxNumber}+` : label;
  const sizeClass = label && size ? styles[size] : styles.small;
  const multipleDigitsClass =
    label.toString().length > 1 && size === 'large'
      ? styles.multipleDigits
      : '';

  return (
    <div
      className={`${styles.badges} ${sizeClass} ${multipleDigitsClass} ${styles[className]}`}
      data-testid="badges"
    >
      {size === 'large' ? labelNumber : ''}
    </div>
  );
};

Badges.defaultProps = {
  className: '',
  size: 'small',
  label: 0,
  maxNumber: 99,
};

Badges.propTypes = {
  /**
   * passed className to Badge's container
   */
  className: PropTypes.string,
  /**
   * size of the Badges
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   * the number that is displayed in the badge
   */
  label: PropTypes.number,
  /**
   * the maximum number you want to display of the label if the label is large
   */
  maxNumber: PropTypes.number,
};

export default Badges;
