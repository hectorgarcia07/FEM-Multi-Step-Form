import { useTheme } from '@mui/material/styles';
import FormContainer from '../containers/FormContainer';
import SelectPlanForm from './SelectPlanForm';
import PlanSelection, { initialValues } from '../../YupSchema/planSelection'
import { styled } from '@mui/material/styles';
import FormControlButtonContainer from '../containers/FormControlButtonContainer'
import { usePageValues } from '../../hooks/PageControlContextProvider';
import PersonalInfoForm from './PersonalInfoForm'; 
import { Formik } from 'formik';

const FormLayout = () => {
    const theme = useTheme()
    const [ pageState, dispatch] = usePageValues()
    console.log(pageState)
    
    const outerForm = {
        backgroundColor: `${ theme.colors.neutral.white }`,
        borderRadius: '10px 10px 0 0',
        overflow: 'hidden',
        border: '1px solid transparent',

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
        <Formik
            initialValues={initialValues}
            validationSchema={PlanSelection}
            onSubmit={( values ) => {
              console.log(values)
            }}
        >
            {props => (
                <FormContainer onSubmit={props.handleSubmit}>
                    <DIV sx={outerForm} >
                    { renderFormPage() }
                    </DIV>
                    <FormControlButtonContainer />  
                </FormContainer>
            )}
        </Formik>
    )
}

export default FormLayout
