import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {SingInTC, updateCheckboxAC, updateEmailAC, updatePassAC} from "../../redux/reducers/Login-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithDataRedirect";





    let mapStateToProps = (state) =>{
        return {
            login: state.login
        }
    };
    let mapDispatchTooProps = (dispatch) =>{
        return {
            updateEmail : (email) => {
                dispatch(updateEmailAC(email))
            },
            updatePass : (pass) => {
                dispatch(updatePassAC(pass))
            },
            updateCheckbox : (bool) => {
                dispatch(updateCheckboxAC(bool))
            },
            singIn: (bool) => {
            dispatch(SingInTC(bool))
        },
    }
};

// export default compose(
//     connect(mapStateToProps, mapDispatchTooProps),
//     withAuthRedirect
// )(Login)


export default connect(mapStateToProps, mapDispatchTooProps)(Login)

