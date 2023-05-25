import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyles } from './global-styles';

const MyThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
