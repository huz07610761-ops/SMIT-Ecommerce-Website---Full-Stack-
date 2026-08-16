import React from 'react'
import firstImage from '../../assets/images/Frame 32.png'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

function Card() {
  return (
    <div className='w-[260px] h-[330px]  rounded-xl'>
      <div className='w-full h-[70%]  rounded-xl overflow-hidden'>
        <img src={firstImage} alt="orange Shirt" className='w-full h-full object-cover' />
      </div>
      <div className='w-full h-[30%]  px-2 py-1 flex flex-col gap-1.5'>
        <h3 className='font-[satoshi] font-[800] text-[20px] tracking-wide'>T-Shirt with Tap Details</h3>
        <div className='flex  items-center'>
            <span className='text-yellow-500'><FaStar /></span>
            <span className='text-yellow-500'><FaStar /></span>
            <span className='text-yellow-500'><FaStar /></span>
            <span className='text-yellow-500'><FaStar /></span>
            <span className='text-yellow-500'><FaStarHalf /></span>
            <span>
            <p className='font-[satoshi] text-[14px]'>4.5/<span className='text-gray-400'>5</span></p>
            </span>
        </div>
        <p className='font-[satoshi] font-[800] text-[18px]'>$240 <del className="text-gray-400">$260</del><span className='bg-red-300/40 text-red-600 px-3 py-1 rounded-full text-[12px] ml-2'>-20%</span></p>
      </div>
    </div>
  )
}

export default Card
