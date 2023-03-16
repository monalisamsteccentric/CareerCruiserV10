import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SentMessages = () => {
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem('userId'))
  useEffect(() => {
    const fetchSentMessages = async () => {
      try {
        const response = await axios.get(
          `https://careercruiser-backend.onrender.com/sentmessages?sender=${user}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSentMessages();
  }, [user]);

  return (
    <div>
      <h1 className='border-b-2 font-bold'>Sent Messages</h1>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              <div>To: {message.recipient.username}</div>
              <div>Message: {message.message}</div>
              <div>Time Sent: {new Date(message.createdAt).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No messages sent</div>
      )}
    </div>
  );
};

export default SentMessages;
