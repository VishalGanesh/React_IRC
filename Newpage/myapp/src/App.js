import React from 'react';

import './Assets/Login_Signup.css'
import Navbar from './Components/nav';
import Login_SignUp from './Components/login_signup';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login_SignUp/>
    </div>
  );
}

export default App;