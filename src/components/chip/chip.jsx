import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import '@material/web/elevation/elevation';
import '@material/web/ripple/ripple';
import '@material/web/icon/icon';
import '@material/web/chips/input-chip';
function Chip({
  chipType,
  disabled,
  elevated,
  label,
  leadingIcon,
  selected,
  trailingIcon,
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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div
        className={`${styles.container} ${styles[chipType]} ${elevated && styles.elevated} ${disabled && styles.disabled} ${selected && styles.selected} ${isDragging && styles.dragged}`}
        tabIndex={disabled ? -1 : 0}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        {...props}
      >
        {leadingIcon && (
          <md-icon tabIndex={disabled ? -1 : 0}>{leadingIcon}</md-icon>
        )}

        {selected && chipType === 'filter' && <md-icon>done</md-icon>}

        <span className={styles.label}>{label}</span>

        {!disabled && <md-ripple></md-ripple>}

        {trailingIcon && (
          <md-icon tabIndex={disabled ? -1 : 0}>{trailingIcon}</md-icon>
        )}

        {chipType === 'input' && <md-icon>close
        <md-ripple></md-ripple>
          </md-icon>}
      </div>
    </>
  );
}

Chip.propTypes = {
  /**
   * Chip type.
   */
  chipType: PropTypes.oneOf(['assist', 'filter', 'input', 'suggestion']),
  /**
   * If true, the chip will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the chip will be draggable.
   */
  draggable: PropTypes.bool,
  /**
   * If true, the chip will be elevated.
   */
  elevated: PropTypes.bool,
  /**
   * The label of the chip.
   */
  label: PropTypes.string,
  /**
   * The leading icon of the chip.
   */
  leadingIcon: PropTypes.node,
  /**
   * The leading icon of the chip.
   */
  onClick: PropTypes.func,
  /**
   * If true, the chip will be selected.
   */
  selected: PropTypes.bool,
  /**
   * The trailing icon of the chip.
   */
  trailingIcon: PropTypes.node,
};

Chip.defaultProps = {
  chipType: 'assist',
  disabled: false,
  draggable: false,
  elevated: false,
  label: 'label',
  leadingIcon: '',
  onClick: undefined,
  selected: false,
  trailingIcon: '',
};

export default Chip;
