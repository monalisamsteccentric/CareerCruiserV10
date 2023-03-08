import React from 'react'
import Advertisement from './Advertisement'
import FilterComponent from './FilterComponent'
import Jobs from './Jobs'
import Navigation from './Navigation'


const UserInterface = () => {
  return (
    <>
    <Navigation/>
      <div className='flex flex-col md:flex-row justify-between bg-gray-100 p-2'>
        <div className='md:border-2 lg:w-1/4 text-xs md:border-black-400 md:rounded-lg md:h-full md:w-60 bg-white mb-2 md:mb-0 md:mr-2'>
          <FilterComponent />
        </div>
        <div className='flex-grow lg:w-2/4'>
          <Jobs />
        </div>
        <div className='lg:w-1/4 md:border-2 md:border-black-400 md:h-5/6 md:rounded-lg bg-white'>
          <Advertisement />
        </div>
      </div>
    </>
  )
}

export default UserInterface
