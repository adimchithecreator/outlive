import React from 'react';
import Master from "./Master";
import Card from './Card';
import holi from './images/holi.png'
import Content from './Content';
import rob from './images/rob.png'
import { Disclosure } from '@headlessui/react'
import Carousel from './Carousel';
import Table from './Table';
import Coming from './Coming';
import './styles/Main.css'


const main = () => {
  return (
    <>
 <div className='flex flex-col relative m-auto'>
<div className=' info'>
  <h1 className=' text-2xl px-12 md:text-5xl tracking-wider  capitalize font-bold text-center lg:px-36 pt-20 lg:pt-36 text-secondary '>The grass is always green </h1>
  <p className='text-center  p-5 text-xl '>High Grade. Indica. Sativa. Hybrid.</p>
  
</div>
<div className=' shadow-2xl'>
<img src={holi} alt="" className=' hidden drop-shadow-2xl w-1/5 absolute md:top-28 md:block   animate-bounce top-16' />

<img src={rob} alt="" className='md:block hidden drop-shadow-2xl w-1/4 absolute lg:top-32 md:top-32 animate-bounce  top-16 right-1  '  />

 
</div>
 </div>
 <div className="cta text-center mx-auto bg-white w-48 p-2  rounded-lg">

 <Disclosure  >
      <Disclosure.Button className="bg-secondary p-3  text-primary w-40 rounded-lg ">
      Coming soon
      </Disclosure.Button>
      <Disclosure.Panel className="pt-2">
    Highest quality CBD
      </Disclosure.Panel>
    </Disclosure>
    </div>
<Master/>
<Content/>
<Card/>
<Table/>
<Coming/>
<Carousel/>
    </>
  )
}

export default main