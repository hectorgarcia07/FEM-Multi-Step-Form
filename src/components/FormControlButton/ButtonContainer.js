import { styled, Box } from '@mui/material';

const ButtonContainer = styled(Box)(({ theme }) => ({
    color: `${ theme.colors.neutral.white }`,
    backgroundColor: `${ theme.colors.neutral.white }`,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    margin: '1rem 0',

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        padding: '1rem 0rem',
    },
}));

export default ButtonContainer