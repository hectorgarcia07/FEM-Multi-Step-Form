import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const FormContainer = styled(Box)(({ theme }) => ({
    position : 'relative', 
    top: '-73px',
    display: 'block',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
        position: 'static'
    }
}));

export default FormContainer