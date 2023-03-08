import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


function Skills(props) {
  const [name, setName] = useState('');
  const [proficiency, setProficiency] = useState('');
  const { name: userName } = useSelector(state=>state.user);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = userName.userId;
    const skillData = {
      user,
      name,
      proficiency,
    };

    axios.post('http://localhost:8000/profile/skills', skillData)
    .then((response) => {
      console.log('Skill Data sent:', response.data);
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
        <label htmlFor="name">Skill Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="proficiency">Proficiency:</label>
        <select
          id="proficiency"
          value={proficiency}
          onChange={(event) => setProficiency(event.target.value)}
        >
          <option value="">Select proficiency level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <button className='float-right p-1 rounded-lg text-white bg-blue-500 m-1' type="submit">Save</button>
    </form>
    <button className='float-right p-1 rounded-lg text-white bg-red-500 m-1' onClick={props.handleCloseForm}>Cancel</button>
    </div>
  );
}

export default Skills;
