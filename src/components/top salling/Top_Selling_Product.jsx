import React from 'react'
import Card from '../Card/Card'
import Button from '../button/Button'
import { Product } from '../../utils/data'

function Top_Selling_Product() {
  return (
    <div className='w-full h-[550px] border mb-5 mt-10  pt-6'>
      <div className='max-w-[1200px] w-full h-[15%]  mx-auto flex justify-center items-center'>
         <h1 className='text-3xl font-[Integral_CF] tracking-wide'>Top Selling</h1>
      </div>
      <div className='w-full max-w-[1200px] h-auto py-3 px-1  mx-auto mt-2 flex flex-wrap justify-center items-center gap-9'>
          {Product.slice(4,8).map((data)=>(
                    <Card data={data}/>
                ))}
      </div>
      <div className='max-w-[1200px] w-full h-[15%]  mx-auto flex justify-center items-center'>
         <Button name="view all"/>
      </div>
    </div>
  )
}

export default Top_Selling_Product
