import { styled } from '@mui/material/styles';
import DescriptionContainer from './DescriptionContainer';

const ChangeContainer = styled(DescriptionContainer)(({theme}) => ({
    color: theme.colors.neutral.cool_gray, 
    fontSize: '0.9rem',
    textDecoration: 'underline',
    textDecorationColor: 'black',
    // eslint-disable-next-line no-useless-computed-key
    ["&:hover"]:{
        cursor: 'pointer',
    },

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        paddingTop: '0.3rem',
    },
}))

export default ChangeContainer