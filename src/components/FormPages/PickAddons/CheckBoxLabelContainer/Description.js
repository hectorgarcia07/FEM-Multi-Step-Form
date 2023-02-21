import { styled } from '@mui/system';

const Description = styled('div')(
    ({ theme }) => ({
        color: theme.colors.neutral.cool_gray,
        fontSize: '0.7rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            fontSize: '0.9rem',
        },
    })
)

export default Description