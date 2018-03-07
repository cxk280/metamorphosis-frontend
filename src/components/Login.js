import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <center>
      <h1>Login Page</h1>
        <div className="credentialSection">
          <img src="http://via.placeholder.com/350x150"/>
          <br />
          <h2>METAMORPHOSIS</h2>
          <br />
          <form action="/login" method="post" name="loginForm" className="form-horizontal">
            <div>
              <label class="credentialLabel emailLabel">Email</label>
              <input className="credentialInput" type="text" placeholder="Email" name="email"/>
            </div>
            <br /><br />
            <div>
              <label class="credentialLabel passwordLabel">Password</label>
              <input className="credentialInput" type="password" placeholder="Password" name="password"/>
            </div>
            <br /><br />
            <input className="submitButton" type="submit"/>
            <br /><br />
          </form>
          <p id="signupText">Don't have an account? Sign up <a href="/signup">here</a>!</p>
        </div>
      </center>
    </div>
  );
};

export default Login;
