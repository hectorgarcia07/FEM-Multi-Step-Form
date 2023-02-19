import { styled } from '@mui/material/styles';

const Form = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundImage: `url(${ theme.backgroundImg.mobile })`,
    backgroundRepeat: 'no-repeat',
    maxWidth: '57rem',
    padding: '0 1rem',

    [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {
      backgroundImage: `url(${ theme.backgroundImg.desktop })`,
      backgroundColor: `${ theme.colors.neutral.white }`,
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: '10px',
      maxWidth: '100%'
    }
  }));

export default Form