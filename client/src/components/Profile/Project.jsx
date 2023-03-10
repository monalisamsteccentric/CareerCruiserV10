import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


const Project = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { name: userName } = useSelector(state=>state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = userName.userId;
    const projectData = { user, name, description, role, startDate, endDate };
    axios.post('https://careercruiser-backend.onrender.com/profile/projects', projectData)
    .then((response) => {
      console.log('Project Data sent:', response.data);
      props.handleCloseForm();
    })
    .catch((error) => {
      console.error('Error sending data:', error);
    });
    
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input className='outline-none' type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea className='outline-none' id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <input className='outline-none' type="text" id="role" value={role} onChange={(event) => setRole(event.target.value)} />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input className='outline-none' type="date" id="startDate" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input  className='outline-none' type="date" id="endDate" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
      </div>
      <button className='float-right p-1 rounded-lg text-white bg-blue-500 m-1' type="submit">Save Project</button>
    </form>
    <button className='float-right p-1 rounded-lg text-white bg-red-500 m-1' onClick={props.handleCloseForm}>Cancel</button>
    </div>
  );
};

export default Project;
