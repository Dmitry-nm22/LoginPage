const UPDATE_EMAIL = 'UPDATE_EMAIL'
const UPDATE_PASS = 'UPDATE_PASS'
const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX'

let initialState = {
    email: 'p',
    password: 'e',
    rememberMe: false

}

const loginReducer = (state = initialState, action) =>{
debugger
    switch (action.type) {
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.email
            };
        case UPDATE_PASS :
            return {
                ...state,
                password: action.pass
            }
        case UPDATE_CHECKBOX :
            return {
                ...state,
                rememberMe: action.bool
            }
        default: return state
    }
}


//action creators
export const updateEmailAC = (email) => ({type: UPDATE_EMAIL, email})
export const updatePassAC = (pass) => ({type: UPDATE_PASS, pass})
export const updateCheckboxAC = (bool) => ({type: UPDATE_CHECKBOX, bool})

export default loginReducer;