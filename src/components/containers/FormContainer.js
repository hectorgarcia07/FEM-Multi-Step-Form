import { styled } from '@mui/material/styles';

const FormContainer = styled('div')(({ theme }) => ({
    position : 'relative', 
    display: 'block',
    
    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
        position: 'static',
    }
}));

export default FormContainer