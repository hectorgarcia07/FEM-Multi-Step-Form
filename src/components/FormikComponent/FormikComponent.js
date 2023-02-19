import { Formik } from 'formik';
import PlanSelection, { initialValues } from '../../YupSchema/planSelection'
import FormControlButtonContainer from '../containers/FormControlButtonContainer'
import Banner from '../Banner'
import FormLayout from '../FormComponents/FormLayout'
import  { usePageValues } from '../../hooks/PageControlContextProvider'

import { FormContainer, FormikContainer, Form } from './'

const FormikComponent = () => {
    const [ , dispatch] = usePageValues()

    return (
        <Formik
            initialValues={initialValues}
            validateOnMount={true}
            validationSchema={PlanSelection}
            onSubmit={( values ) => {
              console.log("submitted", values)
              dispatch( { type: 'SUBMIT_SUCCESS' } )
            }}
          >
            {props => (
              <FormikContainer>
                <Form onSubmit={props.handleSubmit}>
                  <Banner />
                  <FormContainer>
                    <FormLayout />
                    <FormControlButtonContainer />  
                  </FormContainer>
                </Form>
              </FormikContainer>
            )}

          </Formik>
    )
}

export default FormikComponent