import React, { useState, useEffect } from "react";
import axios from "axios";

import Project from '../Profile/Project';

const ProfileProject = () => {
  const [projectsData, setProjectsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const user = JSON.parse(localStorage.getItem('userId'))
  const item = JSON.parse(localStorage.getItem('changedProj'))

  useEffect(() => {
    
    axios.get(`https://careercruiser-backend.onrender.com/getprofile/getprojects`, {
        params: { user } // pass user as a parameter
      })
      .then(response => {
        
        setProjectsData(response.data);
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

  if (!projectsData || projectsData.length === 0) {
    return (
      <div>
        <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Projects</button>
        {showForm && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseForm}>
                &times;
              </span>
              <Project handleCloseForm={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-bold">Projects</h2>
      {projectsData[0].projects.map(project => (
        <div className="border-2 border-gray-500 rounded-lg m-2 p-2" key={project._id}>
          <p>{project.name}</p>
          <p>{project.description}</p>
          <p>{project.role}</p>
          <p>{project.startDate.slice(0,10)} - {project.endDate.slice(0,10)}</p>
        </div>
      ))}
      <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Project</button>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseForm}>
              &times;
            </span>
            <Project handleCloseForm={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
    
  );
};

export default ProfileProject;
