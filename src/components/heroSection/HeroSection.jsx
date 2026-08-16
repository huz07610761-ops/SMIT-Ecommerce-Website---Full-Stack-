import React from 'react'
import './HeroSection.css'
import smallStar from '../../assets/images/Vector.png'
import BigStar from '../../assets/images/Vector (1).png'
import HeroImage from '../../assets/images/heroSectionImages.png'

function HeroSection() {
  return (
    <div className='w-full md:h-[450px] h-[500px]  bg-[#F2F0F1] md:flex'>
      <div className='md:w-[50%]  w-full  h-full flex gap-2 pt-3  flex-col justify-center items-center'>
        <div className='md:w-[90%]  ml-5'>
        <h1 className='heroHead text-[55px] leading-none'>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
        <p className='paraHead text-[16px] leading-[20px] font-normal text-[#666666]'>Browser through our diverse range of meticulously crafted garments, design to bring out your individuality and cater to your sens of style.</p>
        <button className='btnHead active:scale-95 w-[210px] bg-black hover:bg-black/95 transition duration-300 cursor-pointer text-white border h-[50px] rounded-full'>Shop Now</button>
        </div>
        <div className='w-[90%] mt-2 h-[110px] flex '>
            <div className='w-full h-[80%] mt-3 border-r border-gray-400/60 flex justify-center items-center'>
                <div className='w-[90%]  text-center leading-[29px]'>
                    <h3 className='font-[satoshi] text-[31px] font-[800]'>200+</h3>
                    <p className='font-[satoshi] text-[#666666]'>International Brands</p>
                </div>
            </div>
            <div className='w-full h-[80%] mt-3 border-r border-gray-400/60 flex justify-center items-center'>
                <div className='w-[90%]  text-center leading-[29px]'>
                    <h3 className='font-[satoshi] text-[31px] font-[800]'>2,000+</h3>
                    <p className='font-[satoshi] text-[#666666]'>Hight Quality Products</p>
                </div>
            </div>
            <div className='w-full h-full  border-gray-400/60 flex justify-center items-center'>
                <div className='w-[90%]  text-center leading-[29px]'>
                    <h3 className='font-[satoshi] text-[31px] font-[800]'>30,000+</h3>
                    <p className='font-[satoshi] text-[#666666]'>Happy Customers</p>
                </div>
            </div>
        </div>
      </div>
      <div className='w-[50%]  h-full relative'>
        <div className='absolute top-55 left-14'>
            <img src={smallStar} alt="small Star Image" />
        </div>
        <div className='md:w-[450px] md:pt-[4px] w-[200px] ml-23'>
           <img src={HeroImage} alt="hero image" />
        </div>
        <div className='absolute top-15 right-30'>
            <img src={BigStar} alt="small Star Image" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
