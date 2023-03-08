import React from 'react'
import Ad from '../Assets/Ad.jpg'
import Ad_2 from '../Assets/Ad_2.jpg'

const Advertisement = () => {
  return (
    <div className='p-2'>
      <div className='py-2'> <img src={Ad} alt="Advertisement" height="350px" width="350px"/> </div>
      <div className='py-2'> <img src={Ad_2} alt="Advertisement" height="350px" width="350px"/> </div>  
    </div>
  )
}

export default Advertisement