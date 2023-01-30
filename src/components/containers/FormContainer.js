import { styled } from '@mui/material/styles';

const FormContainer = styled('div')(({ theme }) => ({
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