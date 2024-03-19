import React from 'react';
import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';
import PropTypes from 'prop-types';

const buttonVariants = {
  text: 'md-text-button',
  filled: 'md-filled-button',
  outlined: 'md-outlined-button',
  elevated: 'md-elevated-button',
  tonal: 'md-filled-tonal-button',
};

const Button = ({ isDisabled, onChange, text, variant }) => {
  const Component = buttonVariants[variant];

  if (isDisabled) {
    return (
      <Component disabled={isDisabled} onChange={onChange}>
        {text}
      </Component>
    )
  } else {
    return (<Component onChange={onChange}>{text}</Component>)
  }
};

Button.defaultProps = {
  isDisabled: false,
  onChange: () => {},
  text: 'button',
  variant: 'filled',
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  text: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'elevated', 'tonal', 'text']),
};

export default Button;
