import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

const FormControlContainer = styled(FormControl)(({ theme }) => ({
    borderRadius: '10px 10px 0 0',
    border: '1px solid transparent',
    maxWidth: '21rem',
    margin: '0 auto',
    backgroundColor: `${ theme.colors.neutral.white }`,
    position: 'relative',
    padding: '2rem 1rem 0.5rem 1rem',
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      paddingLeft: '5rem',
      border: '1px solid black'
    },
  }));

export default FormControlContainer