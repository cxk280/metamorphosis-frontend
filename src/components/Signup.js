import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <center>
      <h1>Signup Page</h1>
        <div className="credentialSection">
          <img src="http://via.placeholder.com/350x150"/>
          <br />
          <h2>METAMORPHOSIS</h2>
          <br />
          <form action="/signup" method="post" name="signupForm">
            <div>
              <label className="credentialLabel emailLabel">Email</label>
              <input className="credentialInput" type="text" placeholder="Email" name="email"/>
            </div>
            <br /><br />
            <div>
              <label className="credentialLabel passwordLabel">Password</label>
              <input className="credentialInput" type="password" placeholder="Password" name="password"/>
            </div>
            <br /><br />
            <input className="submitButton" type="submit"/>
            <br /><br />
          </form>
        </div>
      </center>
    </div>
  );
};

export default Signup;
