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
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.number,
  maxNumber: PropTypes.number,
};

export default Badges;
