import React from 'react';
import '@material/web/icon/icon.js';
import PropTypes, { any } from 'prop-types';
import { createComponent } from '@lit/react';
import { MdElevatedButton } from '@material/web/button/elevated-button.js';
import { MdFilledButton } from '@material/web/button/filled-button.js';
import { MdTextButton } from '@material/web/button/text-button.js';
import { MdOutlinedButton } from '@material/web/button/outlined-button.js';
import { MdFilledTonalButton } from '@material/web/button/filled-tonal-button.js';

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
  events: {
    onClick: 'click',
    onReset: 'reset',
    onSubmit: 'submit',
  },
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
      hasIcon={hasIcon}
      onClick={onClick}
      onReset={onReset}
      onSubmit={onSubmit}
      href={href}
      target={target}
      type={type}
      name={name}
      trailingIcon={trailingIcon}
    >
      {icon}
      {children}
    </Component>
  );
};

Button.defaultProps = {
  isDisabled: false,
  href: '',
  target: '',
  trailingIcon: false,
  hasIcon: false,
  type: 'submit',
  name: '',
  onClick: () => {},
  icon: <></>,
  variant: 'filled',
};

Button.propTypes = {
  /** Whether the button has an icon */
  hasIcon: PropTypes.bool,
  /** The URL the button should navigate to when clicked */
  href: PropTypes.string,
  /** The icon element to be displayed alongside the button text */
  icon: any,
  /** Whether the button is disabled */
  isDisabled: PropTypes.bool,
  /** The name attribute of the button */
  name: PropTypes.string,
  /** Function called when the button is clicked */
  onClick: PropTypes.func,
  /** Function called when the button's form is reset (if the button is in a form) */
  onReset: PropTypes.func, 
  /** Function called when the button's form is submitted (if the button is in a form) */
  onSubmit: PropTypes.func,
  /** Where to display the linked href URL for a link button (if it has href attribute is set ) */
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top', 'framename']),
  /** Whether to render the icon at the inline end of the label rather than the inline start. */
  trailingIcon: PropTypes.bool,
  /** The type attribute of the button */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** The variant style of the button */
  variant: PropTypes.oneOf(['filled', 'outlined', 'elevated', 'tonal', 'text']),
};

export default Button;
