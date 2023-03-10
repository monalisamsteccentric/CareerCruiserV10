import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobfromSearchBar = () => {
  const params = useParams();
  const [job, setJob] = useState(null);
  const jobId = params.resultid;

  useEffect(() => {
    axios.get(`https://careercruiser-backend.onrender.com/jobsbyid?jobId=${jobId}`)
      .then(response => setJob(response.data))
      .catch(error => console.error(error.message));
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gray-100'>
      <div className='p-16 bg-white'>
      <h2> <span className='text-bold'>Position:</span>  {job.Title}</h2>
      <h2><span>Company:</span>  {job.Company}</h2>
       <h2>Location: {job.Location}</h2>
       <h2>Category: {job.Category}</h2>
       <h2>Requirement: {job.JobRequirement}</h2>
       <h2>Qualification: {job.RequiredQual}</h2>
      <p>Description: {job.JobDescription}</p>
      <p>Points: {job.ApplicationP}</p>
    </div>
    </div>
  );
};

export default JobfromSearchBar;
