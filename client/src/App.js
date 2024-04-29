import Register from './components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'

import SearchBar from './components/SearchBar'
import ProfileInterface from './components/getProfile/ProfileInterface'
import MessengerInterface from './components/Messenger/MessengerInterface'
import UserInterface from './components/UserInterface';
import JobFromHomepage from './components/JobFromHomepage'
import JobfromSearchBar from './components/JobfromSearchBar'
import JobPostForm from './components/JobPosting/JobPostForm'
import JobListings from './components/applyforjob/JobListings'

import emailjs from 'emailjs-com';

// Initialize EmailJS
emailjs.init("dhoniyyM-me3nyStA");










const App = () => {


  return (
    <div className='p-2'>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<UserInterface/>}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          
          <Route path='/search' element={<SearchBar />} />
          <Route path='/messages' element={<MessengerInterface/>}/>
           <Route path='/jobhomepage/:jobid' element={<JobFromHomepage/>}/>
           <Route path='/jobsearchbar/:resultid' element={<JobfromSearchBar/>}/>
          <Route path='/profile' element={<ProfileInterface/>}/>
          <Route path='/postajob' element={<JobPostForm/>}/>
          <Route path='/jobapplication' element={<JobListings/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App