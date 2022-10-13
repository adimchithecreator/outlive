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
        <Tab className= '  ui-selected:ring-secondary/50 ui-selected:ring-inset rounded-lg ui-selected:px-10 md:px-20  px-5 py-2.5 ui-selected:rounded-xl hover:bg-primary/50 hover:text-primary ui-selected:text-secondary  ui-selected:bg-primary'> Mr Jamal</Tab>
        <Tab className='  ui-selected:ring-secondary/50 ui-selected:ring-inset  px-5 ui-selected:px-10 md:px-20 rounded-lg py-2.5 ui-selected:rounded-xl ui-selected:text-secondary hover:bg-primary/50 hover:text-primary ui-selected:bg-primary'>Miss Bong</Tab>
        <Tab  className= ' ui-selected:ring-secondary/50 ui-selected:ring-inset rounded-lg md:px-20 ui-selected:px-10 px-5 py-2.5 ui-selected:rounded-xl ui-selected:text-secondary hover:bg-primary/50 hover:text-primary ui-selected:bg-primary'>Dr. Jack</Tab>
      </Tab.List>
      <Tab.Panels  className='flex justify-around'>
      <Tab.Panel className=' drop-shadow-2xl'> <img src={gas}/>
      <div className=" text-center mb-4"> <h2>Resident Farmer - Mr jamal </h2>
        <ul className=' mx-3 list-disc list-inside'> 
          <li> Grows high grade indica, sativa and hybrid.</li>
          <li>No 1 supplier of raw materials to leading pharmaceutical companies.</li>
<li>Always high.</li>
            </ul>
             </div>
       </Tab.Panel>
        <Tab.Panel className=' drop-shadow-2xl'> <img src={bong} alt="pink bong illustration" /> 
        <div className=" text-center mb-4"> <h2>Resident Baddie - Miss Bong </h2>
        <ul className=' mx-3 list-disc list-inside'> 
          <li> Dispensary General Manager, Uplive</li>
          <li>Inventory  specialist</li>
<li>Life of the party</li>
            </ul>
             </div>
        </Tab.Panel>
        <Tab.Panel> <img src={jack}/>
        <div className=" text-center mb-4"> 
        <h2>Resident Doctor - Doctor Jack </h2>
        <ul className=' mx-3 list-disc list-inside'> 
          <li> 7 years+ experience in the alternative medicine industry</li>
          <li>2x winner of the Nobel prize for trips</li>
<li>Great hair</li>
            </ul>
             </div>
        </Tab.Panel>
       
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

export default Table