import React from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react';
import bong from './images/bong.png';
import gas from './images/gas.png'
import jack from './images/jack.png'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Table = () => {
    let [categories] = useState({
        Recent: [
          {
           image: gas,
           title: 'Uncle '
          },
        
        ],
        Popular: [
          {
            title : 'Resident Baddie',
           image: bong,
          },
          
        ],
        Trending: [
          {
          
           image: jack,
          },
         
        ],
      })
      return (
        <>
        <h2 className="text-3xl bg-white"> Meet the Team</h2>
        <div className=" w-full px-12 bg-white  sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames('rounded-xl bg-white p-3', 'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2' )}
                >
                
                    {posts.map((post) => (
                    
                   
                       
                        <img src={post.image} alt="hy" />
 
                 
             
                    ))}
      
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        </>
      )
    }
export default Table