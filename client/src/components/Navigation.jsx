import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false); 
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
  };

  return (
    <nav className='bg-white'>
      <ul className='flex flex-col md:flex-row justify-between items-center py-2'>
        <li className='mb-2 md:mb-0 right'>
          <Link to='/'>
            <span className='font-bold'>CareerCruiser</span>
          </Link>
        </li>
        <li className='mb-2 md:mb-0 right'>
          <Link to='/profile'>Profile</Link>
        </li>
        <li className='mb-2 md:mb-0 right'>
          <Link to='/search'>Keyword based Search</Link>
        </li>
        <li className='mb-2 md:mb-0 right'>
          <Link to='/messages'>Messages</Link>
        </li>
        <li className='mb-2 md:mb-0 right'>
          <Link to='/postajob'>Post A Job</Link>
        </li>
        <li className='mb-2 md:mb-0 right'>
          <Link to='/jobapplication'>Apply for the Job</Link>
        </li>
        {isLoggedin ? (
          <li className='mb-2 md:mb-0 right'>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li className='mb-2 md:mb-0 right'>
            <Link to='/login'>Register/Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
