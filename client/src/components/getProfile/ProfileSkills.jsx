import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Skills from '../Profile/Skills';

const ProfileSkills = () => {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { name } = useSelector(state => state.user);

  useEffect(() => {
    const user = name.userId;
    axios.get(`https://careercruiser-backend.onrender.com/getprofile/getskills`, {
        params: { user } ,
    })
      .then(response => {
       
        setSkillsData(response.data);
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

  if (!skillsData || skillsData.length === 0) {
    return (
      <div>
        <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Skills</button>
        {showForm && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleCloseForm}>
                &times;
              </span>
              <Skills handleCloseForm={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-bold">Skills</h2>
      {skillsData[0].skills.map(skill => (
        <div className="border-2 border-gray-500 rounded-lg m-2 p-2" key={skill._id}>
          <p>{skill.name}</p>
          <p>{skill.proficiency}</p>
        </div>
      ))}
      <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Skills</button>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseForm}>
              &times;
            </span>
            <Skills handleCloseForm={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSkills;
