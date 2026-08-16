import React from 'react'
import firstLogo from '../../assets/images/Group.png'
import secondLogo from '../../assets/images/zara-logo-1 1.png'
import thirdLogo from '../../assets/images/gucci-logo-1 1.png'
import fourthLogo from '../../assets/images/prada-logo-1 1.png'
import fifthLogo from '../../assets/images/Group (1).png'



function Trusted() {
  return (
    <div className='w-full h-[90px] bg-black  flex justify-center items-center '>
        <div className='max-w-[1200px] w-full h-full  flex gap-3'>
            <div className='w-[250px] h-full  flex justify-center items-center'>
                <img src={firstLogo} alt="versace Img" />
            </div>
            <div className='w-[250px] h-full  flex justify-center items-center'>
                <img src={secondLogo} alt="versace Img" />
            </div>
            <div className='w-[250px] h-full  flex justify-center items-center'>
                <img src={thirdLogo} alt="versace Img" />
            </div>
            <div className='w-[250px] h-full  flex justify-center items-center'>
                <img src={fourthLogo} alt="versace Img" />
            </div>
            <div className='w-[250px] h-full  flex justify-center items-center'>
                <img src={fifthLogo} alt="versace Img" />
            </div>
        </div>
    </div>
  )
}

export default Trusted
