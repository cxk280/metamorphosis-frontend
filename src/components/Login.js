import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <center>
        <h1>Login Page</h1>
          <div className="credentialSection">
            <div className="imageParent">
              <img className="metamorphosisLogo" src="../images/Metamorphosis-Logo-Final.svg"/>
            </div>
            <br />
            <form action="/login" method="post" name="loginForm" className="form-horizontal">
              <div>
                <label className="credentialLabel emailLabel">Email</label>
                <input className="credentialInput" type="text" placeholder="Email" name="email"/>
              </div>
              <br />
              <div>
                <label className="credentialLabel passwordLabel">Password</label>
                <input className="credentialInput" type="password" placeholder="Password" name="password"/>
              </div>
              <br />
              <input className="submitButton" type="submit"/>
            </form>
            <br />
            <p id="signupText">Don&apos;t have an account? Sign up <a href="/signupPage">here</a>!</p>
          </div>
        </center>
      </div>
    );
  }
}

export default Login;
