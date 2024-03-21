import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes from prop-types library
import styles from './style.modules.css';

/**
 * Card component.
 * @param {object} props - The component props.
 * @param {string} [props.alignItems='center'] - Determines the alignment of the card's children along the cross axis.
 * @param {string} [props.cardType='elevated'] - Determines the card type.
 * @param {children} [props.children=null] - Determines the children of the card component.
 * @param {string} [props.customClass=''] - Determines a custom class for the card.
 * @param {string} [props.flexDirection='column'] - Determines flex direction.
 * @param {string} [props.gap='0.8rem'] - Determines the gap between card's children.
 * @param {string} [props.justifyContent=''] - Determines the alignment of the card's children along the main axis.
 * @param {string} [props.padding='0.9375rem'] - Determines the padding of the card component.
 * @param {string} [props.width='auto'] - Determines the width of the card component.
 */
function Card({
  alignItems,
  cardType,
  children,
  customClass,
  flexDirection,
  gap,
  justifyContent,
  padding,
  width,
}) {
  const flexStyles = {
    alignItems,
    flexDirection,
    gap,
    justifyContent,
    padding,
    width,
  };
  return (
    <div
      className={`${styles.cardWrapper} ${styles[cardType]} ${customClass}`}
      style={flexStyles}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
  cardType: PropTypes.oneOf(['elevated', 'filled', 'outlined']),
  children: PropTypes.node,
  customClass: PropTypes.string,
  flexDirection: PropTypes.oneOf([
    'column',
    'row',
    'column-reverse',
    'row-reverse',
  ]),
  gap: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-around',
    'space-between',
  ]),
  padding: PropTypes.string,
  width: PropTypes.string,
};

Card.defaultProps = {
  alignItems: 'center',
  cardType: 'elevated',
  children: null,
  customClass: '',
  flexDirection: 'column',
  gap: '0.8rem',
  justifyContent: 'center',
  padding: '0.9375rem',
  width: 'auto',
};

export default Card;
