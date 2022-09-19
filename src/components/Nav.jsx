import React from 'react'

const Nav = () => {
  return (
   <nav className=' w-full '>
    <a className=" w-1/5 float-none  md:float-left text-left block p-12 md:text-center font-extrabold lg:text-xl" href="#">OUTLIVE</a>
  <a href="#" className='w-1/5 float-none  md:float-left text-left block p-12 md:text-center'>Home</a>
  <a href="#"className='w-1/5 float-none  md:float-left text-left block p-12 md:text-center ' >Services</a>
  <a href="#"className='w-1/5 float-none  md:float-left text-left block p-12 md:text-center' >Contact</a>
  <a href="#"className='w-1/5 float-none  md:float-left text-left block p-12 md:text-center' >Get The App</a>
   </nav>
  )
}

export default Nav