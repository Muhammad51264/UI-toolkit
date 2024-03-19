import theme from './theme.json';
import { ThemeProvider } from 'styled-components';
import React from 'react';

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeWrapper;
