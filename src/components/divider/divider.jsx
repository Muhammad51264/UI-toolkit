import React from 'react';
import PropTypes from 'prop-types';
import styles from './divider.module.css';

const divider = ({ className, inset, insetEnd, insetStart, ...props }) => (
  <hr
    className={`${styles.divider} ${inset ? styles.inset : ''} ${insetStart ? styles.insetStart : ''} ${insetEnd ? styles.insetEnd : ''}`}
    {...props}
  />
);

divider.defaultProps = {
  className: '',
  inset: false,
  insetEnd: false,
  insetStart: false,
};

divider.propTypes = {
  /**
   * Styles class name
   */
  className: PropTypes.string,
  /**
   * Indents the divider with equal padding on both sides.
   */
  inset: PropTypes.bool,
  /**
   * Indents the divider with equal padding on both sides.
   */
  insetEnd: PropTypes.bool,
  /**
   * Indents the divider with equal padding on both sides.
   */
  insetStart: PropTypes.bool,
};

export default divider;
