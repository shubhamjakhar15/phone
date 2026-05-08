import React from 'react'
import {sale} from '../../../assets/images'
import Button from './Button'
const Summer = () => {
  return (
    <div style={{backgroundImage:`url(${sale})`}} className='h-md bg-cover flex flex-col items-center justify-center pt-36 pb-24'>
       <h1 className='text-white text-4xl md:text-7xl font-thin leading-24'>Big Summer <span className='font-medium'>Sale</span></h1>
       <p className='text-[#787878] mb-6 text-[12px] md:text-[16px]'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
       <Button color='white' />
    </div>
  )
}

export default Summer