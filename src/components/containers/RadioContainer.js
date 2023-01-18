import { styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';

const RadioContainer = styled(FormControlLabel)(({ theme }) => ({
    padding: '0',
    margin: '0',
    color: `${ theme.colors.primary.marine_blue }`
})); 

export default RadioContainer