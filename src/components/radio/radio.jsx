import React from 'react';
import PropTypes from 'prop-types';
import { MdRadio } from '@material/web/radio/radio';
import { createComponent } from '@lit/react';

const RadioElement = createComponent({
  tagName: 'md-radio',
  elementClass: MdRadio,
  react: React,
  events: {
    onChange: 'change',
    onInput: 'input',
  },
});

/**
 * Radio component.
 * @param {object} props - The component props.
 * @param {boolean} [props.isChecked=false] - Determines whether the radio button is checked.
 * @param {boolean} [props.isDisabled=false] - Determines whether the radio button is disabled.
 * @param {string} [props.name=''] - Name of the radio button.
 * @param {func} [prop.onChange=unefined] - Determines the fired event when the radio button's value is about to change.
 * @param {func} [prop.onInput=unefined] - Determines the fired event triggered when the user click on the radio button.
 * @param {string} [props.value=''] - Value of the radio button.
 * @param {string} [props.size=''] - Determines the size of the radio button.
 */
function Radio({
  isChecked,
  isDisabled,
  name,
  onChange,
  onInput,
  size,
  value,
}) {
  return (
    <RadioElement
      checked={isChecked}
      disabled={isDisabled}
      value={value}
      name={name || value}
      onChange={onChange}
      onInput={onInput}
    />
  );
}

Radio.propTypes = {
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  size: PropTypes.string,
};

Radio.defaultProps = {
  value: '',
  isChecked: false,
  isDisabled: false,
  name: '',
  onChange: undefined,
  onInput: undefined,
  size: '',
};

export default Radio;
