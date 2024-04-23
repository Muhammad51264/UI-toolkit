import React, { useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import style from './styles.module.css';

const ToolTip = ({
  className,
  firstActionButton,
  position,
  secondActionButton,
  subhead,
  text,
  variant,
}) => {
  const [tooltipState, setTooltipState] = useState({
    display: false,
    isHovered: false,
  });
  const timerRef = useRef(null);
  const opacityStyle = useMemo(() => {
    if (tooltipState.display || tooltipState.isHovered) {
      return style.displayTooltip;
    }
    return '';
  }, [tooltipState]);

  const handleContainerHover = () => {
    clearTimeout(timerRef.current);
    setTooltipState((prevState) => ({ ...prevState, display: true }));
  };

  const handleContainerLeave = () => {
    timerRef.current = setTimeout(() => {
      setTooltipState((prevState) => ({ ...prevState, display: false }));
    }, 1500);
  };

  const handleTooltipHover = () => {
    clearTimeout(timerRef.current);
    setTooltipState((prevState) => ({ ...prevState, isHovered: true }));
  };

  const handleTooltipLeave = () => {
    timerRef.current = setTimeout(() => {
      setTooltipState((prevState) => ({ ...prevState, isHovered: false }));
    }, 1500);
  };

  return (
    <div
      className={style.tooltipContainer}
      onMouseOver={handleContainerHover}
      onMouseLeave={handleContainerLeave}
    >
      <div className={style.tooltipWrapper}>
        <div
          onMouseOver={handleTooltipHover}
          onMouseLeave={handleTooltipLeave}
          className={`${style.tooltip} ${style[className]} ${style[position]} ${opacityStyle}`}
        >
          {variant === 'plain' ? (
            <div className={style.plain}>{text}</div>
          ) : (
            <div className={style.rich}>
              {!!subhead.length && <p className={style.subhead}>{subhead}</p>}
              {!!text && <p className={style.richText}>{text}</p>}
              {(firstActionButton || secondActionButton) && (
                <div className={style.tooltipButtons}>
                  {firstActionButton}
                  {secondActionButton}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ToolTip.defaultProps = {
  className: '',
  firstActionButton: null,
  position: 'top',
  secondActionButton: null,
  subhead: '',
  text: '',
  variant: 'plain',
};

ToolTip.propTypes = {
  /**
   * className that is passed to the component
   */
  className: PropTypes.string,
  /**
   * First button in the rich tooltip
   */
  firstActionButton: PropTypes.element,
  /**
   * Position of the tooltip according to the container
   */
  position: PropTypes.oneOf([
    'top',
    'bottom',
    'right',
    'left',
    'topLeft',
    'topRight',
    'bottomRight',
    'bottomLeft',
  ]),
  /**
   * Second button in the rich tooltip
   */
  secondActionButton: PropTypes.element,
  /**
   * The subhead or title of the rich tooltip
   */
  subhead: PropTypes.string,
  /**
   * The main text of the rich or plain tooltip
   */
  text: PropTypes.string,
  /**
   * the variant of the tooltip: plain or rich
   */
  variant: PropTypes.oneOf(['plain', 'rich']),
};

export default ToolTip;
