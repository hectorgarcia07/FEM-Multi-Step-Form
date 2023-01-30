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
    backgroundColor: `${ custom_theme.colors.neutral.magnolia }`,

    [custom_theme.breakpoints.up(`${custom_theme.breakpoints.values.desktop}`)]: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
  }

  const Form = styled('form')(({ theme }) => ({
        
    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {

    }
  }));

  return (
    <ThemeProvider theme={custom_theme}>
      <PageControlContextProvider>

        <LayoutContainer 
          theme={custom_theme} 
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
              <Form sx={styles}>
                <Banner />
                <FormLayout />
                <FormControlButtonContainer />  
              </Form>
            )}
          </Formik>
        </LayoutContainer>

      </PageControlContextProvider>
  </ThemeProvider>
  );
}

export default App;