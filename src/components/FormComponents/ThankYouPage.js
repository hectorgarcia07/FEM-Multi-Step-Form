import FormControlContainer from './FormControlContainer';
import FormHeader from './FormHeader';
import InfoParagraph from '../InfoParagraph';

const ThankYouPage = () => {
    return (
        <FormControlContainer>
            <FormHeader id="plan-selection-label" >
                Personal info
            </FormHeader>
            <InfoParagraph>
                Please provide your name, email address, and phone number.
            </InfoParagraph>
        </FormControlContainer>
    )
}

export default ThankYouPage