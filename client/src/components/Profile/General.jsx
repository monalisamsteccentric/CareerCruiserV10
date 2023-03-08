import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function General(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const { name } = useSelector(state=>state.user);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = name.userId;
    const generalData = {
      user,
      firstName,
      lastName,
      phone,
      email,
      address,
    };

    axios.post('http://localhost:8000/profile/general', generalData)
    .then((response) => {
      console.log('General Data sent:', response.data);
      props.handleCloseForm();
    })
    .catch((error) => {
      console.error('Error sending data:', error);
    });
   
  };

  return (
    <div>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input className='outline-none'
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input className='outline-none'
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
         className='outline-none'
          type="text"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
        className='outline-none'
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address: </label>
        <input
        className='outline-none'
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <button className='float-right p-1 rounded-lg text-white bg-blue-500 m-1' type="submit">Save</button>
    </form>
    <button className='float-right p-1 rounded-lg text-white bg-red-500 m-1' onClick={props.handleCloseForm}>Cancel</button>
    </div>
  );
}

export default General;
