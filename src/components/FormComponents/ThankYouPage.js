import FormControlContainer from './FormControlContainer';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';
import { styled } from '@mui/system';
import { Box, useTheme } from '@mui/material';

const CustomFormControl = styled(FormHeader)(
    ({ theme }) => ({
        paddingBottom: '1.5rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            
        },
    })
)

const CheckMarkImage = styled('img')(
    ({ theme }) => ({
        objectPosition: 'center center',
        display: 'block',
        width: '50px',
        height: '50px',
        objectFit: 'cover',
        margin: '0 auto',


        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            width: '80px',
            height: '80px',
        },
    })
)

const ThankYouHeader = styled(FormHeader)(
    ({ theme }) => ({
        textAlign: 'center',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            
        },
    })
)

const ThankYouText = styled(InfoParagraph)(
    ({ theme }) => ({
        textAlign: 'center',
        fontSize: '1rem',
        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            
        },
    })
)

const ImgContainer = styled(InfoParagraph)(
    ({ theme }) => ({
        textAlign: 'center',
        paddingTop: '2rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            paddingTop: '7rem',
        },
    })
)

const ThanksYouPageContainer = styled(FormControlContainer)(
    ({ theme }) => ({
        paddingBottom: '4rem',
        marginBottom: '12rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            
        },
    })
)

const ThankYouPage = () => {
    const theme = useTheme()

    return (
        <ThanksYouPageContainer >
            <ImgContainer>
                <CheckMarkImage src={theme.icons.thankYou} />
            </ImgContainer>
            <ThankYouHeader >
                Thank you!
            </ThankYouHeader>
            <ThankYouText>
                Thanks for confirming your subscription!
                We hope you have fun using our platform. 
                If you ever need support, please fell free
                to email us at support@loremgaming.com.
            </ThankYouText>
        </ThanksYouPageContainer>
    )
}

export default ThankYouPage