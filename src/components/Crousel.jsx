import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

const Crousel = () => {

    const length = sliderData.length;
    const [slide, setslide] = useState(0);

    const prevSlide = () => {
        setslide(slide === length - 1 ? 0 : slide + 1 )
    }

    const nextSlide = () => {
        setslide(slide === 0 ? length - 1 : slide - 1 )
    }

  return (
    <div className='max-w-[1240px] mx-auto p-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill 
            className='text-white left-8 absolute top-[50%] text-3xl cursor-pointer' 
            onClick={prevSlide} />
        <BsArrowRightSquareFill
            className='text-white right-8 absolute top-[50%] text-3xl cursor-pointer' 
            onClick={nextSlide} />    
        {sliderData.map((item, index) => (
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (
                    <img className='w-full rounded-md' src={item.url} alt="/" />
                )}
            </div>
        ))}
    </div>
  );
};

export default Crousel