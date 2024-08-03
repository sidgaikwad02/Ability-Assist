// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or email service
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <div className='heading'>Ability Assist</div>
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact__form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
