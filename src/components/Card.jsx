import React from 'react'
import flower from './images/flower.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';



const Card = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
const animation = useAnimation()

  useEffect(() => {
   if (inView){
    animation.start({
      x: 0,
      transition:{
        type: 'spring', duration: 1, bounce: 0.4, delay: 0.5, 
        ease: [0, 0.71, 0.2, 1.01],
        scale: 1,
      }
    });
   }
   if (!inView){
    animation.start({
      x: '-100vw',
      
    })
   }
  } );

  return (
    <section ref={ref} className='bg-black ' >
       <motion.div className='mt-32 lg:p-5 flex flex-col md:flex-row'  
        animate={animation}>
         <div  className='w-full md:w-1/2 '>
    <motion.img src={flower} alt="Happy by Manuel Cetina" 

   
    
     />
    </div>
        <div className='md:w-1/2 mt-16 lg:p-12 w-full p-5 text-white'>
    <h2 className='text-5xl '>You know what time is it!!!</h2>
    {/* From flowery.co */}
    <p className=' note py-10'>
    We’re here to shed light on the often confusing world of cannabis. Because we believe that this incredible plant holds the potential to not only help relieve chronic medical issues, but also be a part of one’s everyday wellness routine. No matter what effect you’re after, we are dedicated to helping you unlock all the benefits the cannabis plant can provide.
</p>
    </div>
  
    </motion.div>
    </section>
  )
}

export default Card