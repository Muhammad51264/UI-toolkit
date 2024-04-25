import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Progress = ({ variant, className }) => (
  <div
    className={`${styles.loader} ${styles[className]}`}
    data-testid="progress"
  >
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
  className: '',
};

Progress.propTypes = {
  /**
   * the variant of the progressbar: linear or circular
   */
  variant: PropTypes.oneOf(['linear', 'circular']),
  /**
   * passed className to progressbar's container
   */
  className: PropTypes.string,
};

export default Progress;
