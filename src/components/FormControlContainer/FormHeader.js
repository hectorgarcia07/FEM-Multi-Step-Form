import { styled } from '@mui/material/styles';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';

const FormHeader = styled(FormControlUnstyled)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: '900',
    color: `${ theme.colors.primary.marine_blue }`,
    '&:focus': {
        color: 'yellow'
    },

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
        
        fontSize: '2rem'
    }
}));

export default FormHeader