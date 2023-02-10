import { styled } from '@mui/material/styles';

const InfoParagraph = styled('p')(({ theme }) => ({
    fontSize: '1rem',
    marginTop: '0.8rem',
    marginBottom: '1.5rem',
    color: `${ theme.colors.neutral.cool_gray }`,
    lineHeight: '24px',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
        marginBottom: '2rem',
        fontSize: '0.9rem'
    }
}));

export default InfoParagraph