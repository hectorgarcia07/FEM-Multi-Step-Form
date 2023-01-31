import { useTheme } from '@mui/material/styles';
import FormContainer from '../containers/FormContainer';
import SelectPlanForm from './SelectPlanForm';
import { styled } from '@mui/material/styles';
import { usePageValues } from '../../hooks/PageControlContextProvider';
import PersonalInfoForm from './PersonalInfoForm'; 

const FormLayout = () => {
    const theme = useTheme()
    const [ pageState, dispatch] = usePageValues()
    console.log(pageState)
    
    const outerForm = {
        
        borderRadius: '10px 10px 0 0',
        overflow: 'hidden',
        border: '1px solid transparent',
        paddingBottom: '8rem',

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            paddingLeft: '5rem',
            border: '1px solid black'
        },
    }

    const DIV = styled('div')(({ theme }) => ({
        
        [theme.breakpoints.up( `${ theme.breakpoints.values.desktop }` )]: {

        }
    }));

    const renderFormPage = () => {
        switch(pageState.curr_form_page) {
            case 0:
                return <PersonalInfoForm />
            case 1: 
                return <SelectPlanForm />
            case 2:
                return <div>Page three</div>
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
