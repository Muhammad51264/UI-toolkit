import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Ripple from '../ripple';

function Chip({
  avatarIcon,
  chipType,
  className,
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
      <div
        className={`${styles.container} ${styles[chipType]} ${elevated && styles.elevated} 
        ${disabled && styles.disabled} ${selected && styles.selected} ${isDragging && styles.dragged} ${styles[className]}`}
        tabIndex={disabled ? -1 : 0}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        data-testid="chip"
        {...props}
      >
        {avatarIcon && chipType === 'input' && (
          <span className={styles.avatar} tabIndex={disabled ? -1 : 0}>
            {avatarIcon}
          </span>
        )}

        {leadingIcon && (
          <span
            className={styles['icon-container']}
            tabIndex={disabled ? -1 : 0}
          >
            {leadingIcon}
          </span>
        )}

        {selected && chipType === 'filter' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            viewBox="0 -960 960 960"
          >
            <path d="M383-227.912 143.912-467l72.153-72.153L383-372.218l360.935-360.935L816.088-661 383-227.912Z" />
          </svg>
        )}

        <span
          className={`${styles.label} ${(chipType === 'input' || trailingIcon) && styles['no-padding-right']}
           ${(avatarIcon || leadingIcon || (selected && chipType === 'filter')) && styles['no-padding-left']}`}
        >
          {label}
        </span>

        {!disabled && <Ripple />}

        {trailingIcon && (
          <span
            className={styles['icon-container']}
            tabIndex={disabled ? -1 : 0}
          >
            {trailingIcon}
          </span>
        )}

        {chipType === 'input' && (
          <span
            className={styles['icon-container']}
            tabIndex={disabled ? -1 : 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles['close-icon']}
              viewBox="0 -960 960 960"
            >
              <path d="M259-187.912 188.912-259l220-221-220-221L259-772.088l221 221 221-221L771.088-701l-220 221 220 221L701-187.912l-221-221-221 221Z" />
            </svg>
          </span>
        )}
      </div>
    </>
  );
}

Chip.propTypes = {
  /**
   * Avatar icon.
   */
  avatarIcon: PropTypes.node,
  /**
   * Chip type.
   */
  chipType: PropTypes.oneOf(['assist', 'filter', 'input', 'suggestion']),
  /**
   * Component classname
   */
  className: PropTypes.string,
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
  avatarIcon: '',
  chipType: 'assist',
  className: '',
  disabled: false,
  draggable: false,
  elevated: false,
  label: 'label chip',
  leadingIcon: '',
  onClick: undefined,
  selected: false,
  trailingIcon: '',
};

export default Chip;
