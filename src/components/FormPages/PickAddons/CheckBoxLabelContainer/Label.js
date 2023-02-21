import { styled } from '@mui/system';

const Label = styled('div')(
    ({ theme }) => ({
        color: theme.colors.primary.marine_blue,
        fontWeight: '900',
        fontSize: '0.85rem',
        marginBottom: '0.4rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            fontSize: '1rem'
        },
    })
)

export default Label