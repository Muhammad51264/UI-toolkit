import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Ripple from '../ripple';

function Card({ cardType, children, className, disabled, ...props }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div
        data-testid="card"
        className={`${styles['card-wrapper']} ${styles[cardType]} ${styles['card-wrapper']}
         ${isDragging && styles.draggable} ${disabled && styles.disabled}  ${styles[className]}`}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        {...props}
      >
        {!disabled && <Ripple duration={875} />}

        {children}
      </div>
    </>
  );
}

Card.propTypes = {
  /**
   * Type of card: elevated, filled, or outlined
   */
  cardType: PropTypes.oneOf(['elevated', 'filled', 'outlined']),

  /**
   * The content inside the card
   */
  children: PropTypes.node,

  /**
   * Component classname
   */
  className: PropTypes.string,

  /**
   * If true, the card is disabled
   */
  disabled: PropTypes.bool,

  /**
   * If true, the card is draggable
   */
  draggable: PropTypes.bool,
  /**
   * Function called when the card is clicked
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  cardType: 'elevated',
  children: null,
  className: '',
  disabled: false,
  draggable: false,
  onClick: null,
};

export default Card;
