import React from 'react'
import firstLogo from '../../assets/images/Group.png'
import secondLogo from '../../assets/images/zara-logo-1 1.png'
import thirdLogo from '../../assets/images/gucci-logo-1 1.png'
import fourthLogo from '../../assets/images/prada-logo-1 1.png'
import fifthLogo from '../../assets/images/Group (1).png'

function Trusted() {
  return (
    /* Height mobile par auto, desktop par exact h-[90px] */
    <div className='w-full h-auto md:h-[90px] bg-black py-6 md:py-0 flex justify-center items-center px-4'>
        <div className='max-w-[1200px] w-full h-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 md:gap-3'>
            
            <div className='w-28 sm:w-36 md:w-[250px] h-auto md:h-full flex justify-center items-center'>
                <img src={firstLogo} alt="versace Img" className='max-h-7 md:max-h-none object-contain' />
            </div>

            <div className='w-28 sm:w-36 md:w-[250px] h-auto md:h-full flex justify-center items-center'>
                <img src={secondLogo} alt="zara Img" className='max-h-7 md:max-h-none object-contain' />
            </div>

            <div className='w-28 sm:w-36 md:w-[250px] h-auto md:h-full flex justify-center items-center'>
                <img src={thirdLogo} alt="gucci Img" className='max-h-7 md:max-h-none object-contain' />
            </div>

            <div className='w-28 sm:w-36 md:w-[250px] h-auto md:h-full flex justify-center items-center'>
                <img src={fourthLogo} alt="prada Img" className='max-h-7 md:max-h-none object-contain' />
            </div>

            <div className='w-28 sm:w-36 md:w-[250px] h-auto md:h-full flex justify-center items-center'>
                <img src={fifthLogo} alt="calvin klein Img" className='max-h-7 md:max-h-none object-contain' />
            </div>

        </div>
    </div>
  )
}

export default Trusted