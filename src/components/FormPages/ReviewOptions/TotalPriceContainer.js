import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const TotalPriceContainer = styled(Box)(({theme}) => ({
    color: theme.colors.primary.purplish_blue, 
    fontWeight: '900',

    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        fontSize: '1.2rem'
    },
}))

export default TotalPriceContainer