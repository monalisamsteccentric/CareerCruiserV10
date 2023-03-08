import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        navigate('/login')
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
    <form className="flex flex-col border-2 border-gray-500 rounded-lg p-4 bg-white" onSubmit={handleSubmit}>
      <input
        className="outline-none my-2"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="outline-none my-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="outline-none my-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='bg-blue-500 hover:bg-blue-700 w-full text-white text-sm font-bold py-1 px-1 my-2 rounded' type="submit">Register</button>
    </form>
    </div>
  );
};

export default Register;
