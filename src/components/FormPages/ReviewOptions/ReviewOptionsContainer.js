import { styled } from '@mui/material/styles';

const ReviewOptionsContainer = styled('div')(({ theme }) => ({
    padding: '1rem',
    
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      padding: '1.5rem'
    },
  }));

export default ReviewOptionsContainer