import React from 'react'
import './HeroSection.css'
import smallStar from '../../assets/images/Vector.png'
import BigStar from '../../assets/images/Vector (1).png'
import HeroImage from '../../assets/images/heroSectionImages.png'

function HeroSection() {
  return (
    <div className='w-full h-auto md:h-[450px] bg-[#F2F0F1] md:flex'>
      {/* Left Column */}
      <div className='md:w-[50%] w-full h-full flex gap-2 pt-6 md:pt-3 flex-col justify-center items-center'>
        
        {/* Content Box */}
        <div className='w-[90%] ml-5 md:ml-0 md:w-[90%] md:ml-5 text-left flex flex-col items-start'>
          <h1 className='heroHead  text-[38px] sm:text-[48px] md:text-[55px] leading-tight md:leading-none text-left'>
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className='paraHead text-[14px] sm:text-[16px] leading-[20px] font-normal text-[#666666] my-3 md:my-0'>
            Browser through our diverse range of meticulously crafted garments, design to bring out your individuality and cater to your sens of style.
          </p>
          <button className='btnHead active:scale-95 w-full sm:w-[210px] bg-black hover:bg-black/95 transition duration-300 cursor-pointer text-white border h-[50px] rounded-full mt-2 md:mt-0'>
            Shop Now
          </button>
        </div>

        {/* Stats Row */}
        <div className='w-[90%] mt-4 md:mt-2 h-auto md:h-[110px] flex flex-wrap sm:flex-nowrap justify-center items-center gap-y-4 md:gap-y-0'>
          
          <div className='w-1/2 sm:w-full h-[80%] border-r border-gray-400/60 flex justify-center items-center'>
            <div className='w-[90%] text-center leading-[29px]'>
              <h3 className='font-[satoshi] text-[24px] sm:text-[31px] font-[800]'>200+</h3>
              <p className='font-[satoshi] text-[#666666] text-[12px] sm:text-[16px]'>International Brands</p>
            </div>
          </div>

          <div className='w-1/2 sm:w-full h-[80%] sm:border-r border-gray-400/60 flex justify-center items-center'>
            <div className='w-[90%] text-center leading-[29px]'>
              <h3 className='font-[satoshi] text-[24px] sm:text-[31px] font-[800]'>2,000+</h3>
              <p className='font-[satoshi] text-[#666666] text-[12px] sm:text-[16px]'>Hight Quality Products</p>
            </div>
          </div>

          <div className='w-full sm:w-full h-full border-gray-400/60 flex justify-center items-center'>
            <div className='w-[90%] text-center leading-[29px]'>
              <h3 className='font-[satoshi] text-[24px] sm:text-[31px] font-[800]'>30,000+</h3>
              <p className='font-[satoshi] text-[#666666] text-[12px] sm:text-[16px]'>Happy Customers</p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Column / Hero Image */}
      <div className='w-full md:w-[50%] h-[350px] sm:h-[400px] md:h-full relative mt-6 md:mt-0 flex justify-center items-end'>
        <div className='absolute top-12 left-6 md:top-55 md:left-14'>
          <img src={smallStar} alt="small Star Image" className='w-8 md:w-auto' />
        </div>

        <div className='md:w-[450px] md:pt-[4px] w-[260px] sm:w-[320px] md:ml-23 h-full flex items-end justify-center'>
          <img src={HeroImage} alt="hero image" className='w-full h-full object-contain' />
        </div>

        <div className='absolute top-6 right-8 md:top-15 md:right-30'>
          <img src={BigStar} alt="big Star Image" className='w-14 md:w-auto' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection