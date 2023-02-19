import { ThemeProvider } from '@mui/material/styles';
import { custom_theme } from './theme/custom_theme';
import LayoutContainer from './components/containers/LayoutContainer'
import PageControlContextProvider from './hooks/PageControlContextProvider';
import FormikComponent from './components/FormikComponent/FormikComponent'

function App() {

  return (
    <ThemeProvider theme={custom_theme}>
      <PageControlContextProvider>
        <LayoutContainer 
          spacing={0}
          alignItems="center"
        >
          <FormikComponent />
        </LayoutContainer>

      </PageControlContextProvider>
  </ThemeProvider>
  );
}

export default App;