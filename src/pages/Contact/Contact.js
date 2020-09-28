import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';


const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">
        Write to us
        </h2>
      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;