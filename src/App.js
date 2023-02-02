import { ThemeProvider } from '@mui/material/styles';
import { custom_theme } from './theme/custom_theme';
import Banner from './components/Banner'
import FormLayout from './components/FormComponents/FormLayout'
import LayoutContainer from './components/containers/LayoutContainer'
import PageControlContextProvider from './hooks/PageControlContextProvider';
import { Formik } from 'formik';
import PlanSelection, { initialValues } from './YupSchema/planSelection'
import { styled } from '@mui/material/styles';
import FormControlButtonContainer from './components/containers/FormControlButtonContainer'
import { Box } from '@mui/material';

function App() {

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundImage: `url(${ custom_theme.backgroundImg.mobile })`,
    backgroundRepeat: 'no-repeat',
    maxWidth: '57rem',
    padding: '0 1rem',

    [custom_theme.breakpoints.up(`${custom_theme.breakpoints.values.desktop}`)]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: `${ custom_theme.colors.neutral.white }`,
      borderRadius: '10px',
      maxWidth: '100%'
    },
  }

  const styles2 = {

    [custom_theme.breakpoints.up( `${ custom_theme.breakpoints.values.desktop }` )]: {
      paddingRight: '5rem',
      paddingLeft: '6.5rem',
      width: '100%',
      height: '568px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }

  const Form = styled('form')(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      backgroundImage: `url(${ custom_theme.backgroundImg.desktop })`,
    }
  }));

  const styles3 = {
    border: '1px solid black',

    [custom_theme.breakpoints.up(`${custom_theme.breakpoints.values.desktop}`)]: {
      padding: '1rem', 
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '10px',
    },
  }

  return (
    <ThemeProvider theme={custom_theme}>
      <PageControlContextProvider>

        <LayoutContainer 
          spacing={0}
          alignItems="center"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={PlanSelection}
            onSubmit={( values ) => {
              console.log(values)
            }}
          >
            
            {props => (
              <Box sx={styles3}>
                <Form sx={styles}>
                  <Banner />
                  <Box sx={styles2}>
                    <FormLayout />
                    <FormControlButtonContainer />  
                  </Box>
                </Form>
              </Box>
            )}

          </Formik>
        </LayoutContainer>

      </PageControlContextProvider>
  </ThemeProvider>
  );
}

export default App;