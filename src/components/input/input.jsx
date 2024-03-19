import { InputField, Error, Container, IconContainer } from './input.styles';
import { PiWarningCircleLight } from 'react-icons/pi';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeWrapper from '../theme-wrapper/theme-wapper';

const Input = React.forwardRef(
  (
    {
      disabled,
      error,
      label,
      onChange,
      placeHolder,
      type,
      value,
      autoComplete,
      leftIcon,
      style,
    },
    ref
  ) => {
    return (
      <ThemeWrapper>
        <Container>
          {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
          <InputField
            type={type}
            id={label}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            error={error}
            autoComplete={autoComplete}
            aria-label={label}
            style={style}
          />

          {error && (
            <Error>
              <PiWarningCircleLight />
              {error}
            </Error>
          )}
        </Container>
      </ThemeWrapper>
    );
  }
);

Input.defaultProps = {
  autoComplete: 'off',
  disabled: false,
  error: '',
  label: '',
  onChange: () => {},
  placeHolder: '',
  type: 'text',
  value: '',
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'password', 'number', 'text']),
  value: PropTypes.string,
};

export { Input };
