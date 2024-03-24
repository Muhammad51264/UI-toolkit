import { createComponent } from '@lit/react';
import React from 'react';
import PropTypes from 'prop-types';
import { MdSwitch } from '@material/web/switch/switch';

const SwitchComponent = createComponent({
  tagName: 'md-switch',
  elementClass: MdSwitch,
  react: React,
  events: {
    onChange: 'change',
    onInput: 'input',
  },
});

const Switch = ({
  ariaLabel,
  className,
  label,
  onChange,
  onInput,
  showOnlySelectedIcon,
  ...props
}) =>
  label ? (
    <>
      <label htmlFor={label}> {label}</label>
      <SwitchComponent
        aria-label={ariaLabel}
        className={className}
        id={label}
        {...(showOnlySelectedIcon
          ? { 'show-only-selected-icon': showOnlySelectedIcon }
          : {})}
        {...props}
      />
    </>
  ) : (
    <SwitchComponent
      aria-label={ariaLabel}
      className={className}
      {...(showOnlySelectedIcon
        ? { 'show-only-selected-icon': showOnlySelectedIcon }
        : {})}
      {...props}
    />
  );

Switch.defaultProps = {
  ariaLabel: '',
  className: '',
  disabled: false,
  icons: false,
  label: '',
  name: '',
  onChange: undefined,
  onInput: undefined,
  required: false,
  selected: false,
  showOnlySelectedIcon: false,
  value: 'on',
};

Switch.propTypes = {
  /**
   * Switch aria label
   */
  ariaLabel: PropTypes.string,
  /**
   * Styles class name
   */
  className: PropTypes.string,
  /**
   * If true , the switch will be non-interactive
   */
  disabled: PropTypes.bool,
  /**
   * If true , the switch will show  both the selected and deselected icons.
   */
  icons: PropTypes.bool,

  /**
   * Switch label
   */
  label: PropTypes.string,
  /**
   * Switch name
   */
  name: PropTypes.string,
  /**
   * Function to be excuted when whenever selected changes due to user interaction (bubbles and composed).
   */
  onChange: PropTypes.func,
  /**
   * Function to be excuted when whenever selected changes due to user interaction (bubbles)
   */
  onInput: PropTypes.func,
  /**
   * If true the switch is required to be selected when participating in form submission.
   */
  required: PropTypes.bool,
  /**
   * If true , the switch will be  in the selected state and sets the form submission value to the value property.
   */
  selected: PropTypes.bool,
  /**
   * If true , only the selected icon will be shown, and not the deselected icon.Overrides the icons property
   */
  showOnlySelectedIcon: PropTypes.bool,
  /**
   * The switch value
   */
  value: PropTypes.string,
};

export default Switch;
