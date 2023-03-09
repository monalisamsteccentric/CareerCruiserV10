import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';

const JobFromHomepage = () => {
  const params = useParams();
  const [job, setJob] = useState(null);
  const jobId = params.jobid;

  useEffect(() => {
    axios.get(`http://localhost:8000/jobsbyid?jobId=${jobId}`)
      .then(response => setJob(response.data))
      .catch(error => console.error(error.message));
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gray-100'>
      <Navigation/>
      <div className='p-16 bg-white border-1 border-gray-500 rounded-lg'>
      <h2> <span className='font-bold'>Position:</span>  {job.Title}</h2>
      <h2><span className='font-bold'>Company:</span>  {job.Company}</h2>
       <h2><span className='font-bold'>Location:</span> {job.Location}</h2>
       <h2><span className='font-bold'>Category:</span>{job.Category}</h2>
       <h2><span className='font-bold'>Requirement:</span> {job.JobRequirement}</h2>
       <h2><span className='font-bold'>Qualification:</span> {job.RequiredQual}</h2>
      <p><span className='font-bold'>Description:</span> {job.JobDescription}</p>
      <p><span className='font-bold'>Points:</span> {job.ApplicationP}</p>
      <button className='bg-blue-500 text-white p-2 my-2 rounded-lg'>Apply</button>
    </div>
    </div>
  );
};

export default JobFromHomepage;
