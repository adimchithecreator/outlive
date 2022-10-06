import React from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react';
import bong from './images/bong.png';
import gas from './images/gas.png'
import edd from './images/edd.png'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Table = () => {
    let [categories] = useState({
        Recent: [
          {
           image: gas,
          },
        
        ],
        Popular: [
          {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            image: bong,
          },
          
        ],
        Trending: [
          {
            id: 1,
            pli: 4,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            image: edd,
          },
         
        ],
      })
      return (
        <div className="w-full max-w-md px-12  sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
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
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.pli}
                        </h3>
                        <img src={post.image} alt="hy" />
 
                        
                        <a
                          href="#"
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                          )}
                        />
                      </li>
                    ))}
                  </ul>
             
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      )
    }
  
    
  


export default Table