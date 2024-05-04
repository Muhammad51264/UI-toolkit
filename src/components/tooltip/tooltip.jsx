import React, { useMemo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './styles.module.css';

const ToolTip = ({
  className,
  firstActionButton,
  persistent,
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
  const [isVisible, setIsVisible] = useState(false);

  const timerRef = useRef(null);
  const opacityStyle = useMemo(() => {
    if (tooltipState.display || tooltipState.isHovered) {
      return style.displayTooltip;
    }
    return '';
  }, [tooltipState]);

  const handleContainerHover = () => {
    clearTimeout(timerRef.current);
    setIsVisible(true);
    setTooltipState((prevState) => ({ ...prevState, display: true }));
  };

  const handleContainerLeave = () => {
    if (!persistent) {
      timerRef.current = setTimeout(() => {
        setTooltipState((prevState) => ({ ...prevState, display: false }));
      }, 1500);
    }
  };

  const handleTooltipHover = () => {
    clearTimeout(timerRef.current);
    setIsVisible(true);
    setTooltipState((prevState) => ({ ...prevState, isHovered: true }));
  };

  const handleTooltipLeave = () => {
    if (!persistent) {
      timerRef.current = setTimeout(() => {
        setTooltipState((prevState) => ({ ...prevState, isHovered: false }));
      }, 1500);
    }
  };

  useEffect(() => {
    // Function to handle click outside
    const handleClickOutside = (event) => {
      if (tooltipState.display) {
        const tooltipElement = document.querySelector(
          `.${style.tooltipWrapper}`
        );
        if (tooltipElement && !tooltipElement.contains(event.target)) {
          setTooltipState((prevState) => ({ ...prevState, display: false }));
        }
      }
    };

    // Adding event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [tooltipState.display]);

  useEffect(() => {
    setTimeout(() => {
      if (!tooltipState.display && !tooltipState.isHovered && !persistent) {
        setIsVisible(false);
      }
    }, 400);
  }, [tooltipState, persistent]);

  return (
    <div
      className={style.tooltipContainer}
      onMouseOver={handleContainerHover}
      onMouseLeave={handleContainerLeave}
      data-testid="tooltipContainer"
    >
      {isVisible && (
        <div className={style.tooltipWrapper}>
          <div
            onMouseOver={handleTooltipHover}
            onMouseLeave={handleTooltipLeave}
            data-testid="tooltipContentWrapper"
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
      )}
    </div>
  );
};

ToolTip.defaultProps = {
  className: '',
  firstActionButton: null,
  position: 'top',
  persistent: false,
  secondActionButton: null,
  subhead: '',
  text: '',
  variant: 'plain',
};

ToolTip.propTypes = {
  /**
   * ClassName that is passed to the component
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
   * If the tooltip should be persistent or not
   */
  persistent: PropTypes.bool,
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
   * The variant of the tooltip: plain or rich
   */
  variant: PropTypes.oneOf(['plain', 'rich']),
};

export default ToolTip;
