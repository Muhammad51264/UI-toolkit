import { createComponent } from '@lit/react';
import React from 'react';
import PropTypes from 'prop-types';
import { MdSwitch } from '@material/web/switch/switch';

const SwitchComponent = createComponent({
  tagName: 'md-switch',
  elementClass: MdSwitch,
  react: React,
  events: {
    change: 'change',
    input: 'input',
  },
});

const Switch = ({ className, ...props }) =>
  props.label ? (
    <>
      <label htmlFor={props.label}> {props.label}</label>
      <SwitchComponent
        className={className}
        id={props.label}
        {...(props.showOnlySelectedIcon
          ? { 'show-only-selected-icon': props.showOnlySelectedIcon }
          : {})}
        {...props}
      />
    </>
  ) : (
    <SwitchComponent
      className={className}
      {...(props.showOnlySelectedIcon
        ? { 'show-only-selected-icon': props.showOnlySelectedIcon }
        : {})}
      {...props}
    />
  );

Switch.defaultProps = {
  'aria-label': '',
  change: null,
  className: '',
  disabled: false,
  icons: false,
  input: undefined,
  label: '',
  name: '',
  required: false,
  selected: false,
  showOnlySelectedIcon: false,
  value: 'on',
};

Switch.propTypes = {
  /**
   * Switch aria label
   */
  'aria-label': PropTypes.string,
  /**
   * Function to be excuted when whenever selected changes due to user interaction (bubbles and composed).
   */
  change: PropTypes.func,
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
   * Function to be excuted when whenever selected changes due to user interaction (bubbles)
   */
  input: PropTypes.func,
  /**
   * Switch label
   */
  label: PropTypes.string,
  /**
   * Switch name
   */
  name: PropTypes.string,
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
