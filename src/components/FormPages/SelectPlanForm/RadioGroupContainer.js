import { styled } from '@mui/material/styles';
import RadioGroup from '@mui/material/RadioGroup';

const RadioGroupContainer = styled(RadioGroup)(({ theme }) => ({
    margin: '0',

    "label:not(:last-child)": {
      marginBottom: '0.5rem'
    },
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      flexDirection: 'row',
      flexWrap: 'inherit',
    },
  }));

export default RadioGroupContainer