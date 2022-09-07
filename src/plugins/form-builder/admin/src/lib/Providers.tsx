import React from 'react';

import { ThemeProvider } from '@mui/material';

import { ReactQueryProviders } from './ReactQueryProvider';
import { theme } from './theme';

export const Providers = ({ children }) => {
  return (
    <>
      <ReactQueryProviders>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ReactQueryProviders>
    </>
  );
};
