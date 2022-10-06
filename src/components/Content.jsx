import React from 'react'
import yum from './images/yum.png'
import thc from './images/thc.png'
import indi from './images/indi.png'
import rose from './images/rose.png'
import './styles/Content.css'
import { Disclosure } from '@headlessui/react'

const Content = () => {
  return (
    <div className=' grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-12'>
        <div className='weed  drop-shadow-2xl'>
<img src={yum} alt="" className='mx-auto mt-24' />


</div>
<div className='weed drop-shadow-2xl'>
<img src={rose} alt=""  />

</div>
<div className='weed drop-shadow-2xl'>
<img src={thc} alt="" className=' mt-24' />

</div>
<div className='weed drop-shadow-2xl'>
<img src={indi} alt="" className=' mt-24'  />

</div>
    </div>
  )
}

export default Content