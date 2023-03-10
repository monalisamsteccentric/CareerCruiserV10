import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


function JobPreferences(props) {
  const [title, setTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const { name } = useSelector(state=>state.user);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = name.userId; 
    const jobPrefData = {
      user,
      title,
      industry,
      location,
      salary,
      description,
    };

    axios.post('https://careercruiser-backend.onrender.com/profile/jobpreferences', jobPrefData)
    .then((response) => {
      console.log('Job Preference Data sent:', response.data);
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
        <label htmlFor="title">Job Title:</label>
        <input
          className='outline-none'
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="industry">Industry:</label>
        <input
          className='outline-none'
          type="text"
          id="industry"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          className='outline-none'
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="salary">Salary:</label>
        <input
          className='outline-none'
          type="text"
          id="salary"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          className='outline-none'
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <button className='float-right p-1 rounded-lg text-white bg-blue-500 m-1' type="submit">Save</button>
    </form>
    <button className='float-right p-1 rounded-lg text-white bg-red-500 m-1' onClick={props.handleCloseForm}>Cancel</button>
    </div>
  );
}

export default JobPreferences;
