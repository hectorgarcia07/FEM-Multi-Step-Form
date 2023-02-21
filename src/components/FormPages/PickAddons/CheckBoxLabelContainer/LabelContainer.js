import { styled } from '@mui/system';

const LabelContainer = styled('div')(    
    ({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            marginLeft: '1rem',
        },
    })
)

export default LabelContainer