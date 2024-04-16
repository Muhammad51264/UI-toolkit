import React from 'react';
import PropTypes from 'prop-types';
import { MdFilledSelect } from '@material/web/select/filled-select';
import { MdOutlinedSelect } from '@material/web/select/outlined-select';
import '@material/web/select/select-option';
import { createComponent } from '@lit/react';

function Select({ className, icon, options, isFilled, ...props }) {
  const SelectElement = createComponent({
    tagName: isFilled ? 'md-filled-select' : 'md-outlined-select',
    elementClass: isFilled ? MdFilledSelect : MdOutlinedSelect,
    react: React,
    events: {
      onChange: 'change',
      onInput: 'input',
      onOpening: 'opening',
      onOpened: 'opened',
      onClosing: 'closing',
      onClosed: 'closed',
    },
  });

  return (
    <SelectElement className={className} {...props}>
      {icon && <md-icon slot="leading-icon">{icon}</md-icon>}
      {Array.isArray(options) &&
        options?.map((option) => (
          <md-select-option
            aria-label={option.value}
            value={option.value}
            key={option.id}
          >
            {option.content}
          </md-select-option>
        ))}
    </SelectElement>
  );
}

Select.propTypes = {
  /**
   * Styles classname
   */
  className: PropTypes.string,
  /**
   * If true, an error state will be displayed.
   */
  error: PropTypes.bool,
  /**
   * Error message to be displayed when error prop is true.
   */
  errorText: PropTypes.string,
  /**
   * Icon element to be displayed inside the select.
   */
  icon: PropTypes.element,
  /**
   * If true, the select will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, the select will be displayed as a filled select.
   */
  isFilled: PropTypes.bool,

  /**
   * If true, the select will be required.
   */
  required: PropTypes.bool,

  /**
   * Label for the select input.
   */
  label: PropTypes.string,

  /**
   * Function called when the select value changes.
   */
  onChange: PropTypes.func,

  /**
   * Function called when the select is closing.
   */
  onClosing: PropTypes.func,

  /**
   * Function called when the select is closed.
   */
  onClosed: PropTypes.func,

  /**
   * Function called when the select value is being input.
   */
  onInput: PropTypes.func,

  /**
   * Function called when the select is opened.
   */
  onOpened: PropTypes.func,

  /**
   * Function called when the select is opening.
   */
  onOpening: PropTypes.func,

  /**
   * Array of options to be displayed in the select.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node,
      id: PropTypes.number,
      value: PropTypes.string,
    })
  ),

  /**
   * If true, enable quick selection mode.
   */
  quick: PropTypes.bool,

  /**
   * Supporting text to be displayed below the select input.
   */
  supportingText: PropTypes.string,
};

Select.defaultProps = {
  className: '',
  error: false,
  errorText: 'Please select an option.',
  icon: undefined,
  disabled: false,
  isFilled: false,
  required: false,
  label: '',
  onChange: undefined,
  onClosing: undefined,
  onClosed: undefined,
  onInput: undefined,
  onOpened: undefined,
  onOpening: undefined,
  options: [
    { content: 'option - 1', id: 0, value: 'option1' },
    { content: 'option - 2', id: 1, value: 'option2' },
    { content: 'option - 3', id: 2, value: 'option3' },
  ],
  quick: false,
  supportingText: '',
};

export default Select;
