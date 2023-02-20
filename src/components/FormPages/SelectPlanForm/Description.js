import { Box } from '@mui/system';
import { useFormikContext } from 'formik';
import { useTheme } from '@mui/material/styles';

const Description = ({ title, name }) => {
    const theme = useTheme()
    const { values, } = useFormikContext()

    const gamingPlan = {
        monthly: {
          arcade: '$9/mo',
          advanced: '$12/mo',
          pro: '$15/mo'
        },
        yearly: {
          arcade: '$90/yr',
          advanced: '$120/ry',
          pro: '$150/yr'
        }
    }
  
    return (
      <Box>
        <Box sx={{ color: theme.colors.primary.marine_blue, fontWeight: '900' }}>{ title }</Box>
        <Box sx={{ color: theme.colors.neutral.cool_gray }}>
          { values.planLength ? `${gamingPlan.yearly[name]}`: `${gamingPlan.monthly[name]}` }
        </Box>
        { values.planLength 
          ? 
          <Box sx={{ color: theme.colors.primary.marine_blue, fontSize: '0.8rem' }}>
            2 months free
          </Box>
          :
          null
        }
      </Box>
    )
}

export default Description