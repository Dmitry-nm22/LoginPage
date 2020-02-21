import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleWare from "redux-thunk";
import loginReducer from "./reducers/Login-reducer";
import ProfileReducer from "./reducers/Profile-reducer";
import RegisterReducer from "./reducers/Register-reducer";
import ForgotPassReducer from "./reducers/ForgotPass-reducer";


let reducers = combineReducers({
    login: loginReducer,
    profile: ProfileReducer,
    Register: RegisterReducer,
    ForgotPass: ForgotPassReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export default store;