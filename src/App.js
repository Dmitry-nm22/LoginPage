import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import NavMenu from "./Components/NavMenu/NavMenu";
import Login from "./Components/Login/Login";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavMenu/>
          <div>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/forgotPss' render={() => <ForgotPass/>}/>
            <Route path='/register' render={() => <Register/>}/>
            <Route path='/profile' render={() => <Profile/>}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
