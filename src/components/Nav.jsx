import React from 'react'

const Nav = () => {
  return (
   <nav className=' flex justify-around mx-auto w-full mt-6  text-white'>
    <a className=" w-1/5  md:text-center font-extrabold lg:text-xl" href="#">OUTLIVE</a>
  
      <div>
  <a href="#" className='w-1/5 md:text-center'>Home</a>
  </div>
  <div>
  <a href="#"className='w-1/5   md:text-center ' >Services</a>
  </div>
  <div>
  <a href="#"className='w-1/5     md:text-center' >Contact</a>
  </div>
  <div className=' bg-primary px-5 py-2'>
  <a href="#"className='w-1/5   md:text-center' >Get The App</a>
  </div>
 
   </nav>
  )
}

export default Nav