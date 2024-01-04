import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video 
            src={beachVid} className='w-full h-full object-cover' 
                autoPlay 
                loop 
                muted
        />

        <div className='top-0 w-full h-full left-0 absolute bg-gray-900/40'></div>

        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>First Class Travel</h1>
            <h2 className='py-3'>Top 1% locations Worldwide</h2>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'>
                <div className=''>
                    <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type="text" placeholder='Search Destinations' />
                </div>
                <div>
                    <button>
                        <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}/>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero