import React from 'react';
import PropTypes from 'prop-types';
import { MdFilledSelect } from '@material/web/select/filled-select';
import { MdOutlinedSelect } from '@material/web/select/outlined-select';
import '@material/web/select/select-option';

import { createComponent } from '@lit/react';

/**
 * Select component.
 * @param {object} props - The component props.
 * @param {boolean} [props.isFilled=false] - Determines whether to render an filled select.
 * @param {string} [props.label=''] - Determines the label text value.
 * @param {boolean} [props.quick=false] - Determines whether to open the menu synchronously with no animation.
 * @param {boolean} [props.isDisabled=false] - Determines whether the select is disabled.
 * @param {boolean} [props.isRequired=false] - Determines whether the select is required.
 * @param {boolean} [props.error=false] - Determines whether the select is invalid state.
 * @param {string} [props.errorText='Please select an option.'] - Determines the error message when error property is true.
 * @param {string} [props.supportingText=''] - Determines additional information below the select.
 * @param {HTMLElement} [prop.icon=undefined] - Determines the icon in the select.
 * @param {func} [prop.onChange=unefined] - Determines the fired event when the select's value is about to change.
 * @param {func} [prop.onInput=unefined] - Determines the fired event triggered when the user inputs a value into the select component.
 * @param {func} [prop.onOpening=unefined] - Determines the fired when the select's menu is about to open.
 * @param {func} [prop.onOpened=unefined] - Determines the fired event when the select's menu has finished animations and opened.
 * @param {func} [prop.onClosing=unefined] - Determines the fired when the select's menu is about to close.
 * @param {func} [prop.onClosed=unefined] - Determines the fired event when the select's menu has finished animations and closed.
 */

function Select({
  isFilled,
  label,
  quick,
  options,
  isDisabled,
  isRequired,
  error,
  errorText,
  supportingText,
  icon,
  onChange,
  onInput,
  onOpening,
  onOpened,
  onClosing,
  onClosed,
}) {
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
    <SelectElement
      name={label}
      label={label}
      quick={quick}
      disabled={isDisabled}
      required={isRequired}
      error={error}
      error-text={errorText}
      supporting-text={supportingText}
      onChange={onChange}
      onInput={onInput}
      onOpening={onOpening}
      onOpened={onOpened}
      onClosing={onClosing}
      onClosed={onClosed}
    >
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
  isFilled: PropTypes.bool,
  label: PropTypes.string,
  quick: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  supportingText: PropTypes.string,
  icon: PropTypes.element,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  onOpening: PropTypes.func,
  onOpened: PropTypes.func,
  onClosing: PropTypes.func,
  onClosed: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.node,
      value: PropTypes.string,
    })
  ),
};

Select.defaultProps = {
  isFilled: false,
  label: '',
  quick: false,
  isDisabled: false,
  isRequired: false,
  error: false,
  errorText: 'Please select an option.',
  supportingText: '',
  icon: undefined,
  onChange: undefined,
  onInput: undefined,
  onOpening: undefined,
  onOpened: undefined,
  onClosing: undefined,
  onClosed: undefined,
  options: [
    { id: 0, content: 'option - 1', value: 'option1' },
    { id: 1, content: 'option - 2', value: 'option2' },
    { id: 2, content: 'option - 3', value: 'option3' },
  ],
};

export default Select;
