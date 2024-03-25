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

function Radio({ ...props }) {
  return <RadioElement {...props} />;
}

Radio.propTypes = {
  /**
   * The value of the radio input.
   */
  value: PropTypes.string,

  /**
   * If true, the radio input will be checked.
   */
  checked: PropTypes.bool,

  /**
   * If true, the radio input will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The name of the radio input.
   */
  name: PropTypes.string,

  /**
   * Function called when the radio input value changes.
   */
  onChange: PropTypes.func,

  /**
   * Function called when the radio input value is being input.
   */
  onInput: PropTypes.func,
};

Radio.defaultProps = {
  value: '',
  checked: false,
  disabled: false,
  name: '',
  onChange: undefined,
  onInput: undefined,
};

export default Radio;
