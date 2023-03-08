import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Jobs = () => {
  const jobs = useSelector(state => state.data.jobs);
  const navigate = useNavigate()

  const clickHandler = (jobid) => {
    navigate('/jobhomepage/' + jobid)
  }

  const jobsData = [
    {
      _id: "63ede02c147d1a3bc48d9306",
      Type: "Front End Engineers",
      Title: "Network Administrator",
      Company: "NetCall Communications",
      Location: "Mumbai",
      Category: "Onsite",
      Salary: "NA",
    },
    {
      _id: '63ede02c147d1a3bc48d930e', Type: "Front End Engineers",
      Title: "IT Specialist",
      Company: "ACRA Credit Bureau",
      Location: "Mumbai",
      Category: "Onsite",
      Salary: "NA",
    }
    ,
    {
      _id: '63ede02c147d1a3bc48d932e', Type: "Front End Engineers",
      Title: "Photoshop Graphic Web Designer",
      Company: "Lycos Europe",
      Location: "Mumbai",
      Category: "Onsite",
      Salary: "NA",
    }
    ,
    {
      _id: '63ede02c147d1a3bc48d9336', Type: "Front End Engineers",
      Title: "Programmer",
      Company: "Boomerang Software LLC",
      Location: "Mumbai",
      Category: "Onsite",
      Salary: "NA",
    }
    ,
    {
      _id: '63ede02c147d1a3bc48d935e', Type: "Front End Engineers",
      Title: "Senior Software Developer/ Lead Developer",
      Company: "Vested Development, Inc.",
      Location: "Mumbai",
      Category: "Onsite",
      Salary: "NA",
    }
    ,
    {
      _id: '63ede02c147d1a3bc48d9366', Type: "Front End Engineers",
      Title: "C++  Developer",
      Company: "Lycos Europe",
      Location: "Mumbai",
      Category: "Onsite",
      Salary: "NA",
    }]


  let JobsToRender = jobs.length !== 0 ? jobs : jobsData;



  return (
    <div>
      {JobsToRender.map(job => (
        <div key={job._id} className='px-4 py-2'>
          <div className='h-36 w-full text-xs border-2 border-black-400 rounded-lg p-2 bg-white overflow-x-hidden'>
            <h3>{job.Title}</h3>
            <p>{job.Company}</p>
            <p>{job.Location}</p>
            <p>{job.Category}</p>
            <p>{job.Salary}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded my-2" onClick={() => clickHandler(job._id)} >Apply</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
