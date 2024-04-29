import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobApplication from './JobApplication';

function JobListings() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://careercruiser-backend.onrender.com/getcreatedjobs')
      .then(response => {
        setJobs(response.data); // Assuming the backend returns an array of jobs
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        alert('Failed to fetch jobs. Check console for more information.');
      });
  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <div>
      <h1>Available Jobs</h1>
      {jobs.map(job => (
        <JobApplication key={job._id} job={job} />
      ))}
    </div>
  );
}

export default JobListings;
