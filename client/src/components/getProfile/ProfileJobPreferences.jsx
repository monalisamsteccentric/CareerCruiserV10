import React, { useState, useEffect } from "react";
import axios from "axios";
import JobPreferences from '../Profile/JobPreferences'
import { useSelector } from "react-redux";

const ProfileJobPreferences = () => {
  const [jobPreferencesData, setJobPreferencesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { name } = useSelector(state=>state.user)

  useEffect(() => {
    const user = name.userId
    axios.get(`http://localhost:8000/getprofile/getjobpreferences`,{
        params: { user } // pass user as a parameter
      })
      .then(response => {
        
        setJobPreferencesData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [name.userId]);

  const handleShowForm = () => {
    setShowForm(true); // Update state variable to show pop-up form
  };

  const handleCloseForm = () => {
    setShowForm(false); // Update state variable to hide pop-up form
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!jobPreferencesData || jobPreferencesData.length === 0) {
    return (
      <div>
        <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Job Preferences</button>
        {showForm && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseForm}>
                &times;
              </span>
              <JobPreferences handleCloseForm={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    );
  }

  const { title, industry, location, salary, description } = jobPreferencesData[0].jobPreferences;

  return (
    <div>
      <div className="border-2 border-gray-500 rounded-lg m-2 p-2">
      <h2 className="font-bold">Job Preferences</h2>
      <p>Title: {title}</p>
      <p>Industry: {industry}</p>
      <p>Location: {location}</p>
      <p>Salary: {salary}</p>
      <p>Description: {description}</p>
    </div>
    <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Edit Job Preferences</button>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseForm}>
              &times;
            </span>
            <JobPreferences handleCloseForm={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileJobPreferences;
