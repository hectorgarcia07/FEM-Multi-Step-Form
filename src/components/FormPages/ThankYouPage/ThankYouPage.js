import ThanksYouPageContainer from './ThanksYouPageContainer';
import ImgContainer from './ImgContainer';
import ThankYouText from './ThankYouText';
import ThankYouHeader from './ThankYouHeader';
import CheckMarkImage from './CheckMarkImage'
import { useTheme } from '@mui/material';

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