import React from 'react';
import simon from './images/simon.jpeg'

const Coming = () => {
  return (
    <div className=' grid md:grid-cols-2 text-white '>
<div className='bg-black  text-7xl px-5 py-32'>
    Coming soon to a dispensary near you!
</div>

    <img src={simon} alt="" className=' md:h-full' />
 
    </div>
  )
}

export default Coming