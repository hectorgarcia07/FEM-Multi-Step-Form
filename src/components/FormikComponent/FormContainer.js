import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
        width: '100%',
        height: '568px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2.5rem 3.5rem 0rem 6.3rem',
        margin: '0'
      }
  }));

export default FormContainer