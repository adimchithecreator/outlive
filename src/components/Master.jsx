import React from 'react';
import master from './images/master.png'

const Master = () => {
  return (
    <div className='bg-black mt-32 lg:p-5 flex flex-col md:flex-row'>
         <div className='w-full  md:hidden  lg:w-1/2 '>
    <img src={master} alt="Happy by Manuel Cetina" />
    </div>
        <div className='md:w-1/2 w-full p-5 text-white  '>
    <h2 className='text-5xl lg:p-12'>Its Master Kush's World. We just live in it!</h2>
    <p></p>
    </div>
    <div className='w-full hidden md:block lg:blovk lg:w-1/2 '>
    <img src={master} alt="Happy by Manuel Cetina" />
    </div>
    </div>
  )
}

export default Master