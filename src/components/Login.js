import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        email : '',
        password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeyPress(e) {
      if(e.preventDefault) e.preventDefault();
      this.setState({data: {message: e.target.value}})
      e.target.value = '';
  }


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
            <form name="loginForm" className="form-horizontal" onSubmit={this.handleSubmit}>
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
            <p id="signupText">Don&apos;t have an account? Sign up <a href="/signup">here</a>!</p>
          </div>
        </center>
      </div>
    );
  }
}

export default Login;
