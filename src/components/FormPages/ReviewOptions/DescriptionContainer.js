import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const DescriptionContainer = styled(Box)(({theme}) => ({
    color: theme.colors.neutral.cool_gray, 
    fontSize: '0.9rem',
}))

export default DescriptionContainer