import Grid from '@mui/system/Unstable_Grid';
import { styled } from '@mui/material/styles';

const LayoutContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down(`${theme.breakpoints.values.mobile}`)]: {

    },
}));

export default LayoutContainer