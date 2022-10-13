import React from 'react';
import simon from './images/simon.jpeg'

const Coming = () => {
  return (
    <div className='  flex flex-col md:flex-row  text-white '>
<div className='bg-black md:w-1/2 text-7xl px-5 py-32'>
    Coming soon to a dispensary near you!
</div>
   <div className=" md:w-1/2">
    <img src={simon} alt="" className='' />
   </div>
    </div>
  )
}

export default Coming