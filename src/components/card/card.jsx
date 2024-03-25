import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@material/web/ripple/ripple';
import '@material/web/elevation/elevation';

function Card({
  cardType,
  children,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
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
      <style>
        {`
.card-wrapper {
  --md-elevation-shadow-color: var(--md-sys-color-shadow);
  background-color: var(--md-sys-color-surface);
  border: 0;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 0.5rem;
  max-height: ${maxHeight};
  max-width: ${maxWidth};
  min-height: ${minHeight};
  min-width: ${minWidth};
  padding: 0 1rem;
  position: relative;
  text-align: center;
}

.elevated {
  --md-elevation-level: 1;
  background-color: var(--md-sys-color-surface-container-low);
}

.elevated:disabled, .filled:disabled {
  --md-elevation-level: 1;
  background-color: var(--md-sys-color-surface);
  opacity: 0.38;
}

.elevated.draggable {
  --md-elevation-level: 4;
  background-color: var(--md-sys-color-on-surface);
  opacity: var(--md-sys-state-dragged-state-layer-opacity);
}

.elevated:focus-visible {
  outline: 1px solid var(--md-sys-color-secondary);
}

.filled {
  --md-elevation-level: 0;
  background-color: var(--md-sys-color-surface-container-highest);
}

.filled.draggable {
  --md-elevation-level: 3;
  background-color: var(--md-sys-color-on-surface);
}

.filled:focus-visible {
  outline: 1px solid var(--md-sys-color-surface);
}

.outlined {
  --md-elevation-level: 0;
  background-color: var(--md-sys-color-surface);
  outline: 1px solid var(--md-sys-color-outline-variant);
}

.outlined:disabled {
  outline: 1px solid var(--md-sys-color-outline);
}

.outlined.draggable {
  --md-elevation-level: 3;
  background-color: var(--md-sys-color-on-surface);
  opacity: var(--md-sys-state-dragged-state-layer-opacity);
}

.outlined:focus-visible {
  outline: var(--md-sys-state-focus-indicator-outer-offset) solid var(--md-sys-color-secondary);
  outline-width: var(--md-sys-state-focus-indicator-thickness);
}

`}
      </style>

      <button
        className={`card-wrapper ${cardType} ${isDragging && 'draggable'}`}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        {...props}
      >
        <md-elevation aria-hidden="true"></md-elevation>
        {!props.disabled && <md-ripple></md-ripple>}
        {children}
      </button>
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
  maxHeight: PropTypes.string,
  /**
   * Card max width
   */
  maxWidth: PropTypes.string,

  /**
   * Card min height
   */
  minHeight: PropTypes.string,
  /**
   * Card min width
   */
  minWidth: PropTypes.string,

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
  maxHeight: 'auto',
  maxWidth: '25rem',
  minHeight: '9.375rem',
  minWidth: '15.625rem',
  onClick: null,
};

export default Card;
