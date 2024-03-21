import React from 'react';
import PropTypes from 'prop-types';
import { MdFilledSelect } from '@material/web/select/filled-select';
import { MdOutlinedSelect } from '@material/web/select/outlined-select';
import '@material/web/select/select-option';
import { createComponent } from '@lit/react';

/**
 * Select component.
 * @param {object} props - The component props.
 * @param {boolean} [props.error=false] - Determines whether the select is in an error state.
 * @param {string} [props.errorText='Please select an option.'] - The error message to display when the select is in an error state.
 * @param {HTMLElement} [props.icon=undefined] - The icon to display within the select.
 * @param {boolean} [props.isDisabled=false] - Determines whether the select is disabled.
 * @param {boolean} [props.isFilled=false] - Determines whether the select is filled.
 * @param {boolean} [props.isRequired=false] - Determines whether the select is required.
 * @param {string} [props.label=''] - The label text for the select.
 * @param {func} [props.onChange=undefined] - The function called when the select value changes.
 * @param {func} [props.onClosing=undefined] - The function called when the select menu is about to close.
 * @param {func} [props.onClosed=undefined] - The function called when the select menu has finished closing.
 * @param {func} [props.onInput=undefined] - The function called when the user inputs a value into the select.
 * @param {func} [props.onOpened=undefined] - The function called when the select menu has finished opening.
 * @param {func} [props.onOpening=undefined] - The function called when the select menu is about to open.
 * @param {Array} [props.options] - Determine the select's options.
 * @param {boolean} [props.quick=false] - Determines whether the select opens its menu synchronously with no animation.
 * @param {string} [props.supportingText=''] - Additional text to display below the select.
 */

function Select({
  error,
  errorText,
  icon,
  isDisabled,
  isFilled,
  isRequired,
  label,
  onChange,
  onClosing,
  onClosed,
  onInput,
  onOpened,
  onOpening,
  options,
  quick,
  supportingText,
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
      disabled={isDisabled}
      error={error}
      error-text={errorText}
      label={label}
      name={label}
      onChange={onChange}
      onClosing={onClosing}
      onClosed={onClosed}
      onInput={onInput}
      onOpened={onOpened}
      onOpening={onOpening}
      quick={quick}
      required={isRequired}
      supporting-text={supportingText}
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
  error: PropTypes.bool,
  errorText: PropTypes.string,
  icon: PropTypes.element,
  isDisabled: PropTypes.bool,
  isFilled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onClosing: PropTypes.func,
  onClosed: PropTypes.func,
  onInput: PropTypes.func,
  onOpened: PropTypes.func,
  onOpening: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node,
      id: PropTypes.number,
      value: PropTypes.string,
    })
  ),
  quick: PropTypes.bool,
  supportingText: PropTypes.string,
};

Select.defaultProps = {
  error: false,
  errorText: 'Please select an option.',
  icon: undefined,
  isDisabled: false,
  isFilled: false,
  isRequired: false,
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
