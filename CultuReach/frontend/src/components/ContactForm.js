import React, { useState } from 'react';
import './ContactForm.css'; // Create this CSS file for styling

function ContactForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission of the message, such as sending it to a server
    console.log('Message submitted:', message);
    // Reset the message input after submission
    setMessage('');
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
