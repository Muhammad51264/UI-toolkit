import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from '@lit/react';
import { MdElevatedButton } from '@material/web/button/elevated-button';
import { MdFilledButton } from '@material/web/button/filled-button';
import { MdTextButton } from '@material/web/button/text-button';
import { MdOutlinedButton } from '@material/web/button/outlined-button';
import { MdFilledTonalButton } from '@material/web/button/filled-tonal-button';

const sharedKeys = {
  react: React,
  events: {
    onClick: 'click',
    onReset: 'reset',
    onSubmit: 'submit',
  },
};

export const FilledButton = createComponent({
  ...sharedKeys,
  tagName: 'md-filled-button',
  elementClass: MdFilledButton,
});

export const ElevatedButton = createComponent({
  ...sharedKeys,
  tagName: 'md-elevated-button',
  elementClass: MdElevatedButton,
});

export const TextButton = createComponent({
  ...sharedKeys,
  tagName: 'md-text-button',
  elementClass: MdTextButton,
});

export const OutlinedButton = createComponent({
  ...sharedKeys,
  tagName: 'md-outlined-button',
  elementClass: MdOutlinedButton,
});

export const TonalButton = createComponent({
  ...sharedKeys,
  tagName: 'md-filled-tonal-button',
  elementClass: MdFilledTonalButton,
});

const buttonVariants = {
  elevated: ElevatedButton,
  filled: FilledButton,
  outlined: OutlinedButton,
  text: TextButton,
  tonal: TonalButton,
};

const Button = ({
  children,
  hasIcon,
  href,
  icon,
  isDisabled,
  name,
  onClick,
  onReset,
  onSubmit,
  target,
  trailingIcon,
  type,
  variant,
}) => {
  const Component = buttonVariants[variant];

  return (
    <Component
      disabled={isDisabled}
      onClick={onClick}
      onReset={onReset}
      onSubmit={onSubmit}
      href={href}
      target={target}
      type={type}
      name={name}
      trailingIcon={trailingIcon}
    >
      {hasIcon && icon}
      {children}
    </Component>
  );
};

Button.defaultProps = {
  children: '',
  isDisabled: false,
  href: '',
  target: '',
  trailingIcon: false,
  hasIcon: false,
  type: 'submit',
  name: '',
  onClick: () => {},
  onReset: () => {},
  onSubmit: () => {},
  icon: null,
  variant: 'filled',
};

Button.propTypes = {
  children: PropTypes.node,
  hasIcon: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func,
  target: PropTypes.string,
  trailingIcon: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'elevated', 'tonal', 'text']),
};

export default Button;
