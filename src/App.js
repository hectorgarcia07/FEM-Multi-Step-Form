import { ThemeProvider } from '@mui/material/styles';
import { custom_theme } from './theme/custom_theme';
import Banner from './components/Banner'
import FormLayout from './components/FormComponents/FormLayout'
import LayoutContainer from './components/containers/LayoutContainer'
import React, { useState, useReducer, createContext } from 'react';

function App() {
  const FormPageContext = createContext();

  const layoutStyle = { 
    minHeight: '100vh',
    backgroundColor: `${custom_theme.colors.neutral.alabaster}`,
  }

  return (
    <ThemeProvider theme={custom_theme}>
      <FormPageContext.Provider>
        <LayoutContainer 
          theme={custom_theme} 
          spacing={0}
          alignItems="center"
          style={layoutStyle}
        >
          <Banner />
          <FormLayout />
        </LayoutContainer>
      </FormPageContext.Provider>
    </ThemeProvider>
  );
}

export default App;