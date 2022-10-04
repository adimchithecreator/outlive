import React from 'react';
import matt from '../images/matthew.png'
import { Disclosure } from '@headlessui/react'
import Panel from './Panel';
import '../styles/Main.css'

const main = () => {
  return (
    <>
 <div className='flex flex-col m-auto'>
<div className=' info'>
  <h1 className=' text-2xl px-12 md:text-5xl tracking-wider  capitalize font-bold text-center lg:px-36 pt-20 lg:pt-36 '>Rewriting treatment through user friendly alternative medicine. </h1>
  <p className='text-center  p-5 text-xl'>High Grade. Indica. Sativa. Hybrid.</p>
</div>
<div className=''>
</div>
 </div>
 <div className="cta text-center mx-auto bg-zinc-200 w-48 p-2  rounded-lg">

 <Disclosure  >
      <Disclosure.Button className="bg-black p-3  text-white w-40 rounded-lg ">
      Shop strains
      </Disclosure.Button>
      <Disclosure.Panel className="pt-2">
      Free cannabis delivery
      </Disclosure.Panel>
    </Disclosure>
    </div>
 <Panel/>
    </>
  )
}

export default main