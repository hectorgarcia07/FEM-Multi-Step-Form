import { styled } from '@mui/system';

const SwitchLabelContainer = styled('div')(
    ({ theme }) => ({
      marginBottom: '1rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
        marginTop: '0.5rem',
        marginBottom: '0'
      }

    })
)

export default SwitchLabelContainer