import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const OptionsContainer = styled(Box)(({ theme }) => ({ 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
   
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        
    },
}));

export default OptionsContainer