import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}
function Login() {
  return (
    <div className="App">
      <GoogleLogin
    clientId="743547745613-46fesv8rv6kq075idhu1ucjs58ljaaca.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    // cookiePolicy={'single_host_origin'}
    redirectUrli='http://localhost:3000/'
  />
    </div>
  );
}

export default Login;
