import FormContainer from '../containers/FormContainer';
import SelectPlanForm from './SelectPlanForm';
import { usePageValues } from '../../hooks/PageControlContextProvider';
import PersonalInfoForm from './PersonalInfoForm'; 
import PickAddOns from './PickAddOns/PickAddOns';
import ReviewOptions from './ReviewOptions';
import ThankYouPage from './ThankYouPage'
import { useFormikContext } from 'formik';

const FormLayout = () => {
    const [ pageState, dispatch] = usePageValues()
    const { values } = useFormikContext()

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
        <FormContainer>
            { renderFormPage() }
        </FormContainer>
    )
}

export default FormLayout
