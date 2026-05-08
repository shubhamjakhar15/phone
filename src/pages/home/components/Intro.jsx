import React from 'react'
import {phones} from '../../../assets/images'
import Button from './Button'

const Intro = () => {
  return (
    <>
      <div className='overflow-hidden flex flex-col md:flex-row bg-[#211C24] h-auto md:h-158 w-full items-center md:items-start text-center md:text-left px-6 sm:px-10 md:px-0'>
        
        <div className='mt-16 sm:mt-20 md:mt-44 ml-0 md:ml-20 lg:ml-44'>
            <p className='text-[#7a777c] font-bold text-[18px] sm:text-[22px] md:text-[25px]'>
              Pro.Beyond.
            </p>

            <h1 className='text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-extralight leading-tight'>
              IPhone 14 <span className='font-semibold'>Pro</span>
            </h1>

            <p className='text-[#909090] font-medium text-[14px] sm:text-[16px] md:text-[18px] mt-2'>
              Created to change everything for the better. For everyone
            </p>

            <div className='mt-4 flex justify-center md:justify-start'>
              <Button color='white' />
            </div>
        </div> 

        <div className='w-64 sm:w-80 md:w-96 lg:w-[26rem] h-auto overflow-hidden mt-10 md:mt-20 ml-0 md:ml-10 lg:ml-44 flex justify-center'>
            <img src={phones} className='w-full' />
        </div>

      </div>
    </>
  )
}

export default Intro
