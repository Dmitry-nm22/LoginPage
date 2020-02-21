import React from "react";
import s from "./Login.module.css"
import {updateCheckboxAC} from "../../redux/reducers/Login-reducer";


function Login(props) {
    console.log(props)
    const {login, updateEmail, updatePass,updateCheckbox } = props


    let changeEmail = (e) =>{
        let email = e.currentTarget.value
        updateEmail(email);
    }

    let changePass = (e) =>{
        let pass = e.currentTarget.value
        updatePass(pass);
    }

    let changeCheckBox = (e) =>{
        let bool = e.currentTarget.checked
        updateCheckbox(bool);
    }


console.log(login)
    return (
        <div className={s.wraper}>
            <input  placeholder='email' value={login.email} onChange={changeEmail}/>
            <input type="password" placeholder='password' value={login.password} onChange={changePass}/>
            <a href="#">Forgot Password?</a>
            <input type="checkbox" checked={login.rememberMe} onChange={changeCheckBox}/> Remember Me?
            <button>Sing in</button>
            <a href="#">Registration</a>
        </div>
    );
}

export default Login;