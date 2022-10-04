import React from 'react';
import matt from '../images/matthew.png'

const main = () => {
  return (
    <>
 <div className='flex flex-col m-auto'>
<div className=''>
  <h1 className=' text-2xl px-12 md:text-5xl tracking-wider  capitalize font-bold text-center lg:px-36 pt-20 lg:pt-36 '>Rewriting treatment through user friendly alternative medicine. </h1>
  <p className='text-center p-5 text-xl'>High Grade. Indica. Sativa. Hybrid.</p>
</div>
<div className=''>
</div>
 </div>
 <div className="cta text-center mx-auto bg-zinc-200 w-40 p-2  rounded-lg">
  <button className='bg-black p-2 text-white rounded-lg w-36'>
    Shop strains
  </button>
  <p className='pt-2'>Cannabis delivery</p>
 </div>
 <div className="panels  mx-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
  <div className=" shadow p-4">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, eaque corrupti maxime eius sit qui! Quisquam labore ipsa officiis, quidem ab minus itaque, dolore ea modi illo commodi quo odit.
  </div>
  <div className=" shadow p-4">
  <img src={matt} alt="" />
  </div>
  <div className=" shadow p-4">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, eaque corrupti maxime eius sit qui! Quisquam labore ipsa officiis, quidem ab minus itaque, dolore ea modi illo commodi quo odit.
  </div>
  <div className=" shadow p-4">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, eaque corrupti maxime eius sit qui! Quisquam labore ipsa officiis, quidem ab minus itaque, dolore ea modi illo commodi quo odit.
  </div>
 </div>
    </>
  )
}

export default main