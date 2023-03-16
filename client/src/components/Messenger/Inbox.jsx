import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem('userId'))

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`https://careercruiser-backend.onrender.com/inboxmessages?recipient=${user}`);
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [user]);

  return (
    <div>
      <h1 className='border-b-2 font-bold'>Inbox</h1>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              <div>{message.sender.username}</div>
              <div>{message.message}</div>
              <div>{new Date(message.createdAt).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No messages</div>
      )}
    </div>
  );
};

export default Inbox;
