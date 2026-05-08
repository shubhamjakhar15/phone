import React from 'react'
import {vr,gaming,headphones,mac} from '../../../assets/images'
import Button from './Button'
const Display = () => {
  return (
    <div className='lg:flex lg:h-150'>
        <div className='w-full'>
          <div className='flex h-1/2 overflow-hidden'>
            <img className='ml-[-9vw] w-full md:object-cover' src={gaming} />
            <div className='flex flex-col justify-center' >
              <h1 className='font-medium text-5xl leading-24'>Playstation 5</h1>
              <p className='text-[#909090] font-medium w-5/6'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
          </div>
          <div className='flex h-1/2'>
            <div className='flex w-1/2 bg-[#EDEDED] '>
              <img className='ml-[-10vw]' src={headphones} />
              <div className='flex flex-col justify-center px-12' >
                <h1 className='font-light text-[29px] w-1/4'>Apple AirPods <span className='font-medium'>Max</span></h1>
                <p className='text-[#909090]'>Computational audio. Listen, it's powerful</p>
              </div>
            </div>
            <div className='flex w-1/2 bg-[#353535] overflow-hidden items-center'>
              <img className='ml-[-13vw] lg:h-2/3 transform scale-x-[-1] ' src={vr} />
              <div className='flex flex-col justify-center px-12' >
                <h1 className=' text-white font-light text-[29px]'>Apple Vision <span className='font-medium'>Pro</span></h1>
                <p className='text-[#909090] w-6/5'>An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-[#EDEDED] flex'>
          <div className='w-1/2 my-36 mx-14'>
            <h1 className='font-thin text-[64px] leading-14 '>Macbook <span className='font-medium block'>Air</span></h1>
            <p className='text-[#909090] font-medium py-4 w-[105%]'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <Button color='black' />
          </div>
          <div className='flex items-center'>
            <img src={mac} className='lg:h-6/7 hidden md:block  lg:ml-[0px]' />
          </div>
        </div>
    </div>
  )
}

export default Display