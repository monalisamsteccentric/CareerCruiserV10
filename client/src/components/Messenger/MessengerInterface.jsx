import React, { useState } from 'react'
import Inbox from './Inbox'
import Compose from './Compose'
import Sent from './Sent'
import Navigation from '../Navigation'

const MessengerInterface = () => {
  const [currentComponent, setCurrentComponent] = useState('inbox')

  const renderComponent = () => {
    switch (currentComponent) {
      case 'compose':
        return <Compose />
      case 'sent':
        return <Sent />
      default:
        return <Inbox />
    }
  }
  if(!localStorage.getItem('username')){
    return <h1>Please Login to Continue...</h1>
}

  return (
    <div>
      <Navigation/>
    <div className='h-screen'>
      <div className='flex flex-col lg:flex-row justify-around h-full p-4 lg:gap-4 md:gap-0 bg-gray-100'>
        <div className='border-2 border-black-400 rounded-lg lg:h-96 lg:w-1/6 p-6 flex flex-col gap-2 bg-white'>
          <div className={`hover:cursor-pointer ${currentComponent === 'compose' ? 'font-bold' : ''}`} onClick={() => setCurrentComponent('compose')}>Compose</div>
          <div className={`hover:cursor-pointer ${currentComponent === 'inbox' ? 'font-bold' : ''}`} onClick={() => setCurrentComponent('inbox')}>Inbox</div>
          <div className={`hover:cursor-pointer ${currentComponent === 'sent' ? 'font-bold' : ''}`} onClick={() => setCurrentComponent('sent')}>Sent</div>
        </div>
        <div className='border-2 border-black-400 rounded-lg lg:h-96 lg:w-5/6 p-6 bg-white'>{renderComponent()}</div>
      </div>
    </div>
    </div>
  )
}

export default MessengerInterface
