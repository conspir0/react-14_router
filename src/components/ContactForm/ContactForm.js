import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import './ContactForm.css';


class ContactForm extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    this.setState({ value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;

    value.length > 0 && this.setState({ value: '' })
  }

  render() {
    const { value } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form className="contact-form">
        <textarea
          type="textarea"
          placeholder="Write here..."
          className="contact-input"
          value={value}
          onChange={handleChange}
        ></textarea>
        <button
          className="contact-button"
          disabled={value.length === 0 && "disabled"}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <Prompt
          when={value}
          message="Are you sure to leave this page?"
        />
      </form>
    );
  }
}

export default ContactForm;