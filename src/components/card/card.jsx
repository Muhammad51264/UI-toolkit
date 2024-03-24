import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes from prop-types library
import '../../styles.css';
import '@material/web/ripple/ripple';
import '@material/web/elevation/elevation';

function Card({
  cardType,
  headline,
  isDisabled,
  image,
  subhead,
  supportingText,
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
      <style>
        {`
:root {
 --md-sys-color-on-surface: #1D1B20;
 --md-sys-state-dragged-state-layer-opacity:0.16;
 --md-sys-color-surface-container-low: #F7F2FA;
 --md-sys-color-surface: #FEF7FF;
 --md-sys-color-shadow: #000;
 --md-sys-color-secondary: #625B71;
 --md-ripple-hover-color: var(--md-sys-color-on-surface);
 --md-ripple-pressed-color: var(--md-sys-color-on-surface);
 --md-elevation-shadow-color:var(--md-sys-color-shadow);
}

.card-wrapper {
 --md-elevation-level: 1;
 --md-elevation-shadow-color: var(--md-sys-color-shadow);
 border-radius: 0.75rem;
 border: 0;
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 marging 0 0.5rem;
 padding: 0 1rem;
 position: relative;
 text-align: center;
}

.elevated {
 background-color: var(--md-sys-color-surface-container-low);
}

.elevated:disabled {
    background-color: var(--md-sys-color-surface);
    opacity: 0.38;
}

.elevated:focus {
    outline: var(--md-sys-color-secondary);
}

.elevated.draggable {
  --md-elevation-level: 4;
  background-color: var(--md-sys-color-on-surface);
  opacity: 0.16;
}

.filled {
 background-color: #f4dddc;
}

.outlined {
 background-color: transparent;
 border: 1px solid #e1d0cf;
}
`}
      </style>

      <button
        className={`card-wrapper ${cardType} ${isDragging && 'draggable'}`}
        disabled={isDisabled}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {(cardType === 'elevated' || isDisabled) && (
          <md-elevation aria-hidden="true"></md-elevation>
        )}
        {!isDisabled && <md-ripple></md-ripple>}
      </button>
    </>
  );
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['elevated', 'filled', 'outlined']),
  headline: PropTypes.node,
  image: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  subhead: PropTypes.node,
  supportingText: PropTypes.node,
};

Card.defaultProps = {
  cardType: 'elevated',
  headline: 'headline',
  image: '',
  isDisabled: false,
  onClick: null,
  subhead: 'subHead',
  supportingText: '',
};

export default Card;
