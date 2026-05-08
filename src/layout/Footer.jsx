import React from 'react'
import {twitter,instagram,tiktok,facebook,cyber} from '../assets/images';

const Footer = () => {
  return (
    <>
      <footer className='bg-black p-10 sm:p-16 md:p-24 lg:p-36'>
        
        <div className='flex flex-col sm:flex-col md:flex-row justify-evenly gap-10 md:gap-0 text-center md:text-left'>
            
            <div className='flex flex-col items-center md:items-start'>
                <img src={cyber} />
                <p className='text-[#CFCFCF] w-full sm:w-80 md:w-96 py-6'>
                  We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                </p>
            </div>

            <div>
                <h1 className='text-white'>Services</h1>
                <ul className='text-[#CFCFCF] py-6 gap-4 sm:gap-5 md:gap-6 flex flex-col'>
                    <li className='cursor-pointer'>Bonus program</li>
                    <li className='cursor-pointer'>Gift cards</li>
                    <li className='cursor-pointer'>Credit and payment</li>
                    <li className='cursor-pointer'>Service contracts</li>
                    <li className='cursor-pointer'>Non-cash account</li>
                    <li className='cursor-pointer'>Payment</li>
                </ul>
            </div>

            <div>
                <h1 className='text-white'>Assistance to the buyer</h1>
                <ul className='text-[#CFCFCF] py-6 gap-4 sm:gap-5 md:gap-6 flex flex-col'>
                    <li className='cursor-pointer'>Find an order</li>
                    <li className='cursor-pointer'>Terms of delivery</li>
                    <li className='cursor-pointer'>Exchange and return of goods</li>
                    <li className='cursor-pointer'>Guarantee</li>
                    <li className='cursor-pointer'>Frequently asked questions</li>
                    <li className='cursor-pointer'>Terms of use of the site</li>
                </ul>
            </div>

        </div>

        <div className='flex justify-center md:justify-start gap-6 sm:gap-8 px-0 sm:px-10 md:px-32 py-6'>
            <img src={twitter} className='cursor-pointer' />
            <img src={facebook} className='cursor-pointer' />
            <img src={tiktok} className='cursor-pointer' />
            <img src={instagram} className='cursor-pointer' />
        </div>

      </footer>
    </>
  )
}

export default Footer