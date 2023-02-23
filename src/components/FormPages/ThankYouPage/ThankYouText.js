import InfoParagraph from "../../FormControlContainer/InfoParagraph"
import { styled } from '@mui/material/styles';

const ThankYouText = styled(InfoParagraph)(
    ({ theme }) => ({
        textAlign: 'center',
        fontSize: '1rem',
        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            
        },
    })
)

export default ThankYouText