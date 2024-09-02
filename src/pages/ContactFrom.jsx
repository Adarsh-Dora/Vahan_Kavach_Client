import { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

// eslint-disable-next-line react/prop-types
const ContactForm = ({ user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !number || !emergencyNumber) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      // Sending form data to the backend
       await axios.post(
        'http://localhost:3005/auth/addContact',
        {
          name,
          email,
          usermobile: number,
          mobile: emergencyNumber,
        },
        {
          headers: {
            // eslint-disable-next-line react/prop-types
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setMessage('Contact added successfully!');
      // Clear the form fields
      setName('');
      setEmail('');
      setNumber('');
      setEmergencyNumber('');
    } catch (error) {
      console.error('Error adding contact:', error.response ? error.response.data : error.message);
      setMessage('Failed to add contact. Please try again.');
    }
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Emergency Contact</h1>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="number">Your Number:</label>
          <input
            type="text"
            id="number"
            placeholder="User number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Emergency E-mail ID"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="emergencyNumber">Number:</label>
          <input
            type="text"
            id="emergencyNumber"
            value={emergencyNumber}
            placeholder="Emergency number"
            onChange={(e) => setEmergencyNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='button'>Add Contact</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
