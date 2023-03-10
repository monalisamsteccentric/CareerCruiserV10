import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserName } from '../Features/userSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://careercruiser-backend.onrender.com/login", { username, password });
      const { data } = response;
      localStorage.setItem('token', JSON.stringify(data));
      dispatch(fetchUserName());
      navigate('/')
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center bg-gray-100'>
      <div className='border-2 border-gray-400 rounded-lg p-4 bg-white'>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className='outline-none my-2'
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              className='outline-none my-2'
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>
          {error && <div>{error}</div>}
          <button className='bg-blue-500 hover:bg-blue-700 w-full text-white text-sm font-bold py-1 px-1 my-2 rounded' type="submit">Login</button>
        </form>
      </div>
      <p>New User? <Link to='/register'> <span className='text-blue-600 underline'>Register</span></Link></p>
    </div>
  );
};

export default Login;
