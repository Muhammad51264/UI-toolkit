import React, { useState } from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import '@material/web/ripple/ripple';
import '@material/web/elevation/elevation';

function Card({ cardType, children, disabled, ...props }) {
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
        className={`card-wrapper ${styles[cardType]} ${styles['card-wrapper']} ${isDragging && 'draggable'} ${disabled && styles.disabled}`}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        {...props}
      >
        <md-elevation aria-hidden="true"></md-elevation>
        {!disabled && <md-ripple></md-ripple>}
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
  disabled: false,
  draggable: false,
  onClick: null,
};

export default Card;
