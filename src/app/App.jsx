import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from '../routing/AppRoutes';

import theme from '../styles/theme'

export const App = () => {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  )
};
