import { useReducer, useContext } from 'react';
import { createContext } from 'react';
import FormStepReducer from '../reducer/FormStepReducer'

const PageControlContext = createContext(null);

const PageControlContextProvider = ({ children }) => {
    const [currFormPage, dispatchCurrFormPage] = useReducer(FormStepReducer, { curr_form_page: 0 });
    return (
        <PageControlContext.Provider value={[currFormPage, dispatchCurrFormPage]}>
            {children}
        </PageControlContext.Provider>
    )
}

export const usePageValues = () => useContext(PageControlContext)

export default PageControlContextProvider