import { ThemeProvider } from '@mui/material/styles';
import { custom_theme } from './theme/custom_theme';
import Banner from './components/Banner'
import FormLayout from './components/FormComponents/FormLayout'
import LayoutContainer from './components/containers/LayoutContainer'
import PageControlContextProvider, { usePageValues } from './hooks/PageControlContextProvider';
import { Formik } from 'formik';
import PlanSelection, { initialValues } from './YupSchema/planSelection'
import { styled } from '@mui/material/styles';
import FormControlButtonContainer from './components/containers/FormControlButtonContainer'
import { Box } from '@mui/material';

function App() {
  
  const Form = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundImage: `url(${ theme.backgroundImg.mobile })`,
    backgroundRepeat: 'no-repeat',
    maxWidth: '57rem',
    padding: '0 1rem',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      backgroundImage: `url(${ theme.backgroundImg.desktop })`,
      backgroundColor: `${ theme.colors.neutral.white }`,
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: '10px',
      maxWidth: '100%'
    }
  }));

  const styles2 = {

    [custom_theme.breakpoints.up( `${ custom_theme.breakpoints.values.desktop }` )]: {
      
      width: '100%',
      height: '568px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2.5rem 4rem 0rem 6.3rem',
    }
  }

  const styles3 = {
    border: '1px solid black',

    [custom_theme.breakpoints.up(`${custom_theme.breakpoints.values.desktop}`)]: {
      padding: '1rem', 
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '10px',
      maxWidth: "932px",
      width: "100%"
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
            validateOnMount={true}
            validationSchema={PlanSelection}
            onSubmit={( values ) => {
              console.log("submitted", values)
            }}
          >
            {props => (
              <Box sx={styles3}>
                <Form onSubmit={props.handleSubmit}>
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