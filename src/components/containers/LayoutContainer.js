import { custom_theme } from '../../theme/custom_theme';
import Grid from '@mui/system/Unstable_Grid';
import { styled } from '@mui/material/styles';

const LayoutContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: `${custom_theme.colors.neutral.magnolia}`,
}));

export default LayoutContainer
