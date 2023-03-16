import React, { useState, useEffect } from "react";
import axios from "axios";

import WorkExperience from "../Profile/WorkExperience";

const ProfileWorkExperience = () => {
  const [workExperienceData, setWorkExperienceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const user = JSON.parse(localStorage.getItem('userId'))
  const item = JSON.parse(localStorage.getItem('changedWe'))
  useEffect(() => {
    
    axios.get(`https://careercruiser-backend.onrender.com/getprofile/getworkexperiences/`, {
        params: { user }
    })
      .then(response => {
        setWorkExperienceData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [user,item]);

  const handleShowForm = () => {
    setShowForm(true); // Update state variable to show pop-up form
  };

  const handleCloseForm = () => {
    setShowForm(false); // Update state variable to hide pop-up form
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!workExperienceData || workExperienceData.length === 0) {
    return (
      <div>
        <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Work Experience</button>
        {showForm && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseForm}>
                &times;
              </span>
              <WorkExperience handleCloseForm={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-bold">Work Experience</h2>
      {workExperienceData[0].workExperience.map(experience => (
        <div className="border-2 border-gray-500 rounded-lg m-2 p-2" key={experience._id}>
          <p>{experience.title}</p>
          <p>{experience.company}</p>
          <p>{experience.startDate.slice(0,10)} - {experience.endDate.slice(0,10)}</p>
          <p>{experience.description}</p>
        </div>
      ))}
      <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Work Experience</button>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseForm}>
              &times;
            </span>
            <WorkExperience handleCloseForm={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileWorkExperience;
