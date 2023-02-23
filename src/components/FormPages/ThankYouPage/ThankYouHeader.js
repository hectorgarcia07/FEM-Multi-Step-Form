import FormHeader from "../../FormControlContainer/FormHeader"
import { styled } from '@mui/material/styles';

const ThankYouHeader = styled(FormHeader)(
    ({ theme }) => ({
        textAlign: 'center',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            
        },
    })
)

export default ThankYouHeader