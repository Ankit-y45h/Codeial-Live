import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input type="email" placeholder="e-mail" required />
        </div>
        <div className="field">
          <input type="password" placeholder="password" required />
        </div>
        <div className="field">
          <button>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
