import FormControlContainer from "../../FormControlContainer/FormControlContainer"
import { styled } from '@mui/material/styles';

const ThanksYouPageContainer = styled(FormControlContainer)(
    ({ theme }) => ({
        paddingBottom: '4rem',
        marginBottom: '12rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            
        },
    })
)

export default ThanksYouPageContainer