import { usePageValues } from '../../hooks/PageControlContextProvider';
import { useFormikContext } from 'formik';
import {
    SubmitButton,
    BackButton,
    NextButton,
    ButtonContainer
} from './'

const FormControlButtonContainer = () => {
    const [ pageState, dispatch] = usePageValues()
    const { errors, isValid } = useFormikContext()

    return (
        pageState.curr_form_page === 4 
        ?
        null
        :
        <ButtonContainer>
            <BackButton 
                type="button"
                onClick={ () => dispatch( { type: 'PREV_FORM_PAGE' } ) }
                name={'Back-Button'}
                onMouseDown={ event => { event.preventDefault() }}
                disabled={ !isValid || !!Object.keys(errors).length}
            >
                Go Back
            </BackButton>
            {
                pageState.curr_form_page === 3 
                ?
                <SubmitButton 
                    type="submit"
                    name={'Submit-Button'}
                >
                    Confirm
                </SubmitButton> 
                :
                <NextButton 
                    type="button"
                    onClick={ () => dispatch( { type: 'NEXT_FORM_PAGE' } ) }
                    onMouseDown={ event => { event.preventDefault() }}
                    name={'Next-Button'}
                    disabled={ !isValid || !!Object.keys(errors).length }
                >
                    Next Step
                </NextButton>
            }
        </ButtonContainer>
    )
}

export default FormControlButtonContainer