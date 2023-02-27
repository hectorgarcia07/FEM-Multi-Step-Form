import { styled } from '@mui/material/styles';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';

const FormControlContainer = styled(FormControlUnstyled)(({ theme }) => ({
    borderRadius: '10px 10px 0 0',
    border: '1px solid transparent',
    maxWidth: '21rem',
    margin: '0 auto',
    backgroundColor: `${ theme.colors.neutral.white }`,
    position: 'relative',
    padding: '2rem 1.5rem',
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      display: 'flex',
      maxWidth: '100%',
      padding: '0',
      margin: '0',
      flexDirection: 'column',
      
    },
  }));

export default FormControlContainer