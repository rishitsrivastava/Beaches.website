import React from 'react'
import { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaInstagram, FaPinterest, FaTwitter, FaYoutube , FaFacebookF} from 'react-icons/fa'


export default function Navbar() {
  const [nav, setnav] = useState(false);
  const [logo, setlogo] = useState(false)


  const handlenav = () => {
    setnav(!nav);
    setlogo(!logo);
  };

  return (
    <div className='flex text-white justify-between items-center h-20 px-4 w-full z-10 absolute'>
      <div>
        <h1 onClick={handlenav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
      </div>
      <ul className='hidden md:flex '>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Destinations</li>
        <li className='cursor-pointer'>Travel</li>
        <li className='cursor-pointer'>View</li>
        <li className='cursor-pointer'>Book</li>
      </ul>
      <div className='hidden md:flex cursor-pointer'>
        <BsPerson className='mr-3' size={20}/>
        <BiSearch size={20}/>
      </div>


      {/* hamburger */}

      <div onClick={handlenav} className='md:hidden z-10'>
        { nav ? <AiOutlineClose size={20} className='text-black '/> : <HiOutlineMenuAlt4 size={20} />}
        
      </div>
      
      {/* mobile menu dropdown */}
      <div className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}  onClick={handlenav}>
        <ul>
          <h1>BEACHES.</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destination</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebookF className='icon'/>
            <FaTwitter className='icon'/>
            <FaInstagram className='icon'/>
            <FaPinterest className='icon'/>
            <FaYoutube className='icon'/>
          </div>
        </ul>
      </div>

    </div>
  );
};
