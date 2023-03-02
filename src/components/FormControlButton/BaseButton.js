import { styled } from '@mui/material/styles';

const BaseButton = styled('button')(({ theme }) => ({
    padding: '0.7rem 1rem',
    fontWeight: '600',

    // eslint-disable-next-line no-useless-computed-key
    ['&:hover']: {
        cursor: 'pointer'
    },

    // eslint-disable-next-line no-useless-computed-key
    ['&:disabled']: {
        cursor: 'not-allowed',
        backgroundColor: 'grey'
    },

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        padding: '0.9rem 1.5rem',
        borderRadius: '10px',
        fontSize: '1rem'
    },
}));

export default BaseButton