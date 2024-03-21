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
 * @param {string} [props.value=''] - Value of the radio button.
 * @param {string} [props.name=''] - Name of the radio button.
 * @param {boolean} [props.isChecked=false] - Determines whether the radio button is checked.
 * @param {boolean} [props.isDisabled=false] - Determines whether the radio button is disabled.
 * @param {func} [prop.onChange=unefined] - Determines the fired event when the radio button's value is about to change.
 * @param {func} [prop.onInput=unefined] - Determines the fired event triggered when the user click on the radio button.
 */
function Radio({ value, isChecked, isDisabled, name, onChange, onInput }) {
  return (
    <RadioElement
      value={value}
      name={name ?? value}
      checked={isChecked}
      disabled={isDisabled}
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
};

Radio.defaultProps = {
  value: '',
  isChecked: false,
  isDisabled: false,
  name: '',
  onChange: undefined,
  onInput: undefined,
};

export default Radio;
