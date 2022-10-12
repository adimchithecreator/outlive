import React from 'react';
import yum from './images/yum.png';
import thc from './images/thc.png';
import indi from './images/indi.png';
import rose from './images/rose.png';
import './styles/Content.css';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Content = () => {

  return (
    
    <div className='relative grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-12'>
        <motion.div className='weed  drop-shadow-2xl' whileHover={{ scale: 1.1 }}>
<img src={yum} alt="" className='mx-auto mt-24' />
<div className="  text-white mx-5 mb-5 rounded-lg px-3 bg-green-900 w-48">
<Disclosure>
      <Disclosure.Button className="py-2">
      <div className='flex items-center'>
<InformationCircleIcon className='w-6 mr-1 h-6'/>

<span className=' tracking-widest'>Mary joe</span>
  </div>
      </Disclosure.Button>
      <Disclosure.Panel className="">
      <span>THC - 18% || CBD - 3%  </span>
      </Disclosure.Panel>
    </Disclosure>
    </div>
</motion.div>
<motion.div className='weed drop-shadow-2xl' whileHover={{ scale: 1.1 }} >
<img src={rose} alt="" className=' mt-20'  />
<div className="text-white mx-5 mb-5 rounded-lg px-3 bg-green-900 w-48">
<Disclosure>
      <Disclosure.Button className="py-2">
      <div className='flex items-center'>
      <InformationCircleIcon className='w-6 mr-1 h-6'/>

<span className=' tracking-widest'>Wedding cake </span>
  </div>
      </Disclosure.Button>
      <Disclosure.Panel className="">
      <span>THC - 10% || CBD - 12% </span>
      </Disclosure.Panel>
    </Disclosure>
    </div>
</motion.div>
<motion.div className='weed drop-shadow-2xl' whileHover={{ scale: 1.1 }}>
<img src={thc} alt="" className=' mt-20' />
<div className="text-white mx-5 mb-5 rounded-lg px-3 bg-green-900 w-48">
<Disclosure>
      <Disclosure.Button className="py-2">
      <div className='flex items-center'>
      <InformationCircleIcon className='w-6 mr-1 h-6'/>
<span className=' tracking-widest'>Krabs</span>
  </div>
      </Disclosure.Button>
      <Disclosure.Panel className="">
      <span>THC - 20% || CBD - 3% </span>
      </Disclosure.Panel>
    </Disclosure>
    </div>
</motion.div>

<motion.div className='weed drop-shadow-2xl' whileHover={{ scale: 1.1 }}>
<img src={indi} alt="" className=''  />
<div className="text-white mx-5 mb-5 rounded-lg px-3 bg-green-900 w-48">
<Disclosure>
      <Disclosure.Button className="py-2">
      <div className='flex items-center'>

      <InformationCircleIcon className='w-6 mr-1 h-6'/>
<span className=' tracking-widest'>Snell</span>
  </div>
      </Disclosure.Button>
      <Disclosure.Panel className="">
      <span>THC - 8% || CBD - 12% </span>
      </Disclosure.Panel>
    </Disclosure>
    </div>
</motion.div>

    </div>
  )
}

export default Content