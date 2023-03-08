import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import General from '../Profile/General';

const ProfileGeneral = () => {
const [generalData, setGeneralData] = useState(null);
const [loading, setLoading] = useState(true);
const [showForm, setShowForm] = useState(false);
const { name } = useSelector(state=>state.user);

useEffect(() => {
const user = name.userId;
axios.get(`http://localhost:8000/getprofile/getgenerals`,{
    params: { user } 
  })
.then(response => {
   
setGeneralData(response.data);
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

if (!generalData || generalData.length === 0) {
return (
  <div>
  <button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Add Personal Details</button>
  {showForm && (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={handleCloseForm}>
          &times;
        </span>
        <General handleCloseForm={handleCloseForm} />
      </div>
    </div>
  )}
</div>
);
}

return (
<div>
  <div className="border-2 border-gray-500 rounded-lg m-2 p-2">
<h2 className="font-bold">General Information</h2>
<p>First Name: {generalData[0].firstName}</p>
<p>Last Name: {generalData[0].lastName}</p>
<p>Email: {generalData[0].email}</p>
<p>Phone: {generalData[0].phone}</p>
<p>Address: {generalData[0].address}</p>
</div>
<button className="bg-blue-500 rounded-lg text-white m-2 p-1" onClick={handleShowForm}>Edit Personal Details</button>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseForm}>
              &times;
            </span>
            <General handleCloseForm={handleCloseForm} />
          </div>
        </div>
      )}
    </div>

);
};

export default ProfileGeneral;



