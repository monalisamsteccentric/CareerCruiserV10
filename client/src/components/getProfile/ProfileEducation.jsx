import React, { useState, useEffect } from "react";
import axios from "axios";
import Education from "../Profile/Education";
import './styleFile.css'


const ProfileEducation = () => {
  const [educationData, setEducationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false); // Add state variable for pop-up form
  // const { name } = useSelector((state) => state.user);
  const user = JSON.parse(localStorage.getItem('userId'))
  const item = JSON.parse(localStorage.getItem('changedEd'))
  useEffect(() => {
    
    axios
      .get("https://careercruiser-backend.onrender.com/getprofile/geteducations", {
        params: { user }, // pass user as a parameter
      })
      .then((response) => {
        setEducationData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [user, item]);

  const handleShowForm = () => {
    setShowForm(true); // Update state variable to show pop-up form
  };

  const handleCloseForm = () => {
    setShowForm(false); // Update state variable to hide pop-up form
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!educationData || educationData.length === 0) {
    return (
      <div>
        <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Educations Details</button>
        {showForm && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseForm}>
                &times;
              </span>
              <Education handleCloseForm={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <h2 className="font-bold">Education</h2>
      {educationData[0].education.map((edu) => (
        <div className="border-2 border-gray-500 rounded-lg m-2 p-2" key={edu._id}>
          <p>Degree: {edu.degree}</p>
          <p>Institution: {edu.institution}</p>
          <p>
            Duration: {edu.startDate.slice(0, 10)} - {edu.endDate.slice(0, 10)}
          </p>
        </div>
      ))}
      <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Educations Details</button>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close text-right" onClick={handleCloseForm}>
              &times;
            </span>
            <Education handleCloseForm={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileEducation;
