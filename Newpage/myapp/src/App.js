import React from 'react';
import {Route,Routes} from "react-router-dom"
import './Assets/Login_Signup.css'
import Navbar from './Components/nav';
import Login_SignUp from './Components/login_signup';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/Login" element={<Login_SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;