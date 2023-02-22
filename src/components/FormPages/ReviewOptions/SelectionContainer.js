import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const SelectionContainer = styled(Box)(({theme}) => ({
    display: 'flex', 
    justifyContent: 'space-between',
    "&:not(:last-child)": {
        marginBottom: '1rem'
    },

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        paddingTop: '0.5rem',
    },
}))

export default SelectionContainer