import React from 'react';
import master from './images/master.png'
import { motion, useScroll } from 'framer-motion';
import './styles/Master.css'
const Master = () => {
  return (
    <div className='bg-black mt-32 lg:p-5 flex flex-col md:flex-row'>
         <div className='w-full  md:hidden '>
    <img src={master} alt="Happy by Manuel Cetina" />
    </div>
        <motion.div className='md:w-1/2 lg:p-12 w-full p-5 text-white  '
      initial={{ opacity: 0.1, scale: 0.5, x:'-100vw' }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
    <h2 className='text-5xl '>Its Master Kush's World. We just live in it!</h2>
    {/* From flowery.co */}
    <p className=' note py-10'>F%$k corporate cannabis, that’s not us. We had to fight for our existence from the first moment we decided to pursue an MMTC license, and after years of litigation with the state, we were finally cleared for take off and able to spread our wings. We’re all consumers, and that familiarity with the plant, the community and the struggle over the years is close to our hearts. we also understand the culture and appreciate the need for transparency in this industry.</p>
    </motion.div>
    <div className=' hidden md:block md:mt-12 w-1/2 '>
    <img src={master} alt="Happy by Manuel Cetina" />
    </div>
    </div>
  )
}

export default Master