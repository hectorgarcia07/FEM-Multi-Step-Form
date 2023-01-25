import { ThemeProvider } from '@mui/material/styles';
import { custom_theme } from './theme/custom_theme';
import Banner from './components/Banner'
import FormLayout from './components/FormComponents/FormLayout'
import LayoutContainer from './components/containers/LayoutContainer'
import React, { useState, useReducer, createContext } from 'react'
import Box from '@mui/material/Box';

function App() {
  return (
    <ThemeProvider theme={custom_theme}>
      <LayoutContainer 
        theme={custom_theme} 
        spacing={0}
        alignItems="center"
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1440px',
          [custom_theme.breakpoints.up(`${custom_theme.breakpoints.values.desktop}`)]: {
            flexDirection: 'row'
          },
        }}>
          <Banner />
          <FormLayout />
        </Box>
      </LayoutContainer>
  </ThemeProvider>
  );
}

export default App;