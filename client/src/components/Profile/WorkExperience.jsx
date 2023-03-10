import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


function WorkExperience(props) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const { name } = useSelector(state=>state.user);
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = name.userId;
    const workExperienceData = {
      user,
      title,
      company,
      startDate,
      endDate,
      description,
    };
    axios.post('https://careercruiser-backend.onrender.com/profile/workexperiences', workExperienceData)
    .then((response) => {
      console.log('Work Experience Data sent:', response.data);
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
        <label htmlFor="title">Title:</label>
        <input
          className='outline-none'
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="company">Company:</label>
        <input
          className='outline-none'
          type="text"
          id="company"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          className='outline-none'
          type="date"
          id="startDate"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          className='outline-none'
          type="date"
          id="endDate"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          className='outline-none'
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button className='float-right p-1 rounded-lg text-white bg-blue-500 m-1' type="submit">Save</button>
    </form>
    <button className='float-right p-1 rounded-lg text-white bg-red-500 m-1' onClick={props.handleCloseForm}>Cancel</button>
    </div>
  );
}

export default WorkExperience;
