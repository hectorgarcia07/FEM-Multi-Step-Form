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
    alignItems: 'center',
    position: 'relative',
    border: '1px solid black',
    backgroundImage: `url(${ custom_theme.backgroundImg.mobile })`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'red',

    [custom_theme.breakpoints.up(`${custom_theme.breakpoints.values.desktop}`)]: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
  }

  return (
    <ThemeProvider theme={custom_theme}>
      <PageControlContextProvider>

        <LayoutContainer 
          theme={custom_theme} 
          spacing={0}
          alignItems="center"
        >
          <Box sx={styles}>
            <Banner />
            <FormLayout />
          </Box>
        </LayoutContainer>

      </PageControlContextProvider>
  </ThemeProvider>
  );
}

export default App;