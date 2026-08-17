import React from 'react'
import casualImage from '../../assets/images/image 11.png'
import formalImage from '../../assets/images/image 13.png'
import partyImage from '../../assets/images/image 12.png'
import gymImage from '../../assets/images/image 14.png'
import { categories } from '../../utils/data'


function BrowseByDressStyle() {
  return (
    <div className="w-full max-w-[1200px] h-auto mb-5 mt-[70px]  mx-auto rounded-3xl  bg-[#F0F0F0]">
        <div className='w-full h-[90px]  mt-5 text-center items-center flex justify-center text-[33px]'>
            <h3 className='font-[Integral_CF]'>Browse By Dress style</h3>
        </div>
        <div className='w-full max-w-[1200px]  mx-auto py-2 px-3 h-auto'>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        
        {/* ROW 1 */}
        {/* Card 1 (1 Column space - 33%) */}
        <div className="md:col-span-1 relative h-64 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
          <h3 className="absolute top-6 left-6 text-2xl font-bold text-black z-10">
            Casual
          </h3>
          <img
            src={casualImage}
            alt="Casual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2 (2 Columns space - 66%) */}
        <div className="md:col-span-2 relative h-64 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
          <h3 className="absolute top-6 left-6 text-2xl font-bold text-black z-10">
            Formal
          </h3>
          <img
            src={formalImage}
            alt="Formal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ROW 2 */}
        {/* Card 3 (2 Columns space - 66%) */}
        <div className="md:col-span-2 relative h-64 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
          <h3 className="absolute top-6 left-6 text-2xl font-bold text-black z-10">
            Party
          </h3>
          <img
            src={partyImage}
            alt="Party"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 4 (1 Column space - 33%) */}
        <div className="md:col-span-1 relative h-64 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
          <h3 className="absolute top-6 left-6 text-2xl font-bold text-black z-10">
            Gym
          </h3>
          <img
            src={gymImage}
            alt="Gym"   
            className="w-full h-full object-cover"
          />
        </div>

      </div>
        </div>
    </div>
  )
}

export default BrowseByDressStyle
