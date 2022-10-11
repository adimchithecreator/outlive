import {React, useEffect} from 'react';
import master from './images/master.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './styles/Master.css';


const Master = () => {
  const {ref, inView} = useInView({
    threshold: 0.2
  });
const animation = useAnimation()

  useEffect(() => {
   if (inView){
    animation.start({
      y: 0,
      transition:{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        opacity: 0
      }
    });
   }
   if (!inView){
    animation.start({
      y: '-500vh',
    
    })
   }
  } );

  return (
    <div ref={ref} className='bg-black'>
    <motion.div className=' mt-32 lg:p-5 flex flex-col md:flex-row'  animate={animation}>
         <div   className='w-full  md:hidden '>
    <img src={master} alt="Happy by Manuel Cetina" />
    </div>
   
        <div className='md:w-1/2 lg:p-12 w-full p-5 text-white  '>
    <h2 className='text-5xl '>Its Master Kush's World. We just live in it!</h2>
    {/* From flowery.co */}
    <p className=' note py-10'>F%$k corporate cannabis, that’s not us. We had to fight for our existence from the first moment we decided to pursue an MMTC license, and after years of litigation with the state, we were finally cleared for take off and able to spread our wings. We’re all consumers, and that familiarity with the plant, the community and the struggle over the years is close to our hearts. we also understand the culture and appreciate the need for transparency in this industry.</p>
    </div>
    <div className=' hidden md:block md:mt-12 w-1/2 '>
    <motion.img src={master} alt="Happy by Manuel Cetina"    initial={{ opacity: 0.1, scale: 0.5, y:'-100vw' }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} />
    </div>
    </motion.div>
    </div>
  )
}

export default Master