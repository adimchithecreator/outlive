import React from 'react';
import { Tab, Disclosure } from '@headlessui/react';
import jack from './images/jack.png';
import bong from './images/bong.png';
import gas from './images/gas.png';

const Table = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-12"> Meet the Team</h1>
       <Tab.Group >
      <Tab.List  className='flex justify-around text-white  bg-secondary'>
        <Tab className= 'rounded-lg ui-selected:px-10 md:px-20  px-5 py-2.5 ui-selected:rounded-xl hover:bg-primary/50 hover:text-primary ui-selected:text-secondary  ui-selected:bg-white'>Tab 1</Tab>
        <Tab className='  px-5 ui-selected:px-10 md:px-20 rounded-lg py-2.5 ui-selected:rounded-xl ui-selected:text-secondary hover:bg-primary/50 hover:text-primary ui-selected:bg-primary'>Miss Bong</Tab>
        <Tab  className= 'rounded-lg md:px-20 ui-selected:px-10 px-5 py-2.5 ui-selected:rounded-xl ui-selected:text-secondary hover:bg-primary/50 hover:text-primary ui-selected:bg-primary'>Jack</Tab>
      </Tab.List>
      <Tab.Panels  className='flex justify-around'>
      <Tab.Panel> <img src={gas}/> </Tab.Panel>
        <Tab.Panel> <img src={bong} alt="pink bong illustration" /> 
       
        </Tab.Panel>
        <Tab.Panel> <img src={jack}/></Tab.Panel>
       
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

export default Table