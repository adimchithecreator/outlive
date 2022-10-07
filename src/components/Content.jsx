import React from 'react'
import yum from './images/yum.png'
import thc from './images/thc.png'
import indi from './images/indi.png'
import rose from './images/rose.png'
import './styles/Content.css'
import { Disclosure } from '@headlessui/react'
import { useState } from 'react'

const Content = () => {

  return (
    
    <div className='relative grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-12'>
        <div className='weed  drop-shadow-2xl'>
<img src={yum} alt="" className='mx-auto mt-24' />
<div className="  text-white mx-5 mb-5 rounded-lg px-3 bg-green-900 w-48">
<Disclosure>
      <Disclosure.Button className="py-2">
      <div className='flex items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 mr-1 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

<span className=' tracking-widest'>Mary joe</span>
  </div>
      </Disclosure.Button>
      <Disclosure.Panel className="">
      <span>THC - 18% || CBD - 3%  </span>
      </Disclosure.Panel>
    </Disclosure>
    </div>
</div>
<div className='weed drop-shadow-2xl'>
<img src={rose} alt="" className=' mt-20'  />
<div className="text-white mx-5 mb-5 rounded-lg px-3 bg-green-900 w-48">
<Disclosure>
      <Disclosure.Button className="py-2">
      <div className='flex items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 mr-1 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

<span className=' tracking-widest'>Wedding cake </span>
  </div>
      </Disclosure.Button>
      <Disclosure.Panel className="">
      <span>THC - 10% || CBD - 12% </span>
      </Disclosure.Panel>
    </Disclosure>
    </div>
</div>
<div className='weed drop-shadow-2xl'>
<img src={thc} alt="" className=' mt-20' />
<div className="text-white mx-5 mb-5 rounded-lg px-3 bg-green-900 w-48">
<Disclosure>
      <Disclosure.Button className="py-2">
      <div className='flex items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 mr-1 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
<span className=' tracking-widest'>Krabs</span>
  </div>
      </Disclosure.Button>
      <Disclosure.Panel className="">
      <span>THC - 20% || CBD - 3% </span>
      </Disclosure.Panel>
    </Disclosure>
    </div>
</div>

<div className='weed drop-shadow-2xl'>
<img src={indi} alt="" className=''  />
<div className="text-white mx-5 mb-5 rounded-lg px-3 bg-green-900 w-48">
<Disclosure>
      <Disclosure.Button className="py-2">
      <div className='flex items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 mr-1 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
<span className=' tracking-widest'>Snell</span>
  </div>
      </Disclosure.Button>
      <Disclosure.Panel className="">
      <span>THC - 18% </span>
      </Disclosure.Panel>
    </Disclosure>
    </div>
</div>

    </div>
  )
}

export default Content