import React from 'react'
import Card from '../Card/Card'
import Button from '../button/Button'
import { Product } from '../../utils/data'

function Top_Selling_Product() {
  return (

    <div className='w-full h-auto md:h-[550px]  mb-5 mt-10 pt-6 px-4 md:px-0'>
      
      {/* Heading Section */}
      <div className='max-w-[1200px] w-full md:h-[15%] mx-auto flex justify-center items-center mb-6 md:mb-0'>
         <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold font-[Integral_CF] uppercase tracking-wide text-center'>
           Top Selling
         </h1>
      </div>

      {/* Products Section */}
      <div className='w-full max-w-[1200px] h-auto py-3 px-1 mx-auto mt-2 flex overflow-x-auto md:overflow-visible md:flex-wrap justify-start md:justify-center items-center gap-4 sm:gap-6 md:gap-9 scrollbar-none snap-x snap-mandatory'>
        {Product.slice(4, 8).map((data, index) => (
          <div key={index} className='snap-start flex-shrink-0 md:flex-shrink'>
            <Card data={data} />
          </div>
        ))}
      </div>

      {/* Button Section */}
      <div className='max-w-[1200px] w-full md:h-[15%] mx-auto flex justify-center items-center my-6 md:my-0'>
         <Button name="View All" />
      </div>

    </div>
  )
}

export default Top_Selling_Product;