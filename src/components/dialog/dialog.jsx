import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from '@lit/react';
import { MdDialog } from '@material/web/dialog/dialog';

const DialogComponent = createComponent({
  tagName: 'md-dialog',
  elementClass: MdDialog,
  react: React,
  events: {
    onOpen: 'open',
    onOpened: 'opened',
    onClose: 'close',
    onClosed: 'closed',
    onCancel: 'cancel',
  },
});

const Dialog = forwardRef(
  (
    {
      actionElement,
      ariaLabel,
      children,
      className,
      headlineElement,
      open,
      ...props
    },
    ref
  ) => (
    <DialogComponent
      aria-label={ariaLabel}
      className={className}
      ref={ref}
      {...(open ? { open } : {})}
      {...props}
    >
      headlineTitle &&
      <div slot="headline">{headlineElement}</div>
      <div slot="content">{children}</div>
      {actionElement && <div slot="actions">{actionElement}</div>}
    </DialogComponent>
  )
);

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  actionElement: null,
  ariaLabel: '',
  children: null,
  className: '',
  headlineElement: null,
  getCloseAnimation: null,
  getOpenAnimation: null,
  open: false,
  returnValue: '',
  type: '',
};
Dialog.propTypes = {
  /**
   * Dialog action elements
   */
  actionElement: PropTypes.element,
  /**
   * Dialog area label
   */
  ariaLabel: PropTypes.string,
  /**
   * Dialog main content
   */
  children: PropTypes.element,
  /**
   * Dialog styles class name
   */
  className: PropTypes.string,
  /**
   * Dialog headline could include title and closing icon
   */
  headlineElement: PropTypes.element,
  /**
   * Gets the closing animation for a dialog. Set to a new function to customize the animation.
   */
  getCloseAnimation: PropTypes.func,
  /**
   * Gets the opening animation for a dialog. Set to a new function to customize the animation.
   */
  getOpenAnimation: PropTypes.func,
  /**
   * Dialog status
   */
  open: PropTypes.bool,
  /**
   * Gets or sets the dialog's return value, usually to indicate which button a user pressed to close it.
   */
  returnValue: PropTypes.string,
  /**
   * The type of dialog for accessibility. Set this to alert to announce a dialog as an alert dialog.
   */
  type: PropTypes.string,
};

export default Dialog;
