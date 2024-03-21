import { createComponent } from '@lit/react';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const FilledInput = createComponent({
  tagName: 'md-filled-text-field',
  elementClass: MdFilledTextField,
  react: React,
  events: {
    onChange: 'change',
    onSelect: 'select',
    onInput: 'input',
  },
});

const OutlinedInput = createComponent({
  tagName: 'md-outlined-text-field',
  elementClass: MdOutlinedTextField,
  react: React,
  events: {
    onChange: 'change',
    onSelect: 'select',
    onInput: 'input',
  },
});

const Input = forwardRef(
  (
    {
      ariaLabel,
      customStyles,
      error,
      errorText,
      hasLeadingIcon,
      hasTrailingIcon,
      isFilled,
      leadingIcon,
      prefixText,
      readOnly,
      suffixText,
      supportingText,
      trailingIcon,
      validationPattern,
      ...props
    },
    ref
  ) => {
    const Component = isFilled ? FilledInput : OutlinedInput;
    return (
      <>
        {customStyles && (
          <style>
            {`${isFilled ? 'md-filled-text-field' : 'md-outlined-text-field'} {${Object.entries(
              customStyles
            )
              .map(([property, value]) => `${property}: ${value};`)
              .join(' ')}}`}
          </style>
        )}
        <Component
          aria-label={ariaLabel}
          error-text={errorText}
          pattern={validationPattern}
          prefix-text={prefixText}
          ref={ref}
          suffix-text={suffixText}
          supporting-text={supportingText}
          error={error}
          {...(hasLeadingIcon ? { 'has-leading-icon': hasLeadingIcon } : {})}
          {...(hasTrailingIcon ? { 'has-trailing-icon': hasTrailingIcon } : {})}
          {...props}
        >
          {leadingIcon && <md-icon slot="leading-icon">{leadingIcon}</md-icon>}
          {trailingIcon && (
            <md-icon slot="trailing-icon">{trailingIcon}</md-icon>
          )}
        </Component>
      </>
    );
  }
);

Input.displayName = 'Input';

Input.defaultProps = {
  ariaLabel: '',
  autocomplete: '',
  cols: 20,
  customStyles: undefined,
  disabled: false,
  error: false,
  errorText: '',
  hasLeadingIcon: false,
  hasTrailingIcon: false,
  isFilled: false,
  label: '',
  leadingIcon: undefined,
  max: '',
  maxLength: null,
  min: '',
  minLength: -1,
  onChange: undefined,
  onInput: undefined,
  onSelect: undefined,
  placeholder: '',
  prefixText: '',
  readOnly: false,
  required: false,
  rows: 0,
  step: '',
  suffixText: '',
  supportingText: '',
  trailingIcon: undefined,
  type: 'text',
  validationPattern: '',
  value: '',
};

Input.propTypes = {
  /**
   * Input aria-label
   */
  ariaLabel: PropTypes.string,
  /**
   * Input autocomplete
   */
  autocomplete: PropTypes.string,
  /**
   * Input custom styles
   */
  customStyles: PropTypes.object,
  /**
   * Input number of columns
   */
  cols: PropTypes.number,
  /**
   * If true , the input is disabled
   */
  disabled: PropTypes.bool,
  /**
   * If true marks the input as invalid
   */
  error: PropTypes.bool,
  /**
   * Input error text
   */
  errorText: PropTypes.string,
  /**
   * Whether or not the text field has a leading icon. Used for SSR.
   */
  hasLeadingIcon: PropTypes.bool,
  /**
   * Whether or not the text field has a trailing icon. Used for SSR.
   */
  hasTrailingIcon: PropTypes.bool,
  /**
   * If true , the input overall will be filled
   */
  isFilled: PropTypes.bool,
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Input leading icon
   */
  leadingIcon: PropTypes.element,
  /**
   * Function that will be excuted on the native `change` event on
   */
  onChange: PropTypes.func,
  /**
   * Function that will be excuted on the native `input` event on
   */
  onInput: PropTypes.func,
  /**
   * Function that will be excuted on the native `select` event on
   */
  onSelect: PropTypes.func,
  /**
   * Input greatest value in the range of permitted values
   */
  max: PropTypes.string,
  /**
   * Input  maximum number of characters
   */
  maxLength: PropTypes.number,
  /**
   * Input most negative value in the range of permitted values.
   */
  min: PropTypes.string,
  /**
   * Input  minimum number of characters
   */
  minLength: PropTypes.number,
  /**
   * Input place holder
   */
  placeholder: PropTypes.string,
  /**
   * Input prefix text
   */
  prefixText: PropTypes.string,
  /**
   * If true the input will be readonly
   */
  readOnly: PropTypes.bool,
  /**
   * If true , the input will be marked as required
   */
  required: PropTypes.bool,
  /**
   * Number of rows for a textfield type
   */
  rows: PropTypes.number,
  /**
   * Input step that works with min and max
   */
  step: PropTypes.string,
  /**
   * Input sufix text
   */
  suffixText: PropTypes.string,
  /**
   * Input supporting text
   */
  supportingText: PropTypes.string,
  /**
   * Input trailing icon
   */
  trailingIcon: PropTypes.element,
  /**
   * Input type
   */
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'password',
    'search',
    'tel',
    'url',
    'textarea',
  ]),
  /**
   * Input validation regEx string
   */
  validationPattern: PropTypes.string,
  /**
   * Input value
   */
  value: PropTypes.string,
};

export default Input;
