import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const FormContainer = styled('form')(({ theme }) => ({
    position : 'relative', 
    display: 'block',
    padding: '0 1rem',
    
    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
        position: 'static',
        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            width: '100%'
        },
    }
}));

export default FormContainer