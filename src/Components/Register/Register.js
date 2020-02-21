import React from "react";
import s from "./Register.module.css";
import Login from "../Login/Login";
import {Route} from "react-router";
import {NavLink} from "react-router-dom";

function Register() {
    return (
        <div className={s.wraper}>
        <h1 className={s.title}>Регистрация</h1>
            <div>
                <input type="email"  name="registration[email]" required="required"
                       placeholder="Ваш e-mail" className="user-email"/>
            </div>
            <div>
                <input type="password" name="registration[password]"
                       required="required" placeholder="Придумайте пароль" className="input-pas"/>

            </div>
            <div>
                <input type="password" name="registration[password]"
                       required="required" placeholder="Повторите пароль" className="input-pas"/>
            </div>
            <div>
                <button>регистрация</button>
            </div>
            <NavLink to="/Login">Login in</NavLink>
        </div>

    );
}

export default Register;