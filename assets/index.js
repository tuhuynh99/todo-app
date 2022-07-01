import React from 'react';
import ReactDOM from "react-dom";
import GoogleSignIn from './javascripts/pages/login.js'
import NavBar from './javascripts/components/navbar.js'

ReactDOM.render(
  <div>
    <NavBar />
    <GoogleSignIn />
  </div>,
  document.getElementById('root')
);