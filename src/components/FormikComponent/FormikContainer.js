import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormikContainer = styled(Box)(({ theme }) => ({
    border: '1px solid black',

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      padding: '1rem', 
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '10px',
      maxWidth: "932px",
      width: "100%"
    },
  }));

export default FormikContainer