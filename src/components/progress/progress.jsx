import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Progress = ({ variant }) => (
  <div className={styles.loader} data-testid="progress">
    {variant === 'linear' ? (
      <div className={styles.barContainer}>
        <div className={styles.barTrack}>
          <div className={styles.barPath}></div>
        </div>
      </div>
    ) : (
      <>
        <svg className={styles.circularPlace}>
          <circle
            className={styles.circularPath}
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="5"
            strokeMiterlimit="10"
          />
        </svg>
      </>
    )}
  </div>
);

Progress.defaultProps = {
  variant: 'circular',
};

Progress.propTypes = {
  variant: PropTypes.oneOf(['linear', 'circular']),
};

export default Progress;
