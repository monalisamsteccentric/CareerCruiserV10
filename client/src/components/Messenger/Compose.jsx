import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ComposeMessage = () => {
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const { name: user } = useSelector(state=>state.user)

  const handleSubmit = (event) => {
    event.preventDefault();

    

    const data = {
      message,
      sender,
      recipient
    };

    axios.post('http://localhost:8000/messages', data)
      .then((response) => {
        console.log('Message sent:', response.data);
        setMessage('');
        setSender('');
        setRecipient('');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className='border-b-2 font-bold'>Compose</h1>
        <label htmlFor="sender">Sender:</label>
        <input id="sender" type="text" name="sender" value={user.username} onChange={(event) => setSender(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="recipient">Recipient:</label>
        <input id="recipient" type="text" name="recipient" value={recipient} onChange={(event) => setRecipient(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ComposeMessage;
