import { styled } from '@mui/material/styles';

const InfoParagraph = styled('p')(({ theme }) => ({
    fontSize: '1rem',
    margin: '0.8rem 0',
    color: `${ theme.colors.neutral.cool_gray }`,
    lineHeight: '24px',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
        marginBottom: '2.5rem'
    }
}));

export default InfoParagraph