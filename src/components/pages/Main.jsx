import React from 'react';
import rob from '../images/rob.png'
import holi from '../images/holi.png'
import { Disclosure } from '@headlessui/react'
import Carousel from './Carousel';
import '../styles/Main.css'


const main = () => {
  return (
    <>
 <div className='flex flex-col relative m-auto'>
<div className=' info'>
  <h1 className=' text-2xl px-12 md:text-5xl tracking-wider  capitalize font-bold text-center lg:px-36 pt-20 lg:pt-36 '>The grass is always green </h1>
  <p className='text-center  p-5 text-xl '>High Grade. Indica. Sativa. Hybrid.</p>
  
</div>
<div className=''>
<img src={holi} alt="" className=' w-1/5 absolute   animate-bounce top-16' />

<img src={rob} alt="" className=' w-1/4 absolute lg:top-32 animate-bounce  top-16 right-1  md:bottom-32'  />

 
</div>
 </div>
 <div className="cta text-center mx-auto bg-zinc-200 w-48 p-2  rounded-lg">

 <Disclosure  >
      <Disclosure.Button className="bg-black p-3  text-white w-40 rounded-lg ">
      Shop strains
      </Disclosure.Button>
      <Disclosure.Panel className="pt-2">
    Highest quality CBD
      </Disclosure.Panel>
    </Disclosure>
    </div>
<Carousel/>
    </>
  )
}

export default main