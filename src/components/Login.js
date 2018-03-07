import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <center>
      <h1>Login Page</h1>
        <div className="loginSection">
          <img src="http://via.placeholder.com/350x150"/>
          <br />
          <h2>METAMORPHOSIS</h2>
          <br />
          <form action="/login" method="post" name="loginForm">
            <div>
              <label class="text-white">Email</label>
              <br/>
              <input type="text" placeholder="Email" name="email"/>
            </div>
            <br /><br />
            <div>
              <label class="text-white">Password</label>
              <br/>
              <input type="password" placeholder="Password" name="password"/>
            </div>
            <br /><br />
            <input type="submit"/>
            <br /><br />
          </form>
        </div>
      </center>
    </div>
  );
};

export default Login;
