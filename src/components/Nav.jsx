import React from 'react';
import { motion } from "framer-motion";

const Nav = () => {
  return (
   <nav className=' flex justify-around mx-auto w-full mt-6  text-primary'>
    <a className="   md:text-center font-extrabold lg:text-xl" href="#">OUTLIVE</a>
  
      <div>
  <a href="#" className='md:text-center'>Home</a>
  </div>
  <div>
  <a href="#"className='   md:text-center ' >Services</a>
  </div>
  <div>
  <a href="#"className='   md:text-center' >Products</a>
  </div>
  <div>
  <a href="#"className='   md:text-center' >Contact</a>
  </div>
  <div className='  px-5 '>
  <a href="#"className=' md:text-center' >Get The App</a>
  </div>
 
   </nav>
  )
}

export default Nav