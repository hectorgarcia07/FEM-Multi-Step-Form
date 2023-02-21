import { styled } from '@mui/system';

const PayDescription = styled('div')(
    ({ theme }) => ({
        color: theme.colors.primary.purplish_blue,
        fontSize: '0.8rem',
        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            fontSize: '.9rem'
        },
    })
)

export default PayDescription