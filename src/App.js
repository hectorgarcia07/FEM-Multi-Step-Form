import { ThemeProvider } from '@mui/material/styles';
import { custom_theme } from './theme/custom_theme';
import Banner from './components/Banner'
import FormLayout from './components/FormComponents/FormLayout'
import LayoutContainer from './components/containers/LayoutContainer'
import Box from '@mui/material/Box';
import PageControlContextProvider from './hooks/PageControlContextProvider';

function App() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1440px',
    width: '100%',
    alignItems: 'center',

    [custom_theme.breakpoints.up(`${custom_theme.breakpoints.values.desktop}`)]: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
  }

  return (
    <ThemeProvider theme={custom_theme}>
      <LayoutContainer 
        theme={custom_theme} 
        spacing={0}
        alignItems="center"
      >
        <PageControlContextProvider>
          <Box sx={styles}>
            <Banner />
            <FormLayout />
          </Box>
        </PageControlContextProvider>
      </LayoutContainer>
  </ThemeProvider>
  );
}

export default App;