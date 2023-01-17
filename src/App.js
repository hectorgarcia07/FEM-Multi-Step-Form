import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/custom_theme';
import Banner from './components/Banner'
import FormLayout from './components/FormComponents/FormLayout'
import LayoutContainer from './components/containers/LayoutContainer'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer 
          theme={theme} 
          spacing={0}
          alignItems="center"
          style={{ minHeight: '100vh' }} 
      >
        <Banner />
        <FormLayout />
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;

/*
            direction="column"
            justifyContent="center"
            */