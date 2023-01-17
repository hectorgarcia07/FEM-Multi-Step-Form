import { styled } from '@mui/material/styles';

const InfoParagraph = styled('p')(({ theme }) => ({
    fontSize: '1rem',
    margin: '0.8rem 0',
    color: `${ theme.colors.neutral.cool_gray }`
}));

export default InfoParagraph