import React from "react";
import s from "./Login.module.css"


function Login(props) {
    return (
        <div className={s.wraper}>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Password'/>
            <a href="#">Forgot Password?</a>
            <button>Sing in</button>
            <a href="#">Registration</a>
        </div>
    );
}

export default Login;