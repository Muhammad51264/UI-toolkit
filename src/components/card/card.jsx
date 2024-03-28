import React, { useState } from 'react';
import styles from "./styles.module.css";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '@material/web/ripple/ripple';
import '@material/web/elevation/elevation';


const StyledCard = styled.div`
  max-height: ${props => props.maxheigh};
  max-width: ${props => props.maxwidth};
  min-height: ${props => props.minheight};
  min-width: ${props => props.minwidth};
`;
function Card({
  cardType,
  children,
  disabled,
  ...props
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <StyledCard
          data-testid="card"
        className={`card-wrapper ${styles[cardType]} ${styles['card-wrapper']} ${isDragging && 'draggable'} ${disabled && styles.disabled}`}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        {...props}
      >
        <md-elevation aria-hidden="true"></md-elevation>
        {!disabled && <md-ripple></md-ripple>}
        {children}
      </StyledCard>
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
   * Card max height
   */
  maxheight: PropTypes.string,
  /**
   * Card max width
   */
  maxwidth: PropTypes.string,

  /**
   * Card min height
   */
  minheight: PropTypes.string,
  /**
   * Card min width
   */
  minwidth: PropTypes.string,

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
  maxheight: 'auto',
  maxwidth: '25rem',
  minjeight: '9.375rem',
  minwidth: '15.625rem',
  onClick: null,
};

export default Card;
