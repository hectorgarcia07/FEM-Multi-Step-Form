import { styled } from '@mui/system';
import { useFormikContext } from 'formik';

const SwitchInfoLabel = styled('div')(({ theme, children }) => {
  const { values, } = useFormikContext()

  const color = children === 'Monthly' 
    ? `${ !values.planLength ? theme.colors.primary.marine_blue : theme.colors.neutral.cool_gray  }`
    : `${ values.planLength ? theme.colors.primary.marine_blue : theme.colors.neutral.cool_gray  }`

  return ({
    padding: '2.5rem 1rem',
    color: `${ color }`,
  
    // eslint-disable-next-line no-useless-computed-key
    ['&:hover']: {
        cursor: 'pointer'
    },
  
    [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
      padding: '2rem 1rem',
    }
  
  })
}
);

export default SwitchInfoLabel