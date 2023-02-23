import InfoParagraph from "../../FormControlContainer/InfoParagraph"
import { styled } from '@mui/material/styles';

const ImgContainer = styled(InfoParagraph)(
    ({ theme }) => ({
        textAlign: 'center',
        paddingTop: '2rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            paddingTop: '7rem',
        },
    })
)

export default ImgContainer