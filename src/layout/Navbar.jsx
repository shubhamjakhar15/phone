import React, { useState } from 'react'
import { cart, favorites, logo, search, user } from "../assets/images";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='bg-white w-full flex justify-between items-center px-6 md:px-10 lg:px-16 py-5 lg:py-7'>

        <div>
          <img src={logo} />
        </div>

        <div className='hidden lg:block'>
          <input 
            type="text" 
            placeholder='🔍︎ Search' 
            className='bg-[#f5f5f5] h-14 w-93 rounded-md px-5' 
          />
        </div>

        <div className='hidden lg:block'>
          <ul className='flex gap-10 text-[#B5B5B5]'>
            <li className='text-black cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact Us</li>
            <li className='cursor-pointer'>Blog</li>
          </ul>
        </div>

        <div className='hidden lg:block'>
          <ul className='flex gap-10'>
            <li><img src={favorites} className='cursor-pointer' /></li>
            <li><img src={cart} className='cursor-pointer' /></li>
            <li><img src={user} className='cursor-pointer' /></li>
          </ul>
        </div>

        <div className='lg:hidden cursor-pointer' onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>

      </nav>

      {open && (
        <div className='lg:hidden bg-white px-6 py-5 space-y-5 shadow-md'>

          <input 
            type="text" 
            placeholder='🔍︎ Search' 
            className='bg-[#f5f5f5] h-12 w-full rounded-md px-4' 
          />

          <ul className='flex flex-col gap-4 text-[#B5B5B5]'>
            <li className='text-black cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact Us</li>
            <li className='cursor-pointer'>Blog</li>
          </ul>

          <div className='flex gap-6'>
            <img src={favorites} className='cursor-pointer' />
            <img src={cart} className='cursor-pointer' />
            <img src={user} className='cursor-pointer' />
          </div>

        </div>
      )}
    </>
  )
}

export default Navbar