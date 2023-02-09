import FormContainer from '../containers/FormContainer';
import SelectPlanForm from './SelectPlanForm';
import { usePageValues } from '../../hooks/PageControlContextProvider';
import PersonalInfoForm from './PersonalInfoForm'; 
import PickAddOns from './PickAddOns/PickAddOns';

const FormLayout = () => {
    const [ pageState, dispatch] = usePageValues()

    const renderFormPage = () => {
        switch(pageState.curr_form_page) {
            case 0:
                return <PickAddOns /> 
            case 1: 
                return <SelectPlanForm /> 
            case 2:
                return <PersonalInfoForm />
            case 3:
                return <div>Page four</div>
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
