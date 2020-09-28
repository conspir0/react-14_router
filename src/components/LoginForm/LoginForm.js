import React, { Component } from 'react';
import './LoginForm.css';


window.permission = false;

class LoginForm extends Component {
  state = {
    text: '',
    password: ''
  }

  handleSubmit = () => {
    this.setState({ text: '', password: '' });
    this.props.handlePermission(true);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.type]: e.target.value
    })
  }

  render() {
    const { handleChange, handleSubmit } = this,
      { text, password } = this.state,
      textValidation = text.length >= 5,
      passwordValidation = password.length >= 8,
      validation = textValidation && passwordValidation;

    return (
      <form className="login-form">
        <label className="login-label">
          Login:
          <input
            type="text"
            className="login-input"
            placeholder="min. 5 signs"
            value={text}
            onChange={handleChange}
          />
        </label>
        <label className="login-label">
          Password:
          <input
            type="password"
            className="login-input"
            placeholder="min. 8 signs"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button
          className="login-button"
          disabled={!validation}
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    );
  }
}

export default LoginForm;