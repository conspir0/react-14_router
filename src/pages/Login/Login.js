import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from './../../components/LoginForm/LoginForm'
import "./Login.css";

window.permission = false;

class Login extends Component {
  state = {
    permission: false
  }

  handlePermission = (permission) => this.setState({ permission })

  render() {
    const { handlePermission } = this,
      { permission } = this.state;

    permission && (window.permission = true)

    return (
      <div className="login">
        <LoginForm handlePermission={handlePermission} />
        <Route render={() => (
          window.permission && <Redirect to="/admin" />
        )} />
      </div>
    );
  }
}

export default Login;