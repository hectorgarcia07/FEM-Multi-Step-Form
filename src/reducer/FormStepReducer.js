const FormStepReducer = (state, action) => {
    const curr_state = state.curr_form_page
    console.log("State change", state)
    switch ( action.type ) {
        case 'NEXT_FORM_PAGE':
            return { curr_form_page: curr_state < 3 ? curr_state + 1 : curr_state }
        case 'PREV_FORM_PAGE':
            return { curr_form_page: curr_state > 0 ? curr_state - 1 : curr_state }
        default:
            throw new Error()
    }
}

export default FormStepReducer