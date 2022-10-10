import React from 'react'
import flower from './images/flower.png'
import { motion, useScroll } from 'framer-motion';


const Card = () => {
  return (
    <div>
       <div className='bg-black mt-32 lg:p-5 flex flex-col md:flex-row'>
         <div className='w-full md:w-1/2 '>
    <motion.img src={flower} alt="Happy by Manuel Cetina" 
    initial={{ opacity: 0.1, scale: 0.5, y:'-100vw' }}
     animate={{ opacity: 1, scale: 1, y: 0 }}
     transition={{
       duration: 1,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
     }}/>
    </div>
        <motion.div className='md:w-1/2 mt-16 lg:p-12 w-full p-5 text-white'
        initial={{ opacity: 0.1, scale: 0.5, x:'100vw' }}
         animate={{ opacity: 1, scale: 1, x: 0 }}
         transition={{
           duration: 1,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01]
         }}>
    <h2 className='text-5xl '>You know what time is it!!!</h2>
    {/* From flowery.co */}
    <p className=' note py-10'>
    We’re here to shed light on the often confusing world of cannabis. Because we believe that this incredible plant holds the potential to not only help relieve chronic medical issues, but also be a part of one’s everyday wellness routine. No matter what effect you’re after, we are dedicated to helping you unlock all the benefits the cannabis plant can provide.
</p>
    </motion.div>
  
    </div>
    </div>
  )
}

export default Card