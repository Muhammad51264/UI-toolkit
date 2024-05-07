import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Ripple from '../ripple';

const List = ({
  headline,
  isDisabled,
  isDraggable,
  isEdit,
  isLastList,
  isMultiLine,
  isPointer,
  leading,
  leadingType,
  onClick,
  onDragStart,
  onDragEnd,
  supportingText,
  trailing,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const disabledStyle = isDisabled ? styles.disabled : '';
  const multiLineStyle = isMultiLine ? styles.multiLine : '';
  const withoutBorderBottomStyle = isLastList ? styles.noBorderBottom : '';
  const draggableStyle = isDragging ? styles.draggingList : '';
  const editStyle = isEdit ? styles.editList : '';
  const cursorStyle = isPointer ? styles.pointer : '';
  const ellipsisStyle = isMultiLine ? styles.multiLinesEllipses : '';

  const handleDragStart = (event) => {
    event.dataTransfer?.setData('text/plain', '');
    setIsDragging(true);
    onDragStart();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEnd();
  };

  return (
    <div
      className={`${styles.listContainer} ${disabledStyle} ${multiLineStyle} ${withoutBorderBottomStyle} ${editStyle} ${draggableStyle} ${cursorStyle}`}
      draggable={isDraggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={onClick}
      data-testid="listComponent"
    >
      <div className={styles.leftSideContainer}>
        <div className={styles[leadingType]} data-testid="leadingWrapper">
          {leading}
        </div>
        <div className={styles.listTexts}>
          <p className={styles.headline}>{headline}</p>
          {supportingText && (
            <p className={`${styles.supportingText} ${ellipsisStyle}`}>
              {supportingText}
            </p>
          )}
        </div>
      </div>
      <div
        className={`${styles.rightSideContainer} ${styles.trailingSupportingText}`}
        data-testid="trailingWrapper"
      >
        {isEdit ? (
          <svg
            width="21"
            height="9"
            viewBox="0 0 21 9"
            aria-label="edit-icon"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66864 1.04785H19.6686"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.66864 7.04785H19.6686"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          trailing
        )}
      </div>
      <Ripple />
    </div>
  );
};

List.defaultProps = {
  headline: '',
  isDisabled: false,
  isDraggable: false,
  isEdit: false,
  isLastList: false,
  isMultiLine: false,
  isPointer: true,
  leading: null,
  leadingType: 'text',
  onClick: null,
  onDragStart: null,
  onDragEnd: null,
  supportingText: '',
  trailing: null,
};

List.propTypes = {
  /**
   * headline text
   */
  headline: PropTypes.string,
  /**
   * if the list disabled or not
   */
  isDisabled: PropTypes.bool,
  /**
   * if the list draggable or not
   */
  isDraggable: PropTypes.bool,
  /**
   * if the status of the list is edit
   */
  isEdit: PropTypes.bool,
  /**
   * if the list is the last one
   */
  isLastList: PropTypes.bool,
  /**
   * if the list is multiline list, the supporting text is 2 lines
   */
  isMultiLine: PropTypes.bool,
  /**
   * if the mouse cursor above the list is pointer or default
   */
  isPointer: PropTypes.bool,
  /**
   * the leading element that we want to display before the headline
   */
  leading: PropTypes.element,
  /**
   * the leading element type
   */
  leadingType: PropTypes.oneOf([
    'text',
    'image',
    'icon',
    'avatar',
    'checkbox',
    'radioButton',
  ]),
  /**
   * actions when the list is clicked
   */
  onClick: PropTypes.func,
  /**
   * action when the list starts to be dragged
   */
  onDragStart: PropTypes.func,
  /**
   * action when the list's dragging ends
   */
  onDragEnd: PropTypes.func,
  /**
   * supporting text for the list
   */
  supportingText: PropTypes.string,
  /**
   * the element that will be appeared at the end of the list
   */
  trailing: PropTypes.element,
};

export default List;
