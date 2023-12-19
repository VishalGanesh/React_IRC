import React from 'react';

import './Assets/Login_Signup.css'
import Navbar from './Components/nav';
import Login_SignUp from './Components/login_signup';
import Home from './Components/Home';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='login' element={<Login_SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;