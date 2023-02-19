import { usePageValues } from '../../hooks/PageControlContextProvider';
import {
    PersonalInfoForm,
    SelectPlanForm,
    PickAddOns,
    ReviewOptions,
    ThankYouPage
} from './../FormPages'

const FormLayout = () => {
    const [ pageState, ] = usePageValues()

    const renderFormPage = () => {
        switch(pageState.curr_form_page) {
            case 0:
                return <PersonalInfoForm />
            case 1: 
                return <SelectPlanForm /> 
            case 2:
                return <PickAddOns /> 
            case 3:
                return <ReviewOptions />
            case 4:
                return <ThankYouPage />
            default:
                throw new Error()
        }
    }

    return(
        <>
            { renderFormPage() }
        </>
    )
}

export default FormLayout
