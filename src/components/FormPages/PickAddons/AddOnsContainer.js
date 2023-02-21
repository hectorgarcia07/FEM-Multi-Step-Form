import { FormControlContainer } from "../../FormControlContainer"
import { styled } from '@mui/system';

const AddOnsContainer = styled(FormControlContainer)(
    ({ theme }) => ({
        marginBottom: '9rem',
        '&.Mui-checked': {
            color: `${ theme.colors.primary.purplish_blue }`,
        },

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            
            marginBottom: '0',
        },
    })
)

export default AddOnsContainer