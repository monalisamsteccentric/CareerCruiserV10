import React, { useState } from 'react';
import axios from 'axios';

function JobPostForm() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setJobTitle(value);
        break;
      case 'description':
        setJobDescription(value);
        break;
      case 'location':
        setJobLocation(value);
        break;
      default:
        break;
    }
  };

  // Handle form submission with Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = {
      title: jobTitle,
      description: jobDescription,
      location: jobLocation
    };

    try {
      const response = await axios.post('https://careercruiser-backend.onrender.com/postjob', jobData);
      console.log('Job posted successfully:', response.data);
      alert('Job posted successfully!');
    } catch (error) {
      console.error('Failed to post job:', error);
      alert('Failed to post job. Check console for more information.');
    }
  };

  return (
    <div className="job-post-form">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Job Description:</label>
          <textarea
            id="description"
            name="description"
            value={jobDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={jobLocation}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobPostForm;
