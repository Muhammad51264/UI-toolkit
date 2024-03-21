import PropTypes from 'prop-types';
import React from 'react';

const wrapper = {
  width: '100%',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
};
const WrapperComponent = ({ children }) => (
  <div style={wrapper}>{children}</div>
);

WrapperComponent.defaultProps = {
  children: null,
};

WrapperComponent.propTypes = {
  /**
   * Wrapper children
   */
  children: PropTypes.element,
};

export default WrapperComponent;
