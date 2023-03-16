import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function EducationForm(props) {
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { name } = useSelector(state => state.user);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = name.userId
    const educationData = {
      user,
      degree,
      institution,
      startDate,
      endDate,
    };
    axios.post('https://careercruiser-backend.onrender.com/profile/education', educationData)
      .then((response) => {
        console.log('Education Data sent:', response.data);
        props.handleCloseForm();
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
      const item = localStorage.getItem('changedEd') ? JSON.parse(localStorage.getItem('changedEd'))+1 : 1
      localStorage.setItem('changedEd', item)
  };

  return (
    <div className="overlay">
      <div className="education-form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="degree">Degree:</label>
            <input
              className='outline-none'
              type="text"
              id="degree"
              value={degree}
              onChange={(event) => setDegree(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="institution">Institution:</label>
            <input
              className='outline-none'
              type="text"
              id="institution"
              value={institution}
              onChange={(event) => setInstitution(event.target.value)}
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
          <button className='float-right p-1 rounded-lg text-white bg-blue-500 m-1' type="submit">Save</button>
        </form>
        <button className='float-right p-1 rounded-lg text-white bg-red-500 m-1' onClick={props.handleCloseForm}>Cancel</button>
      </div>
    </div>
  );
}

export default EducationForm;
