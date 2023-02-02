import { styled } from '@mui/material/styles';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';

const FormControlContainer = styled(FormControlUnstyled)(({ theme }) => ({
    borderRadius: '10px 10px 0 0',
    border: '1px solid transparent',
    maxWidth: '21rem',
    margin: '0 auto',
    backgroundColor: `${ theme.colors.neutral.white }`,
    position: 'relative',
    padding: '2rem 1rem 0.5rem 1rem',
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      display: 'flex',
      maxWidth: '100%',
      padding: '2.5rem 0rem 0.5rem 1rem',
      flexDirection: 'column'
    },
  }));

export default FormControlContainer